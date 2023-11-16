import { FC, memo } from 'react';

interface IProps {
  title: string;
}

const Badge: FC<IProps> = ({ title }) => {
  return (
    <div className="inline-block text-black-300 text-xs  rounded border border-[color:var(--glass-stroke,rgba(255,255,255,0.08))] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.05),0px_1px_2px_-1px_rgba(0,0,0,0.05)] px-2 py-1 border-solid">
      {title}
    </div>
  );
};

export default memo(Badge);
