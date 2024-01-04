export const paginationProducts = (
  products: {
    id: string
  }[],
  pageSize: number,
  currentPage: number
) => {
  const pageCount = Math.ceil(products.length / pageSize)

  const updatedCurrentPage = Math.min(currentPage, pageCount)
  const paginatedData = products.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  return { pageCount, paginatedData, updatedCurrentPage }
}
