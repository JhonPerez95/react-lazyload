import { Props as PropsCardButtons } from '../components/ProductButtons'
import { Props as ProductCardProps } from '../components/ProductCard'
import { Props as PropsCardImage } from '../components/ProductImage'
import { Props as PropsCardTitle } from '../components/ProductTitle'

export interface Product {
  id: string
  title: string
  img?: string
}

export interface ProductContextProps {
  counter: number
  increaseBy: (value: number) => void
  product: Product
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element
  Buttons: (Props: PropsCardButtons) => JSX.Element
  Image: (Props: PropsCardImage) => JSX.Element
  Title: (Props: PropsCardTitle) => JSX.Element
}
