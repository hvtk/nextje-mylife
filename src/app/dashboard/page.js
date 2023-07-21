import styles from './dashboard.module.css'
import { Selection } from '../component/selection/page'
import selectImageWhereILive from 'public/images/selections/where i live.jpg'
import selectImageFamily from 'public/images/selections/family.jpg'
import { SelectionName } from '../component/selection/page'

export default function Page() {
  return (
    <main className={styles.main}>
        <article>
          <Selection 
            src={selectImageFamily}
            alt="image respresending my family and friends"
          />
          <SelectionName>
           Family and Friends
          </SelectionName>
        </article>  
        <article>
          <Selection
            src={selectImageWhereILive} 
            alt="images represending my place to live"
          /> 
          <SelectionName>
          Where I live
          </SelectionName>
        </article>
    </main>
  )
}