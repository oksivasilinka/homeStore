import { object, string } from 'yup'

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const formSchema = object({
  email: string()
    .required('Поле обязательно для заполнения')
    .email('Неверный формат электронной почты')
    .min(10, 'Минимум 10 символов')
    .max(30, 'Не более 30 символов'),
  name: string()
    .required('Поле обязательно для заполнения')
    .min(3, 'Минимум 3 символа')
    .max(30, 'Не более 30 символов'),
  phone: string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Поле обязательно для заполнения'),
})

export const signInSchema = object({
  email: string()
    .required('Поле обязательно для заполнения')
    .email('Неверный формат электронной почты')
    .min(10, 'Минимум 10 символов')
    .max(30, 'Не более 30 символов'),
  password: string()
    .required('Поле обязательно для заполнения')
    .min(5, 'Минимум 5 символов')
    .max(10, 'Не более 10 символов'),
})
