import { useEffect, useState } from "react";
import * as Solid from "@heroicons/react/24/solid";
import car from "@/assets/car.png";

type Props = {
  hiddenControls?: boolean;
  setPoint?: boolean;
};
function Map({ hiddenControls, setPoint }: Props): JSX.Element {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-full bg-gray-50 -mb-5">
      {isLoaded ? (
        <>
          {!setPoint && (
            <img
              className="w-16 h-16 object-contain rotate-12"
              src={car}
              alt="car"
            />
          )}
          {!setPoint && (
            <button className="absolute bottom-20 left-5 z-10 flex items-center justify-center bg-blue-100 w-16 h-16 rounded-full duration-150 active:opacity-80">
              <div className="w-4 h-4 rounded-full bg-blue-500" />
              <div className="absolute z-10 top-3.5 border-b-[6px] border-x-[6px] border-y-blue-500 border-x-transparent" />
            </button>
          )}
          {setPoint && (
            <>
              <button className="absolute bottom-1/3 left-1/3 z-20 flex flex-col items-center duration-150 active:opacity-80">
                <div className="flex items-center justify-center w-8 h-8 bg-black rounded-full">
                  <div className="w-1.5 h-1.5 bg-white" />
                </div>
                <div className="w-0.5 h-5 bg-black" />
              </button>
              <button className="absolute bottom-1/4 left-1/4 z-10 flex items-center justify-center w-16 h-16 rounded-full -rotate-45 duration-150 active:opacity-80">
                <div className="w-5 h-5 rounded-full bg-blue-500 border-4 border-bg-blue-100" />
                <div className="absolute z-10 top-3.5 border-b-[6px] border-x-[6px] border-y-blue-500 border-x-transparent" />
              </button>
            </>
          )}
        </>
      ) : (
        <div className="w-5 h-5 rounded-full border-2 border-white border-l-black border-t-black animate-spin" />
      )}
      {!hiddenControls && (
        <>
          <button className="absolute bottom-10 right-5 z-10 flex items-center justify-center bg-white w-10 h-10 rounded-full shadow-md shadow-black/15 duration-150 active:opacity-80">
            <Solid.ShieldCheckIcon className="w-6 h-6 text-blue-500" />
          </button>
          <button className="absolute bottom-20 mb-4 right-5 z-10 flex items-center justify-center bg-white w-10 h-10 rounded-full shadow-md shadow-black/15 duration-150 active:opacity-80">
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white border-l-gray-200 border-r-gray-200">
              <Solid.MapPinIcon className="w-4 h-4 text-blue-500" />
            </div>
          </button>
          <button className="absolute top-5 right-5 z-10 flex items-center justify-center bg-white w-10 h-10 rounded-full shadow-md shadow-black/15 duration-150 active:opacity-80">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full border-2 border-gray-200">
              <Solid.UserIcon className="w-5 h-5 text-gray-300" />
              <div className="absolute -top-0.5 -left-0.5 w-2 h-2 rounded-full bg-blue-500" />
            </div>
          </button>
        </>
      )}
      {setPoint && (
        <button className="absolute top-5 left-5 z-10 flex items-center justify-center bg-white w-12 h-12 rounded-full shadow-md shadow-black/15 duration-150 active:opacity-80">
          <Solid.ArrowLeftIcon className="w-5 h-5 text-black" />
        </button>
      )}
    </div>
  );
}

export default Map;
