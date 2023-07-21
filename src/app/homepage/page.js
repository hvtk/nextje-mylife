import styles from './homepage.module.css'
import { Selection } from '../component/selections/selection'
import { SelectionName } from '../component/selections/selectionName'
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