import { useState } from 'react'
import { onChangeArgs, Product } from '../interfaces/interfaces'

interface Params {
  counter?: number
  onChange?: (args: onChangeArgs) => void
  product: Product
}

export const useProduct = ({ onChange, product }: Params) => {
    const [counter, setCounter] = useState(0)
    
    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0)
        setCounter(newValue)
        onChange && onChange({count: newValue, product})
  }

  return {
    counter,
    increaseBy,
  }
}
