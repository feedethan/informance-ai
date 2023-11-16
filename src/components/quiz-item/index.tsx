import { IconMore, Switch } from '@/components';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FC, memo } from 'react';

export type QuizItemType = {
  id: string;
  title: string;
  createTime: string;
  disabled: boolean;
};

interface IProps {
  data: QuizItemType;
  handleSwitchQuizItem: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => void;
  deleteQuiz: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
}

const QuizItem: FC<IProps> = ({ data, deleteQuiz, handleSwitchQuizItem }) => {
  return (
    <div className="flex justify-between mb-[16px] items-center border-gray-switch border-[1px] pt-[8px] pr-[12px] pb-[14px] pl-[20px] rounded-[14px] hover:border-green">
      <div className="flex flex-col grow text-base font-semibold">
        <span className="">{data.title}</span>
        <span className="text-black-400">{data.createTime}</span>
      </div>
      <div className="flex gap-2.5">
        <Switch
          size="sm"
          checked={!data.disabled}
          onCheckedChange={(e) => handleSwitchQuizItem(e, data.id)}
        />
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <div>
              <IconMore />
            </div>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="min-w-[100px] bg-white rounded-md p-[8px]  text-base shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade cursor-pointer "
              sideOffset={5}
            >
              <DropdownMenu.Item
                className="text-black p-[3px] data-[highlighted]:!border-green  data-[highlighted]: outline-green"
                onClick={(e) => deleteQuiz(e, data.id)}
              >
                Delete
              </DropdownMenu.Item>

              <DropdownMenu.Arrow className="fill-white" />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  );
};

export default memo(QuizItem);
