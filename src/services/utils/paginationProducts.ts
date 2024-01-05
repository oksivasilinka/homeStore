export const paginationProducts = (
  products: {
    id: string
  }[],
  pageSize: number,
  currentPage: number
) => {
  const pageCount = Math.ceil(products.length / pageSize)

  const updatedCurrentPage = Math.min(currentPage, pageCount)
  const productsInPage = products.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  return { pageCount, productsInPage, updatedCurrentPage }
}
