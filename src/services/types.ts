export type ProductInCart = {
  category: Category
  description: string
  id: string
  name: string
  photo: string
  price: number
  totalCount: number
  totalSum: number
}

export type CartFormData = {
  email: string
  name: string
  phone: string
}

export type Category = 'cabinet' | 'cushioned'
