import styles from './selection.module.css' 

export function SelectionName({ children }) {
  return (
    <p className={styles.name_selection}>
      { children }
    </p>
  )
}