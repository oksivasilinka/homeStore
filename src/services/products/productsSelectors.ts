import { AppRootState } from '@/services/store'

export const productsSelector = (state: AppRootState) => state.products.products
export const pageCountSelector = (state: AppRootState) => state.products.pageCount
export const currentPageSelector = (state: AppRootState) => state.products.currentPage
export const filterSelector = (state: AppRootState) => state.products.filter
