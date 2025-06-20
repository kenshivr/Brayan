import cn from '@src/services/clsx';
import down from '@public/down.png';
import { useRef, useEffect } from 'react';
import topLeftCorner from '@public/topLeftCorner.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import sadnessGreetings from '@public/sadnessGreetings.png';

import CssLogo from '@src/svg/css';
import GitLogo from '@src/svg/git';
import ViteLogo from '@src/svg/vite';
import ReactLogo from '@src/svg/react';
import TailwindLogo from '@src/svg/tailwind';
import TypescriptLogo from '@src/svg/typescript';

interface Card {
  icon?: any;
  contentTop: string;
  contentBottom: string;
  imageLocation: string;
  class: string;
}

const cards: Card[] = [
  {
    icon: <TailwindLogo />,
    contentTop: sadnessGreetings,
    contentBottom: 'Tailwind',
    imageLocation: 'top',
    class: 'first',
  },
  {
    icon: <GitLogo />,
    contentTop: 'Git',
    contentBottom: topLeftCorner,
    imageLocation: 'bottom',
    class: 'second',
  },
  {
    icon: <ReactLogo />,
    contentTop: down,
    contentBottom: 'React js',
    imageLocation: 'top',
    class: 'thrid',
  },
  {
    icon: <TypescriptLogo />,
    contentTop: sadnessGreetings,
    contentBottom: 'Typescript',
    imageLocation: 'top',
    class: 'first',
  },
  {
    icon: <CssLogo />,
    contentTop: 'Css',
    contentBottom: topLeftCorner,
    imageLocation: 'bottom',
    class: 'second',
  },
  {
    icon: <ViteLogo />,
    contentTop: down,
    contentBottom: 'Vite js',
    imageLocation: 'top',
    class: 'thrid',
  },
  {
    icon: <TailwindLogo />,
    contentTop: sadnessGreetings,
    contentBottom: 'Tailwind',
    imageLocation: 'top',
    class: 'first',
  },
  {
    icon: <GitLogo />,
    contentTop: 'Git',
    contentBottom: topLeftCorner,
    imageLocation: 'bottom',
    class: 'second',
  },
  {
    icon: <ReactLogo />,
    contentTop: down,
    contentBottom: 'React js',
    imageLocation: 'top',
    class: 'thrid',
  },
  {
    icon: <TypescriptLogo />,
    contentTop: sadnessGreetings,
    contentBottom: 'Typescript',
    imageLocation: 'top',
    class: 'first',
  },
  {
    icon: <CssLogo />,
    contentTop: 'Css',
    contentBottom: topLeftCorner,
    imageLocation: 'bottom',
    class: 'second',
  },
  {
    icon: <ViteLogo />,
    contentTop: down,
    contentBottom: 'Vite js',
    imageLocation: 'top',
    class: 'thrid',
  },
];

export default function CarouselCards() {
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

  const renderTopContent = (card: Card) => {
    return card.imageLocation === 'top' ? (
      <img
        width={100}
        height={100}
        alt="Imagen"
        src={card.contentTop}
        className="transform transition-transform duration-300 group-hover:scale-150 -translate-y-4"
      />
    ) : (
      <p
        className={cn(
          'text-2xl font-bold transform transition-transform',
          'duration-300 group-hover:scale-150 ml-4 mb-4',
        )}
      >
        {card.contentTop}
      </p >
    );
  };

  const renderBottomContent = (card: Card) => {
    return card.imageLocation === 'bottom' ? (
      <img
        width={120}
        height={120}
        alt="Imagen"
        src={card.contentBottom}
        className={cn(
          'transform transition-transform duration-300',
          'mb-[11px] group-hover:scale-150',
        )}
      />
    ) : (
      <div
        className={cn(
          'text-2xl font-bold transform transition-transform',
          'duration-300 group-hover:scale-150 ml-4 mb-4',
        )}
      >
        {card.contentBottom}
      </div>
    );
  };

  return (
    <div
      className={cn(
        'relative w-full h-[500px]',
        'my-8 py-8 text-softBeige'
      )}
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
        className="flex gap-6 overflow-x-auto py-9 overflow-y-visible scroll-smooth h-full px-16"
        style={{ scrollbarWidth: 'none' }}
      >

        {cards.map((card: Card, idx) => (
          <div
            key={idx}
            className={cn(
              'relative group min-w-[200px] max-w-[200px] h-full cursor-pointer overflow-y-visible',
            )}
          >
            <div
              className={cn(
                `absolute clip-custom-card-${card.class}`,
                'bg-hazelBrown inset-0 z-0',
              )}
            />
            {/* <div
              className={cn(
                'relative z-10 flex flex-col justify-between items-center h-full',
              )}
            >
              {renderTopContent(card)}
              {card.icon}
              {renderBottomContent(card)}
            </div> */}

            <div className={cn('relative z-10 flex flex-col justify-between h-full')}>
              <div className="self-start">{renderTopContent(card)}</div>
              <div className="self-center">{card.icon}</div>
              <div className="self-end">{renderBottomContent(card)}</div>
            </div>

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