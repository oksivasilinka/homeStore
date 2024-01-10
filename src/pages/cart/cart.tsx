import { useEffect } from 'react'

import { EmptyCart, ProductsItem } from '@/pages'
import { CartForm } from '@/pages/cart/cartForm'
import { ProductInCart, setCurrentPage, setFilter, useAppDispatch, useAuth } from '@/services'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import s from './cart.module.scss'

type Props = {
  cart: ProductInCart[]
  totalSum: number
}

export const Cart = ({ cart, totalSum }: Props) => {
  const { isAuth } = useAuth()
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
          <EmptyCart
            link={'Зарегистрироваться и войти'}
            path={'/sign-in'}
            title={'Войдите в ваш аккаунт или зарегистрируйтесь'}
          />
        )}
        {!!totalSum && isAuth && (
          <>
            <Box className={s.wrapperProducts}>
              {cart?.map(p => <ProductsItem key={p.name} product={p} />)}
              <Typography variant={'h5'}>Итого {totalSum || 0} руб.</Typography>
            </Box>
            <CartForm totalSum={totalSum} />
          </>
        )}
        {!totalSum && (
          <EmptyCart link={'Вернуться в каталог'} path={'/'} title={'Ваша корзина пуста'} />
        )}
      </Box>
    </>
  )
}
