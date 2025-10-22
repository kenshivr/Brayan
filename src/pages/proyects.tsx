import { useState, useEffect } from 'react';
import cn from '@src/services/clsx';
import Menu from '@src/components/UI/menu';
import { CiCalendar } from 'react-icons/ci';
import { IoIosArrowForward } from 'react-icons/io';
import { useProyects } from '@src/models/proyects';

export default function Proyects() {
  const proyects = useProyects();
  const [currentIndex, setCurrentIndex] = useState(1); // empieza en el 1 (ya que el 0 es el "duplicado" final)
  const [isTransitioning, setIsTransitioning] = useState(true);

  // duplicamos el primer y último elemento para simular bucle infinito
  const extendedProyects = [
    proyects[proyects.length - 1],
    ...proyects,
    proyects[0],
  ];

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // cuando llegamos al final, saltamos sin transición al primero "real"
  useEffect(() => {
    if (currentIndex === extendedProyects.length - 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 500); // coincide con duration-500
      return () => clearTimeout(timeout);
    }

    // si nos movemos desde el primer "duplicado" al final real
    if (currentIndex === 0) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(extendedProyects.length - 2);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, extendedProyects.length]);

  return (
    <>
      <Menu isDesktop={false} />

      <div
        className={cn(
          'flex',
          isTransitioning ? 'transition-transform duration-500 ease-in-out' : '',
          `w-[calc(100vw_*_${extendedProyects.length})]`
        )}
        style={{
          transform: `translateX(-${currentIndex * 100}vw)`,
        }}
      >
        {extendedProyects.map((proyect, index) => (
          <div
            key={index}
            className={cn(
              'py-6 relative w-screen h-screen flex flex-shrink-0 flex-col justify-between items-center'
            )}
          >
            <h2 className='text-4xl'>{proyect.title}</h2>

            <div className='relative overflow-hidden flex w-4/6 justify-center'>
              <span className='marquee marquee-left text-4xl md:text-6xl lg:text-9xl'>
                {'<'}
                {proyect.title.split(' ')[0]}
                {' />'}
              </span>

              <img
                alt='character'
                src={proyect.image}
                className='w-[35vw] md:w-[25vw] z-10 relative'
              />

              <span className='marquee marquee-right text-4xl md:text-6xl lg:text-9xl'>
                {'<'}
                {proyect.title.split(' ')[1]}
                {' />'}
              </span>
            </div>

            <div className='flex flex-col gap-2 mx-6'>
              <div className='flex flex-row items-center gap-3'>
                <CiCalendar className='h-10 w-10' />
                <span>{proyect.year}</span>
                <span>{proyect.month}</span>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.preslow.com/'
                  style={{ color: 'var(--color-secondColor)' }}
                >
                  {proyect.link}
                </a>
              </div>
              <p className='text-xl'>{proyect.content}</p>
            </div>

            <button
              onClick={handleNext}
              className='transform -translate-y-1/2 flex justify-center items-center absolute top-1/2 right-4 w-10 h-10'
            >
              <IoIosArrowForward className='w-5 h-5' />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
