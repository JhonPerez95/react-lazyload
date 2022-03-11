import styles from '../styles/styles.module.css'
import noImg from '../assets/no-image.jpg'
import { useProduct } from '../hooks/useProduct'

interface Props {
  product: Product
}
 interface Product{
   id: string,
   tittle: string,
   img?: string
 }
export const ProductCard = ( { product}:Props) => {
  const {counter,increaseBy} = useProduct()
  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src={product.img ? product.img : noImg}
        alt="coffe Mug"
      />
      {/* <img  className={styles.productImg} src={noImg} alt="coffe Mug" /> */}
      <span className={styles.productDescription}>{product.tittle}</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}> {counter} </div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
          +
        </button>
      </div>
    </div>
  )
}
