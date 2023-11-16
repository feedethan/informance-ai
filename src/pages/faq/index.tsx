import * as Label from '@radix-ui/react-label';
import { useModel } from '@umijs/max';

import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { IconPlus, QuizItem, Switch } from '@/components';
import type { QuizItemType } from '@/components/quiz-item';
import { trim } from '@/utils/format';

const Faq: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState(true);
  const [quizTitle, setQuizTitle] = useState('New Quiz');

  const [quizList, setQuizList] = useState<QuizItemType[]>([]);

  const { setToastOpen } = useModel('global');
  const { setToastDes } = useModel('toastModel');

  const handleSwitch = (value: boolean) => {
    setIsActive(value);
  };
  const handleQuizChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuizTitle(e.target.value);
  };

  useEffect(() => {
    if (quizList.length) {
      if (!isActive) {
        const list = quizList.map((item) => {
          return { ...item, disabled: true };
        });

        setQuizList(list);
      } else {
        const list = quizList.map((item) => {
          return { ...item, disabled: false };
        });

        setQuizList(list);
      }
    }
  }, [isActive]);

  const addQuiz = () => {
    // validate
    if (quizList.length >= 10) {
      setToastDes('The maximum limit is 10');
      setToastOpen(true);
      return false;
    }

    if (!trim(quizTitle)) {
      setToastDes('Please enter title of quiz');
      setToastOpen(true);
      return false;
    }

    const id = uuidv4();
    const item = {
      id,
      title: trim(quizTitle),
      createTime: new Date().toDateString(),
      disabled: false,
    };
    setQuizList((list) => [...list, item]);

    // after add success
    setQuizTitle('');

    inputRef.current?.focus();
  };
  const deleteQuiz = (e: React.MouseEvent<HTMLInputElement>, id: string) => {
    const list = quizList.filter((item) => item.id !== id);
    setQuizList(list);
  };
  const handleSwitchQuizItem = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    const list = quizList.map((item) => {
      if (item.id === id) {
        item.disabled = !item.disabled;
      }
      return item;
    });
    setQuizList(list);
  };

  return (
    <div className="h-full flex flex-col pt-[26px] pl-[50px] pb-[36px] pr-[50px]">
      <section className="grow-0 flex justify-between">
        <span className="text-3xl">Quiz Generator</span>
        <div>
          <div className="flex items-center">
            <Switch
              size="md"
              checked={isActive}
              onCheckedChange={handleSwitch}
              htmlFor="quizActive"
              label={
                <label className="text-base pr-[15px]" htmlFor="quizActive">
                  Active
                </label>
              }
            />
          </div>
        </div>
      </section>
      <section className="grow-0 relative flex flex-wrap items-center gap-[15px]">
        <Label.Root
          className="text-[15px] font-medium leading-[35px] text-white"
          htmlFor="firstName"
        ></Label.Root>
        <input
          className=" w-full pl-5 pr-3 pt-2 pb-2 rounded-[14px] appearance-none items-center justify-center  text-base bg-black border-transparent  outline-none focus:shadow-[0_0_0_2px_#D7FF1F] "
          type="text"
          ref={inputRef}
          id="firstName"
          value={quizTitle}
          onChange={handleQuizChange}
        />
        <IconPlus
          classNames="absolute right-1 top-[22px] cursor-pointer"
          onClick={addQuiz}
        />
      </section>
      <div className="grow-0 flex justify-between bg-black pt-[18px] pb-[20px] pr-[12px] pl-[20px] text-base  mt-[30px] rounded-t-lg">
        <span>My Quiz</span>
        <div className="text-gray-light">
          <b className="text-white">{quizList.length}</b>/10
        </div>
      </div>
      <section className="grow overflow-auto bg-black  rounded-b-lg ">
        <div className="h-full pt-[20px] pl-[16px] pr-[16px]">
          {quizList.length ? (
            quizList.map((item) => (
              <QuizItem
                key={item.id}
                data={item}
                handleSwitchQuizItem={handleSwitchQuizItem}
                deleteQuiz={deleteQuiz}
              />
            ))
          ) : (
            <div className="h-full flex items-center justify-center">
              You haven’t created a quiz yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Faq;
