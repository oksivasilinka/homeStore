import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { CartForm } from '@/components/cart/cartForm'
import { ProductCardInCart } from '@/components/productInCart'
import { ProductInCart, setCurrentPage, setFilter, useAppDispatch } from '@/services'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import s from './cart.module.scss'

type Props = {
  cart: ProductInCart[]
}

export const Cart = ({ cart }: Props) => {
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
        {!!totalSum && (
          <>
            <Box className={s.wrapperProducts}>
              {cart.map(p => (
                <ProductCardInCart key={p.name} product={p} />
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
