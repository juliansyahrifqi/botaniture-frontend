import Image from 'next/image'
import Logo from "../../../../public/footer-logo.png"

export default function FooterLogo() {
  return (
    <Image src={Logo} alt="Botaniture Logo" className='w-full'/>
  )
}
