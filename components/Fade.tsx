import { PropsWithChildren, useEffect, useState } from "react";

interface Props {
  show: boolean;
}

const Fade = ({ show, children }: PropsWithChildren<Props>) => {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  // "h-36 opacity-100" : "h-0 opacity-0"
  return render ? (
    <div
      className={`${
        show ? "max-h-[13rem] opacity-100" : "max-h-0 opacity-0"
      } transition-all duration-2000 overflow-y-scroll`}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  ) : null;
};

export default Fade;
