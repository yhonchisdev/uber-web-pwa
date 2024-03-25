import { useEffect, useState } from "react";

type Props = {
  handleContinue: () => void;
};
function SteapsBar({ handleContinue }: Props): JSX.Element {
  const [current, setCurrent] = useState<number>(-1);

  useEffect(() => {
    setCurrent(0);
    const animation = setInterval(() => {
      setCurrent((prev) => {
        const next: number = prev + 1;
        if (next >= 5) {
          clearInterval(animation);
          handleContinue();
          return prev;
        }
        return next;
      });
    }, 2000);

    return () => {
      setCurrent(-1);
      clearInterval(animation);
    };
  }, [handleContinue]);

  return (
    <div className="flex flex-row items-center space-x-2">
      {[...Array(4)].map((_, index: number): JSX.Element => {
        return (
          <div key={index} className="flex-1 h-1 bg-gray-100">
            {current >= index && (
              <div className="w-full h-full bg-blue-500 animate-steapProgress" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SteapsBar;
