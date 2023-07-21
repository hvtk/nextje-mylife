import Image from 'next/image'
import selectImageFamily from 'public/images/selections/family.jpg'

export function Selection() {
  return (
    <Image
      src={selectImageFamily} 
      alt="images represending your family" 
      width={153} 
      height={153}
      style={{borderRadius: "7px"}}
    />
  )
}