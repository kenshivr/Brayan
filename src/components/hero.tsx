import cn from '../services/clsx';
import { useState, type ReactNode } from 'react';
import image from '../../public/wink.png';
import { MdOutlineMilitaryTech } from 'react-icons/md';
import { GrTechnology } from 'react-icons/gr';
import { LiaDnaSolid } from 'react-icons/lia';
import { IoIosMenu } from 'react-icons/io';
import ThemeToggle from '../components/ThemeToggle';

export default function Hero({
  className = ''
}: {
  children?: ReactNode;
  className?: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={cn(
      'relative w-full h-auto overflow-hidden flex flex-col md:flex-row border border-solid border-white',
      'bg-darkBrown',
      className
    )}>

      {/* Fondo con sombra cuando el menú está abierto */}
      {menuOpen && (
        <div
          className='fixed inset-0 bg-black/25 z-30 md:hidden'
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Menú lateral para mobile */}
      <div className={cn(
        'fixed top-0 left-0 h-full z-40 transform transition-transform duration-300 md:hidden',
        menuOpen ? 'translate-x-0' : '-translate-x-full',
        'bg-softOrange w-1/3 p-6 flex flex-col justify-center text-white text-lg font-medium gap-6'
      )}>
        <p>Primera opción</p>
        <p>Segunda opción</p>
        <p>Tercera opción</p>
      </div>

      {/* Contenido superior en mobile */}
      <div className='flex md:hidden w-full order-1'>

        <div className='flex items-center pl-4 w-1/2 h-12'>
          <IoIosMenu
            onClick={() => setMenuOpen(true)}
            className='w-8 h-8 cursor-pointer text-white'
          />
        </div>

        <div className='flex flex-col gap-6 pr-4 items-end justify-center w-1/2 h-12'>
          <ThemeToggle />
        </div>

      </div>

      {/* Panel izquierdo en desktop */}
      <div className='hidden md:flex flex-col gap-6 items-center justify-center w-[70px]'>
        <MdOutlineMilitaryTech className='w-8 h-8 text-white hover:text-neutralBrown cursor-pointer transition-colors duration-300' />
        <GrTechnology className='w-8 h-8 text-white hover:text-softOrange cursor-pointer transition-colors duration-300' />
        <LiaDnaSolid className='w-8 h-8 text-white hover:text-peachTint cursor-pointer transition-colors duration-300' />
      </div>

      {/* Contenido principal */}
      <div className='flex flex-col justify-center items-center w-full order-2 md:order-none py-6'>
        <img
          src={image}
          width={200}
          className='logo'
          loading='lazy'
          alt='Personaje'
        />
        <p className='text-5xl text-softBeige'>Brayan Vidal</p>
        <p className='text-5xl text-hazelBrown'>Dev</p>
      </div>

      {/* Panel derecho en desktop */}
      <div className='hidden md:flex flex-col items-center w-[70px]'>
        <div className='flex flex-col items-end justify-center w-1/2 h-12 pt-2'>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};