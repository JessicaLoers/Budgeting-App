import { MouseEventHandler, ReactChild } from 'react';

interface ButtonProps {
  children: ReactChild;
  onClickFunction?: MouseEventHandler;
  primary?: boolean;
}

function Button({ children, onClickFunction, primary }: ButtonProps) {
  function isPrimary() {
    return primary ? 'bg-violet-500' : 'bg-violet-300';
  }

  const className = `${isPrimary()} px-4 py-2 m-2 rounded-full`;

  return onClickFunction ? (
    <button type="button" onClick={onClickFunction} className={className}>
      {children}
    </button>
  ) : (
    <button type="button" className={className}>
      {children}
    </button>
  );
}

export default Button;
