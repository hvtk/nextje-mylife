import styles from './dashboard.module.css'
import {Selection} from '../component/selection/page'

export default function Page() {
  return (
    <main className={styles.main}>
        <article>
          <Selection />
          <p className={styles.name_selection}> Family and Friends</p>
        </article>
    </main>
  )
}