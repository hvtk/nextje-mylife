import styles from '/component/selections/styles.module.CSS'

export default function ComponentSelectionsLayout
({ children }) {
    return <img className={styles.img_selection}>{children}</img>
}

// export default function ComponentSelectionsLayout
// ({ children }) {
//     return <p className={styles.name_selection}>{children}</p> 
// }