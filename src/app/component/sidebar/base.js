import styles from './sidebarStyles.module.css'
import { MylifeLogo } from './mylifeLogo'
import MylifeLogeImageFill from 'public/images/mylife-logo/life.jpg'

export function SidebarBase() {
  return (
    <main className={styles.main}>
      <MylifeLogo
         src={MylifeLogeImageFill}
         alt="image that fills the parent element"
         width={80} 
         height={80}
         style={{borderRadius: "3px", 
                 position: "absolute",
                 border: "1px",
                 border: "solid",
                 borderColor: "#222"
         }}
      />
    </main>
  )
}

