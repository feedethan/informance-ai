import { FC } from 'react';

interface IProps {
  classNames: string;
  onClick?: () => void;
}

const IconPlus: FC<IProps> = ({ classNames, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      className={classNames}
      onClick={onClick}
    >
      <g clipPath="url(#clip0_620_3726)">
        <path
          d="M8.51472 16.9999H25.4853M17 8.51465V25.4852"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1 2.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_620_3726">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(17 0.0292969) rotate(45)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconPlus;
