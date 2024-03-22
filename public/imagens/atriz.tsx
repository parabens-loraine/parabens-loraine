import atriz from '../atriz.png'
import Image from 'next/image'

export default function ImagemAtriz() {
  return <Image src={atriz} width={300} height={400} alt="Atriz" />
}
