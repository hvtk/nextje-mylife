import Image from 'next/image'
import selectImageFamily from '../public/images/selections/family.jpg'

export default function Page() {
  return(
    <div>
      <Image
         src={selectImageFamily} 
         alt="images represending your family" 
         sizes="100vw"
      />
      <p> Family and Friends</p>
    </div>
  )
}