import { useState } from 'react'
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components'
import { products } from '../data/products'
import { useShopping } from '../hooks/useShopping'
import { Product } from '../interfaces/interfaces'
import '../styles/custom-styles.css'

export const ShoppingPage = () => {
  const { shoppingCard, onProductChange } = useShopping()

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {products.map((item) => (
          <ProductCard
            className="bg-dark"
            key={item.id}
            onChange={onProductChange}
            product={item}
            value={shoppingCard[item.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-card">
        {Object.values(shoppingCard).map((item) => (
          <ProductCard
            className="bg-dark"
            key={item.id}
            onChange={onProductChange}
            product={item}
            style={{ width: '100px' }}
            value={item.count}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{ display: 'flex', justifyContent: 'center' }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  )
}
