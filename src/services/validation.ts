import { object, string } from 'yup'

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const formSchema = object({
  email: string().required().email().min(10).max(30),
  name: string().required().min(3).max(30),
  phone: string().matches(phoneRegExp, 'Phone number is not valid').required(),
})
