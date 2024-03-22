import qrcode from './qrcode.svg'
import Image from 'next/image'

export function Video() {
  return <Image src={qrcode} width={300} height={400} alt="qrcode" />
}
