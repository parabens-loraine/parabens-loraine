import pastel from '../pastel.png'
import Image from 'next/image'

export default function ImagemPastel() {
  return <Image src={pastel} width={200} height={400} alt="pastel" />
}
