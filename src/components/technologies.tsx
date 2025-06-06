import { useRef } from 'react';
import cn from '../services/clsx';

import down from '../../public/down.png';
import sadnessGreetings from '../../public/sadnessGreetings.png';
import topLeftCorner from '../../public/topLeftCorner.png';
import winkHappyGreetings from '../../public/winkHappyGreetings.png';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Card {
  contentTop: string;
  contentBottom: string;
  imageLocation: string;
  class: string;
}

const cards: Card[] = [
  {
    contentTop: sadnessGreetings,
    contentBottom: 'Greetings',
    imageLocation: 'top',
    class: 'first',
  },
  {
    contentTop: 'Bottom',
    contentBottom: topLeftCorner,
    imageLocation: 'bottom',
    class: 'second',
  },
  {
    contentTop: down,
    contentBottom: 'Corner',
    imageLocation: 'top',
    class: 'thrid',
  },
  {
    contentTop: sadnessGreetings,
    contentBottom: 'Greetings',
    imageLocation: 'top',
    class: 'first',
  },
  {
    contentTop: 'Bottom',
    contentBottom: topLeftCorner,
    imageLocation: 'bottom',
    class: 'second',
  },
  {
    contentTop: down,
    contentBottom: 'Corner',
    imageLocation: 'top',
    class: 'thrid',
  },
  {
    contentTop: sadnessGreetings,
    contentBottom: 'Greetings',
    imageLocation: 'top',
    class: 'first',
  },
  {
    contentTop: 'Bottom',
    contentBottom: topLeftCorner,
    imageLocation: 'bottom',
    class: 'second',
  },
  {
    contentTop: down,
    contentBottom: 'Corner',
    imageLocation: 'top',
    class: 'thrid',
  },
];

export default function CarouselCards() {
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
      className={
        cn('relative w-full h-[400px]',
          'border border-solid border-white',
          'my-8 py-8'
        )
      }
    >

      <div
        onClick={() => scroll('left')}
        className={cn(
          'absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white',
          'hover:scale-150 transition-transform'
        )}
      >
        <ChevronLeft size={22} />
      </div>

      <div
        ref={scrollRef}
        className="border border-solid border-green-500 flex gap-6 overflow-visible scroll-smooth h-full px-16 py-4"
        style={{ scrollbarWidth: 'none' }}
      >

        {cards.map((card: Card, idx) => (
          <div key={idx} className="relative group min-w-[200px] max-w-[200px] h-full cursor-pointer">
            {/* Fondo recortado */}
            <div
              className={cn(
                `absolute inset-0 z-0 clip-custom-card-${card.class}`,
                'bg-gradient-to-b from-purple-700 to-purple-900 rounded-xl shadow-md overflow-x-scroll'
              )}
            />

            {/* Contenido sobresaliente */}
            <div className="relative z-10 p-4 flex flex-col justify-between text-white h-full ">
              {card.imageLocation === 'top' ? (
                <img
                  width={120}
                  height={120}
                  alt="Imagen"
                  src={card.contentTop}
                  className="transform transition-transform duration-300 group-hover:scale-150 -translate-y-4"
                />
              ) : (
                <p className="text-sm font-semibold transform transition-transform duration-300 group-hover:scale-150">
                  {card.contentTop}
                </p>
              )}

              {card.imageLocation === 'bottom' ? (
                <img
                  width={120}
                  height={120}
                  alt="Imagen"
                  src={card.contentBottom}
                  className="transform transition-transform duration-300 group-hover:scale-150"
                />
              ) : (
                <div className="text-xl font-bold transform transition-transform duration-300 group-hover:scale-150">
                  {card.contentBottom}
                </div>
              )}
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
    </div >
  );
}
