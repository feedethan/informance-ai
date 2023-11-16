import LogoWhite from '@/assets/images/logo-white.svg';

export default function Header() {
  return (
    <div className="fixed h-[56px] left-0 right-0 top-0 px-8 py-3 bg-gray-dark">
      <img src={LogoWhite} alt="logo" />
    </div>
  );
}
