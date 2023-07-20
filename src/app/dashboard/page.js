import styles from './page.module.css'
import Image from 'next/image'
import selectImageFamily from 'public/images/selections/family.jpg'

export default function Page() {
  return (
    <main className={styles.main}>
        <article>
          <Image src={selectImageFamily} 
               alt="images represending your family" 
               width={153} 
               height={153}
               className={styles.img_selection}
          />
          <p className={styles.name_selection}> Family and Friends</p>
        </article>
    </main>
  )
}