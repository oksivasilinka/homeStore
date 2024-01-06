import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { CartForm } from '@/pages/cart/cartForm'
import { ProductsInCart } from '@/pages/cart/productsInCart'
import { ProductInCart, setCurrentPage, setFilter, useAppDispatch, useAuth } from '@/services'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import s from './cart.module.scss'

type Props = {
  cart: ProductInCart[]
}

export const Cart = ({ cart }: Props) => {
  const { isAuth } = useAuth()
  const totalSum = cart.map(el => el.totalSum).reduce((a, b) => a + b, 0)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setCurrentPage({ currentPage: 1 }))
    dispatch(setFilter({ filter: 'all' }))
  }, [])

  return (
    <>
      <Typography className={s.title} variant={'h4'}>
        Корзина
      </Typography>
      <Box className={s.wrapper}>
        {!isAuth && (
          <Box className={s.emptyCart}>
            <Typography variant={'h6'}>Войдите в ваш аккаунт или зарегистрируйтесь</Typography>
            <NavLink to={'/login'}>
              <Typography variant={'body2'}>Зарегистрироваться и войти</Typography>
            </NavLink>
          </Box>
        )}
        {!!totalSum && isAuth && (
          <>
            <Box className={s.wrapperProducts}>
              {cart.map(p => (
                <ProductsInCart key={p.name} product={p} />
              ))}
              <>
                <Typography variant={'h5'}>Итого {totalSum || 0} руб.</Typography>
              </>
            </Box>

            <Box>
              <CartForm />
            </Box>
          </>
        )}
        {!totalSum && (
          <Box className={s.emptyCart}>
            <Typography variant={'h6'}>Ваша корзина пуста</Typography>
            <NavLink to={'/'}>
              <Typography variant={'body2'}>Вернуться в каталог</Typography>
            </NavLink>
          </Box>
        )}
      </Box>
    </>
  )
}
