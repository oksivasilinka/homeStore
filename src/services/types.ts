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
  confirmPassword?: string
  email: string
  password: string
}

export type ErrorData = {
  code: string
}

export type AuthData = AuthBaseData & {
  email: null | string
}

export type LoginData = AuthBaseData & {
  email: string
}

export type AuthBaseData = {
  id: string
  token: string
}

export type Status = 'idle' | 'loading'
