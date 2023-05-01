import Image from "next/image";
import Link from "next/link";

interface CardCategoryProps {
  name: string;
  slug: string;
  image: string;
}

function getRandomUniqueColorFromArray(colors: string[], usedColors: string[]) {
  const availableColors = colors.filter(color => !usedColors.includes(color));
  if (availableColors.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * availableColors.length);
  const randomColor = availableColors[randomIndex];
  usedColors.push(randomColor);
  return randomColor;
}

export default function CardCategory(props: CardCategoryProps) {
  const { name, slug, image } = props;
  const colors = ["#868F74", "#67747F", "#828F9A", "#999D84"];
  const usedColors: string[] = [];
  const randomColor = getRandomUniqueColorFromArray(colors, usedColors);

  return (
    <div className="rounded-3xl shadow-lg">
      <div className="relative w-full">
        <Image src={image} alt="Category" width={500} height={500} className="rounded-3xl w-full object-cover max-h-96" />
        <div className="absolute bottom-0">
          <svg width="662" height="107" viewBox="0 0 662 107" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rounded-3xl">
            <path d="M0 73.657L55.1667 56.857C110.333 40.057 220.667 6.45695 331 0.83945C441.333 -4.56805 551.667 17.4819 606.833 28.8744L662 40.057V107.257H606.833C551.667 107.257 441.333 107.257 331 107.257C220.667 107.257 110.333 107.257 55.1667 107.257H0V73.657Z" fill={randomColor ? randomColor : "#000"} />

            <text x="50%" y="40%" dominantBaseline="middle" textAnchor="middle" className="fill-white font-sansation font-bold text-2xl">{name}</text>

            <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle" className="fill-white font-inter font-bold text-sm underline underline-offset-8">
              <Link href={slug}>
                Belanja Sekarang
              </Link>
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}
