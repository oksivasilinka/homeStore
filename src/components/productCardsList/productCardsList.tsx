import { ProductCard } from '@/components/productCardsList/productCard'
import { ProductInCart } from '@/services'
import { Pagination } from '@mui/material'

import s from './productCardsList.module.scss'

type Props = {
  products: ProductInCart[]
}

export const ProductCardsList = ({ products }: Props) => {
  return (
    <div className={s.wrapper}>
      <Pagination count={10} shape={'rounded'} />
      <div className={s.products}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
