import { useContext } from 'react';
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

export interface Props {
    title?: string
    className?: string
}
export const ProductTitle = ({ title , className}: Props) => {

    const { product } = useContext( ProductContext )
    let stylesTitle = `${styles.productDescription} ${className}`
    return (
        <span className={ stylesTitle }>
            { title ? title : product.title }
        </span>
    );
}