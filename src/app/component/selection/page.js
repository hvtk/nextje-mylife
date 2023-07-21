import Image from 'next/image'
import styles from './selection.module.css' 

export function Selection({ src, alt }) {
  return (
    <Image
      src={src} 
      alt={alt} 
      width={153} 
      height={153}
      style={{borderRadius: "7px"}}
    />
  )
}

export function SelectionName({ children }) {
  return (
    <p className={styles.name_selection}>
      { children }
    </p>
  )
}