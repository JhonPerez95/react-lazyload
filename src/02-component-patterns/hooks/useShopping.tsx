import { useState } from 'react'
import { Product } from '../interfaces/interfaces'

interface ProductInCard extends Product {
  count: number
}

interface ArgOnProductInCard {
  product: Product
  count: number
}

export const useShopping = () => {
  const [shoppingCard, setShoppingCard] = useState<{
    [key: string]: ProductInCard
  }>({})

  const onProductChange = ({ product, count }: ArgOnProductInCard) => {
    setShoppingCard((oldShoppingCard) => {
      const productInCard: ProductInCard = oldShoppingCard[product.id] || {
        ...product,
        count: 0,
      }

      if (Math.max(productInCard.count + count, 0) > 0) {
        productInCard.count += count
        return {
          ...oldShoppingCard,
          [product.id]: productInCard,
        }
      }

      const { [product.id]: deled, ...rest } = oldShoppingCard
      return rest

      // if (count === 0) {
      //   const { [product.id]: deled, ...rest } = oldShoppingCard
      //   return rest
      // }

      // return {
      //   ...oldShoppingCard,
      //   [product.id]: { ...product, count },
      // }
    })
  }

  return { shoppingCard, onProductChange }
}
