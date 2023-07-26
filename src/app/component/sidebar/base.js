import styles from './sidebarStyles.module.css'
import { MylifeLogo } from './mylifeLogo'


export function SidebarBase() {
  return (
    <div className={styles.divSidebar} >
      <MylifeLogo /> 
    </div>
  )
}

