import { FC, memo } from 'react';

import './index.css';

interface IProps {
  title: string;
  des: string;
  avatar: React.ReactElement;
  extra: React.ReactElement;
  rounded: boolean;
}

const Card: FC<IProps> = ({ title, des, avatar, extra, rounded }) => {
  const roundClass = rounded ? 'rounded-t-2xl rounded-b-2xl' : 'rounded-t-2xl';
  return (
    <section
      className={`${roundClass} flex justify-between items-center self-stretch p-[12px]  border-t-[rgba(255,255,255,0.08)] border-t border-solid card-item`}
    >
      {avatar}
      <div className="flex flex-col items-center grow pt-[5px] pl-[12px]">
        <h3 className=" w-full text-white  text-base not-italic font-semibold ">
          {title}
        </h3>
        <p className=" w-full text-[color:var(--G,#D7FF1F)]  text-xs font-medium ">
          {des}
        </p>
      </div>
      {extra}
    </section>
  );
};

export default memo(Card);
