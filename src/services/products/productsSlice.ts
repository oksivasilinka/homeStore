import { db } from '@/config/firebase'
import { setStatus } from '@/services/app'
import { Category, ProductInCart } from '@/services/types'
import { firebaseErrorHandler } from '@/services/utils'
import { createAppAsyncThunk } from '@/services/utils/createAppAsyncThunk'
import { filterProducts } from '@/services/utils/filterProducts'
import { paginationProducts } from '@/services/utils/paginationProducts'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'

const slice = createSlice({
  extraReducers: builder => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload.products
      state.currentPage = action.payload.currentPage
      state.pageCount = action.payload.pageCount
    })
  },
  initialState: {
    currentPage: 1 as number,
    filter: 'all' as Category,
    pageCount: 1 as number,
    products: [] as ProductInCart[],
  },
  name: 'products',
  reducers: {
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage
    },
    setFilter: (state, action: PayloadAction<{ filter: Category }>) => {
      state.filter = action.payload.filter
    },
    setPageCount: (state, action: PayloadAction<{ pageCount: number }>) => {
      state.pageCount = action.payload.pageCount
    },
  },
})

const getProducts = createAppAsyncThunk<
  { currentPage: number; pageCount: number; products: ProductInCart[] },
  { currentPage: number; filter: Category; pageSize: number }
>(
  'products/getProducts',
  async ({ currentPage, filter, pageSize }, { dispatch, rejectWithValue }) => {
    dispatch(setStatus({ status: 'loading' }))
    try {
      const productsCollectionRef = collection(db, 'product')
      const data = await getDocs(productsCollectionRef)

      const productsData: ProductInCart[] = data.docs.map(doc => {
        const product = doc.data() as ProductInCart

        product.id = doc.id

        return product
      })

      const filteredProducts = filterProducts(productsData, filter)
      const { pageCount, productsInPage, updatedCurrentPage } = paginationProducts(
        filteredProducts,
        pageSize,
        currentPage
      )

      dispatch(setStatus({ status: 'idle' }))

      return { currentPage: updatedCurrentPage, pageCount, products: productsInPage }
    } catch (e) {
      firebaseErrorHandler(e, dispatch)
    }
    dispatch(setStatus({ status: 'idle' }))

    return rejectWithValue(null)
  }
)

export const productsSlice = slice.reducer
export const { setCurrentPage, setFilter } = slice.actions
export const productsThunks = { getProducts }
