import cn from '@src/services/clsx';
import down from '@public/winkHappyGreetings.png';
import { useRef, useEffect, useState } from 'react';
import topLeftCorner from '@public/topLeftCorner.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// import sadnessGreetings from '@public/sadnessGreetings.png';
import sadnessGreetings from '../../../public/sadnessGreetings.png';

import CssLogo from '@src/svg/css';
import GitLogo from '@src/svg/git';
import ViteLogo from '@src/svg/vite';
import ReactLogo from '@src/svg/react';
import TailwindLogo from '@src/svg/tailwind';
import TypescriptLogo from '@src/svg/typescript';

import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt, FaReact, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiVite } from 'react-icons/si';

interface Card {
  icon: any;
  image: any;
  title: string;
  subTitle: string;
  percentage: number;
  chapter: any;
  color: string;
}

const cards: Card[] = [
  {
    icon: <RiTailwindCssFill className="w-7 h-7" />,
    image: <TailwindLogo />,
    title: 'Tailwind',
    subTitle: 'Framework CSS',
    percentage: 80,
    chapter: sadnessGreetings,
    color: 'bg-softBeige',
  },
  {
    icon: <FaGitAlt className="w-7 h-7" />,
    image: <GitLogo />,
    title: 'Git',
    subTitle: 'Version Control',
    percentage: 70,
    chapter: topLeftCorner,
    color: 'bg-blushPink',
  },
  {
    icon: <FaReact className="w-7 h-7" />,
    image: <ReactLogo />,
    title: 'React',
    subTitle: 'Libreria JS',
    percentage: 85,
    chapter: down,
    color: 'bg-boneWhite',
  },
  {
    icon: <SiTypescript className="w-7 h-7" />,
    image: <TypescriptLogo />,
    title: 'TypeScript',
    subTitle: 'TS Language',
    percentage: 90,
    chapter: sadnessGreetings,
    color: 'bg-slateGray',
  },
  {
    icon: <FaCss3Alt className="w-7 h-7" />,
    image: <CssLogo />,
    title: 'CSS',
    subTitle: 'Stylesheets',
    percentage: 65,
    chapter: topLeftCorner,
    color: 'bg-peachTint',
  },
  {
    icon: <SiVite className="w-7 h-7" />,
    image: <ViteLogo />,
    title: 'Vite',
    subTitle: 'Vite JS',
    percentage: 75,
    chapter: down,
    color: 'bg-softOrange',
  },
  {
    icon: <RiTailwindCssFill className="w-7 h-7" />,
    image: <TailwindLogo />,
    title: 'Tailwind',
    subTitle: 'Tailwind CSS',
    percentage: 80,
    chapter: sadnessGreetings,
    color: 'bg-softBeige',
  },
  {
    icon: <FaGitAlt className="w-7 h-7" />,
    image: <GitLogo />,
    title: 'Git',
    subTitle: 'Git Control',
    percentage: 72,
    chapter: topLeftCorner,
    color: 'bg-blushPink',
  },
  {
    icon: <FaReact className="w-7 h-7" />,
    image: <ReactLogo />,
    title: 'React',
    subTitle: 'React Framework',
    percentage: 85,
    chapter: down,
    color: 'bg-boneWhite',
  },
  {
    icon: <SiTypescript className="w-7 h-7" />,
    image: <TypescriptLogo />,
    title: 'TS',
    subTitle: 'TypeScript',
    percentage: 90,
    chapter: sadnessGreetings,
    color: 'bg-slateGray',
  },
  {
    icon: <FaCss3Alt className="w-7 h-7" />,
    image: <CssLogo />,
    title: 'CSS',
    subTitle: 'CSS3',
    percentage: 68,
    chapter: topLeftCorner,
    color: 'bg-peachTint',
  },
  {
    icon: <SiVite className="w-7 h-7" />,
    image: <ViteLogo />,
    title: 'Vite',
    subTitle: 'Next-gen tooling',
    percentage: 78,
    chapter: down,
    color: 'bg-softOrange',
  },
];

export default function CarouselCards() {
  const [activeColor, setActiveColor] = useState<string>('transparent');

  useEffect(() => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      const center = (scrollWidth - clientWidth) / 2;
      scrollRef.current.scrollTo({
        left: center,
        behavior: 'smooth',
      });
    }
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.6;
      scrollRef.current.scrollTo({
        left: dir === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className={cn(
        'relative w-full h-[720px]',
        'my-8 py-8 text-softBeige',
        'transition-colors duration-500 flex items-center',
      )}
      style={{ backgroundColor: activeColor }}
    >
      <div
        onClick={() => scroll('left')}
        className={cn(
          'absolute left-4 top-1/2 -translate-y-1/2 z-10',
          'hover:scale-150 transition-transform',
        )}
      >
        <ChevronLeft size={22} />
      </div>

      <div
        ref={scrollRef}
        className={cn(
          'flex gap-8 overflow-x-auto h-[740px] px-16',
          'py-9 overflow-y-visible scroll-smooth',
          'flex items-center',
        )}
        style={{ scrollbarWidth: 'none' }}
      >

        {cards.map((card: Card, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setActiveColor(card.color)}
            onMouseLeave={() => setActiveColor('transparent')}
            className={cn(
              'relative group min-w-[200px] max-w-[200px]',
              'h-[300px] cursor-pointer overflow-y-visible',
              'transition-transform duration-500 hover:scale-120',
              'bg-hazelBrown rounded-2xl',
              'flex flex-col justify-end items-start',
              'gap-4 pb-10 pl-5',
            )}
          >

            <div
              className={cn(
                `${card.color}`,
                'backgroundCard rounded-xl',
                'flex flex-col justify-start items-center',
                'pt-12',
                'absolute bottom-14 right-0 h-full w-1/2',
                'transition-all duration-300 ease-in-out',
                'group-hover:h-[130%] group-hover:w-[80%]',
                'overflow-hidden'
              )}
            >
              <div
                className={cn(
                  'opacity-0 group-hover:opacity-100',
                  'transition-opacity duration-300 ease-in-out z-10',
                  'w-full ml-2',
                )}
              >
                <img
                  width={100}
                  height={100}
                  alt="character"
                  src={card.chapter}
                />

                <div className="w-2/3 mt-2 mx-auto flex items-center gap-2">
                  <div className="flex-1 h-2 bg-darkBrown rounded-full overflow-hidden">
                    <div
                      className="h-full bg-charcoalBlack transition-all duration-500"
                      style={{ width: `${card.percentage}%` }}
                    />
                  </div>
                  <span className="text-charcoalBlack text-sm whitespace-nowrap">{card.percentage}%</span>
                </div>

              </div>

            </div>


            <div
              className={cn(
                `absolute top-10 right-5`,
              )}
            >{card.image}</div>

            {card.icon}

            <span
              className={cn(
                'text-base',
              )}
            >
              {card.title}
            </span>

            <span
              className={cn(
                'text-3xl mt-6',
              )}
            >
              {card.subTitle}
            </span>

          </div>
        ))}

      </div>

      <div
        onClick={() => scroll('right')}
        className={cn(
          'absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white',
          'hover:scale-150 transition-transform'
        )}
      >
        <ChevronRight />
      </div>
    </div>
  );
};