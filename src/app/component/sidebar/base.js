import styles from './sidebarStyles.module.css'
import { MylifeLogoFS } from './mylifeLogo'
import { MylifeLogoTL } from './mylifeLogo'
import { MylifeLogoTR } from './mylifeLogo'
import { MylifeLogoBR } from './mylifeLogo'
import { MylifeLogoBL } from './mylifeLogo'

export function SidebarBase() {
  return (
    <div className={styles.divSidebar} >
          <div className={styles.divLogo} >
            <div className={styles.mylifeLogoFS} >
                <MylifeLogoFS/>
            </div>
            <div className={styles.mylifeLogoTL} >
                <MylifeLogoTL />
            </div>
            <div className={styles.mylifeLogoTR} >
                <MylifeLogoTR />
            </div>
            <div className={styles.mylifeLogoBR} >
                <MylifeLogoBR />
            </div>
            <div className={styles.mylifeLogoBL} >
                <MylifeLogoBL />
            </div>
          </div>
    </div>
  )
}

