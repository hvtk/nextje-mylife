import styles from './homepage.module.css'
import { Selection } from '../component/selections/selection'
import { SelectionName } from '../component/selections/selectionName'
import { SidebarBase } from '../component/sidebar/base'
import selectImageWhereILive from 'public/images/selections/where i live.jpg'
import selectImageFamily from 'public/images/selections/family.jpg'


export default function Page() {
  return (
   <body className={styles.homepageLayout}>
    <div id={styles.sidebar}>
      <SidebarBase/>
    </div>
    <main>
        <article>
          <div id={styles.figureFamily}>
            <Selection 
              src={selectImageFamily}
              alt="image respresending my family and friends"
            />
          </div>
          <div id={styles.figcaptionFamily}>
            <SelectionName>
            Family and Friends
            </SelectionName>
          </div>
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
   </body>
  )
}