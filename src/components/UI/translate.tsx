import { useTranslation } from 'react-i18next';

export default function Translate() {
  const { i18n } = useTranslation();

  return (
    <div
      onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
      style={{
        backgroundImage: i18n.language === 'en'
          ? 'linear-gradient(to right, var(--color-thirdColor), var(--color-firstColor))'
          : 'linear-gradient(to right, var(--color-fifthColor), var(--color-thirdColor))',
      }}
      className='fixed top-4 right-4 z-50 w-[85px] h-[47px] rounded-full transition-colors duration-700 ease-in-out'
    >
      <div
        style={{ backgroundColor: 'var(--color-firstColor)' }}
        className={`absolute top-[2px] h-[42px] w-[42px] rounded-full transition-all duration-700 ease-in-out
        ${i18n.language === 'en' ? 'left-[4px]' : 'left-[37px]'}`}
      />
      {i18n.language === 'en' ? (
        <span
          style={{ color: 'var(--color-fifthColor)' }}
          className="absolute top-1/2 right-[13px] -translate-y-1/2"
        >
          En
        </span>
      ) : (
        <span
          style={{ color: 'var(--color-firstColor)' }}
          className="absolute top-1/2 right-[56px] -translate-y-1/2"
        >
          Es
        </span>
      )}
    </div>
  );
};