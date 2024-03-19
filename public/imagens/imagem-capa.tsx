import formatura from '../formatura.png'
import Image from 'next/image'

export default function ImagemCapa() {
  return <Image src={formatura} width={300} height={400} alt="Imagem da Capa" />
}
