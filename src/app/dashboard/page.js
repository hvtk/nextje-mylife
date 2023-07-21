import styles from './dashboard.module.css'
import {Selection} from '../component/selection/page'
import selectImageWhereILive from 'public/images/selections/where i live.jpg'
import selectImageFamily from 'public/images/selections/family.jpg'

export default function Page() {
  return (
    <main className={styles.main}>
        <article>
          <Selection 
            src={selectImageFamily}
            alt="image respresending my family and friends"
          />
          <p className={styles.name_selection}> Family and Friends</p>
        </article>  
        <article>
          <Selection
            src={selectImageWhereILive} 
            alt="images represending my place to live"
          /> 
          <p className={styles.name_selection}> Where I live</p>
        </article>
    </main>
  )
}