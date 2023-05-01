import Image from "next/image";
import Link from "next/link";

interface CardBlogProps {
  title: string;
  date: Date;
  description: string;
  slug: string;
  image: string;
}

export default function CardBlog(props: CardBlogProps) {
  const { title, description, date, slug, image } = props;

  return (
    <div className="flex flex-col gap-3 bg-[#F8F8F8] shadow-xl rounded-3xl">
      <div className="relative image">
        <div>
          <Image src={image} alt={title} width={500} height={500} className="w-full rounded-tr-3xl rounded-tl-3xl max-h-60 object-cover" />
        </div>
        
        <svg width="435" height="78" viewBox="0 0 435 78" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full" preserveAspectRatio="xMidYMid slice">
          <g clip-path="url(#clip0_78_2453)">
          <path d="M0 7.80005L24.1667 15.6C48.3333 23.4001 96.6667 39.0001 145 49.4082C193.333 59.7188 241.667 65.0813 290 57.2082C338.333 49.4813 386.667 28.5188 410.833 18.2082L435 7.80005V78.0001H410.833C386.667 78.0001 338.333 78.0001 290 78.0001C241.667 78.0001 193.333 78.0001 145 78.0001C96.6667 78.0001 48.3333 78.0001 24.1667 78.0001H0V7.80005Z" fill="#F8F8F8" />
          </g>
          <defs>
          <clipPath id="clip0_78_2453">
          <rect width="435" height="78" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </div>

      <div className="px-4 flex flex-col gap-3">
        <p className="text-xs font-sansation font-bold text-hero-secondary">{date.toLocaleDateString("id-ID", {
          year: "numeric",
          month: "long",
          day: "numeric"
        })}</p>

        <h4 className="font-bold font-roboto text-[#31462D] text-2xl">{title}</h4>
        <p className="font-normal font-sansation text-hero-secondary text-md">{description}</p>
      </div>

      <div className="mt-auto pb-4 px-4">
        <Link href={`/blog/${slug}`} className="mt-auto justify-end">
          <button className="bg-primary rounded-2xl w-full py-4 font-roboto font-bold text-white">
            Baca Selengapnya
          </button>
        </Link>
      </div>
    </div>
  )
}
