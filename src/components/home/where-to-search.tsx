import * as Solid from "@heroicons/react/24/solid";
import { useNavigator } from "@/components/navigation/navigator";

function WhereToSearch(): JSX.Element {
  const { changeCurrent } = useNavigator();

  const handlePlanYourTrip = (): void => {
    changeCurrent(1);
  };

  return (
    <div
      onClick={handlePlanYourTrip}
      className="flex flex-row items-center space-x-2 bg-gray-100 pl-4 pr-2 py-2 rounded-full"
    >
      <Solid.MagnifyingGlassIcon className="w-4 h-4 text-black" />
      <input
        className="flex-1 bg-gray-100 px-1 outline-none text-base text-black font-normal placeholder:text-gray-600 placeholder:font-medium"
        type="text"
        placeholder="¿A donde vas?"
      />
      <button className="flex flex-row items-center space-x-1.5 bg-white px-3 py-2 rounded-full duration-150 active:bg-gray-200">
        <Solid.ClockIcon className="w-5 h-5 text-black" />
        <span className="text-sm text-black font-normal">Ahora</span>
        <Solid.ChevronDownIcon className="w-3 h-3 text-black" />
      </button>
    </div>
  );
}

export default WhereToSearch;
