import { Product, ProductCard } from '@/components/productCardsList/productCard'

import s from './productCardsList.module.scss'

type Props = {
  products: Product[]
}

export const ProductCardsList = ({ products }: Props) => {
  return (
    <div className={s.wrapper}>
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
