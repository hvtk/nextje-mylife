import Image from 'next/image'
import MylifeLogoImageFill from 'public/images/mylife-logo/life.jpg'
import MylifeLogoImageTopLeft from 'public/images/mylife-logo/home.jpg'
import MylifeLogoImageTopRight from 'public/images/mylife-logo/sad.jpg'
import MylifeLogoImageBottomRight from 'public/images/mylife-logo/working.jpg'
import MylifeLogoImageBottomLeft from 'public/images/mylife-logo/happy.jpg'

export function MylifeLogoFS() {
  return (
    <Image
      src={MylifeLogoImageFill}
      alt="image that fills the parent element"
      width={80}
      height={80}
    />
  )
}

export function MylifeLogoTL() {
  return (
    <Image
      src={MylifeLogoImageTopLeft}
      alt="image on top left in the parent element"
      width={26}
      height={30}
    />
  )
}

export function MylifeLogoTR() {
  return (
    <Image
      src={MylifeLogoImageTopRight}
      alt="image on top right in the parent element"
      width={24}
      height={35}
    />
  )
}

export function MylifeLogoBR() {
  return (
    <Image
      src={MylifeLogoImageBottomRight}
      alt="image on bottom right in the parent element"
      width={34}
      height={30}
    />
  )
}

export function MylifeLogoBL() {
  return (
    <Image
      src={MylifeLogoImageBottomLeft}
      alt="image on bottom left in the parent element"
      width={35}
      height={35}
    />
  )
}