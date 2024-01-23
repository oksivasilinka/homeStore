import { useEffect } from 'react'

import { EmptyCart, ProductsItem } from '@/pages'
import { CartForm } from '@/pages/cart/cartForm'
import { clearCart } from '@/services/cart'
import { setCurrentPage, setFilter } from '@/services/products'
import { useAppDispatch } from '@/services/store'
import { ProductInCart } from '@/services/types'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import s from './cart.module.scss'

type Props = {
  cart: ProductInCart[]
  isAuth: boolean
  totalSum: number
}

export const Cart = ({ cart, isAuth, totalSum }: Props) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setCurrentPage({ currentPage: 1 }))
    dispatch(setFilter({ filter: 'all' }))
  }, [])

  const clearCardHandler = () => {
    dispatch(clearCart())
  }

  return (
    <>
      <Typography color={'primary'} className={s.title} variant={'h4'}>
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
              <Box className={s.wrapperTotal}>
                <Typography variant={'h5'} color={'primary'}>
                  Итого {totalSum || 0} руб.
                </Typography>
                <Button onClick={clearCardHandler}>Очистить корзину</Button>
              </Box>
            </Box>
            <CartForm clearCardHandler={clearCardHandler} totalSum={totalSum} />
          </>
        )}
        {!totalSum && (
          <EmptyCart link={'Вернуться в каталог'} path={'/'} title={'Ваша корзина пуста'} />
        )}
      </Box>
    </>
  )
}
