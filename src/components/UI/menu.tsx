import cn from '@src/services/clsx';
import ColorOrb from '../home/colorOrb';
import { Link } from 'react-router-dom';
import MenuColor from '../home/MenuColor';
import { IoIosMenu } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';
import { GoPackage } from 'react-icons/go';
import { FaWhatsapp } from 'react-icons/fa';
import { RiHome9Line } from 'react-icons/ri';
import { CiCirclePlus } from 'react-icons/ci';
import { useTranslation } from 'react-i18next';
import { RiTwitterXLine } from 'react-icons/ri';
import { useState, type ReactNode } from 'react';
import { RxInstagramLogo } from 'react-icons/rx';
import { TbFileHorizontal } from 'react-icons/tb';
import { PiProjectorScreen } from 'react-icons/pi';
import { PiTiktokLogoLight } from 'react-icons/pi';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { useThemeStore } from '@src/context/themeStore';

interface SocialMediaInterface {
  icon: ReactNode;
  link: string;
}

type Props = {
  socialMedias: SocialMediaInterface[];
};

const socialMedias: SocialMediaInterface[] = [
  {
    icon: <RiFacebookCircleLine />,
    link: 'https://www.facebook.com/profile.php?id=61582588896110'
  },
  {
    icon: <RxInstagramLogo />,
    link: 'https://www.instagram.com/kenshi.vr'
  },
  {
    icon: <RiTwitterXLine />,
    link: 'https://x.com/kenshi_vr'
  },
  {
    icon: <PiTiktokLogoLight />,
    link: 'https://www.tiktok.com/@kenshi.vr8?_t=ZS-90nD2jLymQu&_r=1'
  },
  {
    icon: <FaWhatsapp />,
    link: 'https://wa.me/5610191582'
  },
];

export default function Menu({ isDesktop }: { isDesktop: boolean }) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { themes, selectedPalette, setPalette } = useThemeStore();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const { t } = useTranslation();

  const handleThemeChange = (themeName: keyof typeof themes) => {
    setPalette(themeName);
  };

  return (
    <div
      className={cn(
        'fixed h-full w-[80px] pt-8 z-103',
        !isDesktop ? 'py-4' : '',
        'flex flex-col justify-start items-center'
      )}
    >
      {!isDesktop && (
        <Neumorphism>
          <div className={cn('hidden md:flex flex-col gap-6 z-10')}>
            <Link to='//' className='group'>
              <RiHome9Line
                style={{ color: 'var(--color-firstColor)' }}
                className='w-6 h-6 transition-colors duration-300'
              />
            </Link>
            <Link to='/report' className='group'>
              <TbFileHorizontal
                style={{ color: 'var(--color-firstColor)' }}
                className='w-6 h-6 transition-colors duration-300'
              />
            </Link>
            <Link to='/proyects' className='group'>
              <PiProjectorScreen
                style={{ color: 'var(--color-firstColor)' }}
                className='w-6 h-6 transition-colors duration-300'
              />
            </Link>
            <Link to='/components' className='group'>
              <GoPackage
                style={{ color: 'var(--color-firstColor)' }}
                className='w-6 h-6 transition-colors duration-300'
              />
            </Link>
            {Object.entries(themes).map(([key, palette]) => (
              <ColorOrb
                key={key}
                colors={Object.values(palette)}
                size={24}
                onClick={() => handleThemeChange(key as keyof typeof themes)}
              />
            ))}
          </div>
        </Neumorphism>
      )}

      <IoIosMenu
        onClick={() => setMenuOpen(true)}
        style={{ color: 'var(--color-firstColor)' }}
        className={cn(
          isDesktop ? '' : 'md:hidden',
          'absolute top-2 left-4 w-8 h-8 z-100',
        )}
      />

      <div
        className={cn(
          'top-0 right-0 h-full w-[calc(100%-280px)]',
          'transition-all duration-300 transform',
          'fixed hidden sm:block z-102',
          menuOpen
            ? 'translate-x-0 opacity-100 pointer-events-auto bg-black/50'
            : 'translate-x-full opacity-0 pointer-events-none',
          isDesktop ? 'md:block' : 'md:hidden'
        )}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={cn(
          'w-full sm:w-[280px]',
          isDesktop ? '' : 'md:hidden',
          'shadow-lg backdrop-blur-3xl',
          'transition-transform duration-300',
          'fixed top-0 left-0 h-full z-101 transform',
          menuOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div
          className={cn(
            'pt-14 overflow-y-scroll h-full px-4 backdrop-blur-3xl',
          )}
        >
          <TitleMenu title='<Kenshi />' />
          <DividerHeavy />
          <CategoryMenu category={t('menu.firstSectionLabel')} />
          <MenuOption
            content={t('menu.firstSectionContentOne')}
            route='/'
            icon={<RiHome9Line className='w-5 h-5' />}
            activeColor={themes[selectedPalette].firstColor}
          />
          <MenuOption
            content={t('menu.firstSectionContentTwo')}
            route='report'
            icon={<TbFileHorizontal className='w-5 h-5' />}
            activeColor={themes[selectedPalette].firstColor}
          />
          <MenuOption
            content={t('menu.firstSectionContentThree')}
            route='proyects'
            icon={<PiProjectorScreen className='w-5 h-5' />}
            activeColor={themes[selectedPalette].firstColor}
          />
          <MenuOption
            content={t('menu.firstSectionContentFour')}
            route='components'
            icon={<GoPackage className='w-5 h-5' />}
            activeColor={themes[selectedPalette].firstColor}
          />
          <DividerLight />
          <CategoryMenu category={t('menu.secondSectionLabel')} />
          <SocialMediaMenu socialMedias={socialMedias} />
          <DividerLight />
          <CategoryMenu category={t('menu.thirdSectionLabel')} />
          <div
            className={cn(
              'w-full max-w-full gap-4 justify-items-start my-6',
              'grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2'
            )}
          >
            {Object.entries(themes).map(([key, palette]) => (
              <ColorOrb
                key={key}
                colors={Object.values(palette)}
                size={24}
                onClick={() => handleThemeChange(key as keyof typeof themes)}
              />
            ))}

            <CiCirclePlus
              className='w-6 h-6'
              onClick={() => setIsDialogOpen(!isDialogOpen)}
            />
          </div>


          {isDialogOpen && (
            <div className='w-full max-h-[80vh] overflow-y-auto bg-black/30 rounded-lg'>
              <MenuColor
                onSave={() => setIsDialogOpen(false)}
                onCancel={() => setIsDialogOpen(false)}
              />
            </div>
          )}
        </div>

      </div>

      {menuOpen && (
        <IoMdClose
          onClick={() => setMenuOpen(false)}
          className={cn(
            isDesktop ? '' : 'md:hidden',
            'absolute top-2 left-3 z-102',
            'w-8 h-8 text-boneWhite'
          )}
        />
      )}
    </div>
  );
}

function TitleMenu({ title }: { title: string }) {
  return (
    <span
      className='text-3xl flex justify-center'
      style={{ color: 'var(--color-firstColor)' }}
    >
      {title}
    </span>
  );
}

function CategoryMenu({ category }: { category: string }) {
  return (
    <span
      className={cn(
        'text-boneWhite hover:text-red-400 text-[16px]',
      )}
    >
      {category}
    </span>
  );
}

function MenuOption({
  icon,
  route,
  content,
  activeColor,
}: {
  route?: string;
  content?: string;
  icon?: ReactNode;
  activeColor: string;
}) {
  return (
    <div className='flex flex-row justify-start items-center gap-2 my-4'>
      {icon}
      <Link
        to={`/${route ?? ''}`}
        style={{ color: activeColor }}
        className='hover:text-softOrange text-lg'
      >
        {content}
      </Link>
    </div>
  );
}

export function SocialMediaMenu({ socialMedias }: Props) {
  return (
    <div
      className={cn(
        'my-6',
        'grid gap-4',
        'grid grid-cols-2 grid-rows-3',
        'sm:grid-cols-3 sm:grid-rows-2'
      )}
    >
      {socialMedias.map((socialMedia, index) => (
        <a
          key={index}
          href={socialMedia.link}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:opacity-75'
        >
          {socialMedia.icon}
        </a>
      ))}
    </div>
  );
}

function DividerHeavy() {
  return (
    <div
      className='w-full h-[3px] my-5 rounded-full'
      style={{
        backgroundImage: `linear-gradient(to right, transparent, var(--color-firstColor), transparent)`,
      }}
    />
  );
}

function DividerLight() {
  return (
    <div
      className='w-full h-px my-3 rounded-full'
      style={{
        backgroundImage: `linear-gradient(to right, transparent, var(--color-firstColor), transparent)`,
      }}
    />
  );
}

const Neumorphism: React.FC<any> = ({
  w = 50,
  h = 450,
  children,
  className,
}) => (
  <div
    style={{
      width: `${w}px`,
      minHeight: `${h}px`,
      backgroundColor: 'var(--color-fifthColor)',
      boxShadow: `
        20px 20px 12px rgba(0,0,0,0.5),
        2px 2px 12px rgba(0,0,0,0.45),
        inset 4px 4px 6px #534747
      `
        .trim()
        .replace(/\s+/g, ' '),
    }}
    className={`overflow-y-scroll py-4 rounded-xl justify-center hidden md:flex ${className}`}
  >
    {children}
  </div>
);
