import { db } from '@/config/firebase'
import { Category, ErrorData, ProductInCart } from '@/services'
import { filterProducts } from '@/services/utils/filterProducts'
import { paginationProducts } from '@/services/utils/paginationProducts'
import { Dispatch, PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'

const slice = createSlice({
  extraReducers: builder => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload.products
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

export const getProducts = createAsyncThunk<
  any,
  { currentPage: number; filter: Category; pageSize: number },
  {
    dispatch: Dispatch
    rejectWithValue: ErrorData | null
  }
>(
  'products/getProducts',
  async ({ currentPage, filter, pageSize }, { dispatch, rejectWithValue }) => {
    try {
      const productsCollectionRef = collection(db, 'product')
      const data = await getDocs(productsCollectionRef)

      const productsData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))

      const filteredProducts = filterProducts(productsData, filter)
      const { pageCount, productsInPage, updatedCurrentPage } = paginationProducts(
        filteredProducts,
        pageSize,
        currentPage
      )

      dispatch(setPageCount({ pageCount }))
      dispatch(setCurrentPage({ currentPage: updatedCurrentPage }))

      return { products: productsInPage }
    } catch (e) {
      return rejectWithValue(null)
    }
  }
)

export const productsSlice = slice.reducer
export const { setCurrentPage, setFilter, setPageCount } = slice.actions
