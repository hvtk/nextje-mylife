import styles from './sidebarStyles.module.css'
import { MylifeLogo } from './mylifeLogo'
import { MylifeLogoTL } from './mylifeLogo'

export function SidebarBase() {
  return (
    <div className={styles.divSidebar} >
          <div className={styles.divLogo} >
            <div className={styles.mylifeLogFS} >
                <MylifeLogo/>
            </div>
            <div className={styles.mylifeLogoTL} >
                <MylifeLogoTL />
            </div>
          </div>
    </div>
  )
}

