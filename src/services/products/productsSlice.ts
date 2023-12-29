import { db } from '@/config/firebase.ts'
import { Category, ProductInCart } from '@/services'
import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'

const slice = createSlice({
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
    setProducts: (state, action: PayloadAction<{ products: any[] }>) => {
      state.products = action.payload.products
    },
  },
})

export const getProducts =
  (currentPage: number, pageSize: number, filter: '' | Category) => async (dispatch: Dispatch) => {
    try {
      const productsCollectionRef = collection(db, 'product')
      const data = await getDocs(productsCollectionRef)

      const productsData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))

      let filteredProducts = productsData

      if (filter === 'cushioned') {
        filteredProducts = productsData.filter((el: any) => el.category === 'cushioned')
      }
      if (filter === 'cabinet') {
        filteredProducts = productsData.filter((el: any) => el.category === 'cabinet')
      }

      const pageCount = Math.ceil(filteredProducts.length / pageSize)
      const updatedCurrentPage = Math.min(currentPage, pageCount)

      const paginatedData = filteredProducts.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
      )

      dispatch(setProducts({ products: paginatedData }))
      dispatch(setPageCount({ pageCount }))
      dispatch(setCurrentPage({ currentPage: updatedCurrentPage }))
    } catch (e) {
      console.log(e)
    }
  }

export const productsSlice = slice.reducer
export const { setCurrentPage, setFilter, setPageCount, setProducts } = slice.actions
