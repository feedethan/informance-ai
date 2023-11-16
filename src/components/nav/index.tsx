import Arrow from '@/assets/images/arrow-down.svg';
import Avatar from '@/assets/images/avatar.svg';
import Coin from '@/assets/images/coin.svg';
import More from '@/assets/images/more.svg';

import { Badge, Card } from '@/components';

import './index.css';

export default function Nav() {
  return (
    <div className="flex flex-col justify-between w-[312px] rounded-[20px] px-[8px] py-[8px] bg-black-700">
      <div className="grow">
        <Card
          rounded={false}
          title="BTC Coin Community"
          des="12,500 members"
          avatar={<img className="grow-0" src={Coin} alt="avatar" />}
          extra={<img className="grow-0" src={Arrow} />}
        />

        <div className="px-[16px] py-[20px] text-xs text-black-400 font-semibold">
          PLUGINS MANAGMENT
        </div>
        <div className="flex h-[40px] text-base items-center justify-between px-[16px] cursor-pointer bg-gradient-to-r nav-item rounded-[8px] ">
          <b className="w-[6px] h-[6px] bg-green rounded-full"></b>
          Quiz Generator <Badge title="Coming soon" />
        </div>
      </div>
      <Card
        rounded
        title="Ryan Lee"
        des="Premium"
        avatar={<img className="grow-0" src={Avatar} alt="avatar" />}
        extra={<img className="grow-0" src={More} />}
      />
    </div>
  );
}
