import { db } from '@/config/firebase'
import { ProductInCart } from '@/services'
import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'

const slice = createSlice({
  initialState: {
    currentPage: 1 as number,
    pageCount: 1 as number,
    products: [] as ProductInCart[],
  },
  name: 'products',
  reducers: {
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage
    },
    setPageCount: (state, action: PayloadAction<{ pageCount: number }>) => {
      state.pageCount = action.payload.pageCount
    },
    setProducts: (state, action: PayloadAction<{ products: any[] }>) => {
      state.products = action.payload.products
    },
  },
})

const pageSize = 10

export const getProducts = (currentPage: number) => async (dispatch: Dispatch) => {
  try {
    const productsCollectionRef = collection(db, 'product')
    const data = await getDocs(productsCollectionRef)
    const productsData = data.docs.map(doc => doc.data())
    const filteredData = productsData.slice((currentPage - 1) * pageSize, currentPage * pageSize)

    dispatch(setProducts({ products: filteredData }))
    dispatch(setPageCount({ pageCount: Math.ceil(productsData.length / pageSize) }))
  } catch (e) {
    console.log(e)
  }
}

export const productsSlice = slice.reducer
export const { setCurrentPage, setPageCount, setProducts } = slice.actions
