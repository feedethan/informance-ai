import { FC } from 'react';

interface IProps {
  classNames?: string;
  onClick?: () => void;
}

const IconPlus: FC<IProps> = ({ classNames, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={classNames}
      onClick={onClick}
    >
      <rect
        y="24"
        width="24"
        height="24"
        rx="8"
        transform="rotate(-90 0 24)"
        fill="white"
        fillOpacity="0.2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16C10.9 16 10 16.9 10 18ZM10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6ZM12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14Z"
        fill="white"
      />
    </svg>
  );
};

export default IconPlus;
