import Image from 'next/image'


export function MylifeLogo({ src, alt, widht, height, style }) {
  return (
    <Image
      src={src} 
      alt={alt} 
      width={widht} 
      height={height}
      style={style}
    />
  )
}