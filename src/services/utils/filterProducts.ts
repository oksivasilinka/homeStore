import { Category } from '@/services'

export const filterProducts = (products: { id: string }[], filter: Category) => {
  if (filter !== 'all') {
    return products.filter((el: any) => el.category === filter)
  } else {
    return products
  }
}
