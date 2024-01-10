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

export type CartFormData = Omit<CartData, 'totalSum'>

export type CartData = {
  email: string
  name: string
  phone: string
  totalSum: number
}

export type Category = 'all' | 'cabinet' | 'cushioned'

export type SignInFormData = {
  email: string
  password: string
}

export type Error = {
  code: string
}
