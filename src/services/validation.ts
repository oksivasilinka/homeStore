import { object, ref, string } from 'yup'

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const emailSchema = string()
  .required('Поле обязательно для заполнения')
  .email('Неверный формат электронной почты')
  .min(10, 'Минимум 10 символов')
  .max(30, 'Не более 30 символов')

const passwordSchema = string()
  .required('Поле обязательно для заполнения')
  .min(5, 'Минимум 5 символов')
  .max(10, 'Не более 10 символов')

const nameSchema = string()
  .required('Поле обязательно для заполнения')
  .min(3, 'Минимум 3 символа')
  .max(30, 'Не более 30 символов')

const phoneSchema = string()
  .matches(phoneRegExp, 'Phone number is not valid')
  .required('Поле обязательно для заполнения')

export const formSchema = object({
  email: emailSchema,
  name: nameSchema,
  phone: phoneSchema,
})

export const signInSchema = object({
  email: emailSchema,
  password: passwordSchema,
})

export const loginSchema = object({
  confirmPassword: passwordSchema.oneOf([ref('password')], 'Пароли не совпадают'),
  email: emailSchema,
  password: passwordSchema,
})
