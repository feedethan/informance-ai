import * as Switch from '@radix-ui/react-switch';
import { FC, memo } from 'react';

interface IProps {
  size: 'md' | 'sm';
  checked: boolean;
  label?: React.ReactElement;
  htmlFor?: string;
  onCheckedChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}

const MySwitch: FC<IProps> = ({
  size,
  label,
  checked,
  htmlFor,
  onCheckedChange,
}) => {
  const rootClass = size === 'md' ? 'w-[56px] h-[32px]' : 'w-[42px] h-[22px]';
  const thumbClass =
    size === 'md'
      ? 'w-[24px] h-[24px] data-[state=checked]:translate-x-[26px]'
      : 'w-[14px] h-[14px] data-[state=checked]:translate-x-[22px]';
  return (
    <>
      {label}
      <Switch.Root
        className={`${rootClass} rounded-full relative border-[1px] border-gray-switch bg-black  data-[state=checked]:bg-gray-switch 
      data-[state=checked]:border-green outline-none cursor-pointer`}
        id={htmlFor}
        checked={checked}
        onCheckedChange={onCheckedChange}
      >
        <Switch.Thumb
          className={`${thumbClass} block  bg-white rounded-full  transition-transform duration-100 translate-x-0.5 will-change-transform  data-[state=checked]:bg-green`}
        />
      </Switch.Root>
    </>
  );
};

export default memo(MySwitch);
