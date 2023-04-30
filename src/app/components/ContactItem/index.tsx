import Image from 'next/image';
import Link from 'next/link';

interface ContactItemProps {
  image: string;
  value: string;
  link: string;
}

export default function ContactItem(props: ContactItemProps) {
  const { image, value, link } = props;

  return (
    <Link href={link} className="flex items-center gap-3 my-4 text-white  hover:underline hover:underline-offset-1 transition-all ease-in-out duration-300">
      <div className='bg-[#000000] bg-opacity-20 hover:bg-opacity-60 rounded-md p-2 transition-all ease-in-out duration-300'>
        <Image alt={value} src={image} width={20} height={20}/>
      </div>

      <p className='text-white font-roboto font-normal'>{value}</p>
    </Link>
  )
}
