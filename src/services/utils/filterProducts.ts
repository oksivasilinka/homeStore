import { Category, ProductInCart } from '@/services/types'

export const filterProducts = (products: ProductInCart[], filter: Category) => {
  if (filter !== 'all') {
    return products.filter((el: ProductInCart) => el.category === filter)
  } else {
    return products
  }
}
