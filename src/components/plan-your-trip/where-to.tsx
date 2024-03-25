import * as Solid from "@heroicons/react/24/solid";
import { useNavigator } from "@/components/navigation/navigator";

function WhereTo(): JSX.Element {
  const { changeCurrent } = useNavigator();

  const handleSetPointOnMap = (): void => {
    changeCurrent(2);
  };

  return (
    <div className="flex flex-row items-center justify-between space-x-4">
      <div
        onClick={handleSetPointOnMap}
        className="flex flex-1 items-stretch space-x-3 border-2 border-black rounded-lg px-3.5 py-2"
      >
        <div className="flex flex-col items-center space-y-0.5">
          <div className="flex items-center justify-center w-3 h-3 rounded-full bg-black">
            <div className="w-1 h-1 rounded-full bg-white" />
          </div>
          <div className="flex-1 w-0.5 h-full bg-black" />
          <div className="flex items-center justify-center w-3 h-3 bg-black">
            <div className="w-1 h-1 bg-white" />
          </div>
        </div>
        <div className="flex flex-1 flex-col space-y-2 pt-2">
          <input
            className="border-b-2 border-b-gray-100 outline-none text-sm text-black font-normal"
            type="text"
          />
          <span className="text-xs text-gray-500">¿A dónde vas?</span>
        </div>
      </div>
      <button className="flex items-center justify-center bg-gray-200 w-9 h-9 rounded-full duration-150 active:bg-gray-300">
        <Solid.PlusIcon className="w-5 h-5 text-black" />
      </button>
    </div>
  );
}

export default WhereTo;
