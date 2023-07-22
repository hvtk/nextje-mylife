import Image from 'next/image'
import MylifeLogoImageFill from 'public/images/mylife-logo/life.jpg'
import MylifeLogoImageTopLeft from 'public/images/mylife-logo/home.jpg'

export function MylifeLogo() {
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
      alt="image that fills the parent element"
      width={26}
      height={30}
    />
  )
}