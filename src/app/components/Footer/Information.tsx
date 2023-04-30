import Link from 'next/link'

const informationMenu = [
  { to: '/belanja', name: 'Belanja' },
  { to: '/blog', name: 'Blog' },
  { to: '/tentang-kami', name: 'Tentang Kami' },
  { to: '/privasi-kebijakan', name: 'Privasi & Kebijakan' },
  { to: '/syarat-kondisi', name: 'Syarat & Kondisi' },
  { to: '/konfirmasi-pembayaran', name: 'Konfirmasi Pembayaran' },
  { to: '/pengembalian-produk', name: 'Pengembalian Produk' },
]

export default function Information() {
  return (
    <ul className='flex flex-col gap-2'>
      {informationMenu.map((menu, index) => (
        <li key={index} className='text-white font-medium font-roboto hover:underline hover:underline-offset-2 hover:text-[#FFFFFF]'>
          <Link href={menu.to}>{menu.name}</Link>
        </li>
      ))}
    </ul>
  )
}
