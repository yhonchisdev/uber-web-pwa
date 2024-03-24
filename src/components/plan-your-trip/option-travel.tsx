import * as Solid from "@heroicons/react/24/solid";

function OptionTravel(): JSX.Element {
  return (
    <div className="flex flex-row items-center space-x-2">
      <button className="flex flex-row items-center space-x-1.5 bg-gray-100 px-3 py-2 rounded-full duration-150 active:bg-gray-200">
        <Solid.ClockIcon className="w-5 h-5 text-black" />
        <span className="text-sm text-black font-normal">
          Iniciar el viaje ahora
        </span>
        <Solid.ChevronDownIcon className="w-3 h-3 text-black" />
      </button>
      <button className="flex flex-row items-center space-x-1.5 bg-gray-100 px-3 py-2 rounded-full duration-150 active:bg-gray-200">
        <Solid.UserIcon className="w-5 h-5 text-black" />
        <span className="text-sm text-black font-normal">Para mi</span>
        <Solid.ChevronDownIcon className="w-3 h-3 text-black" />
      </button>
    </div>
  );
}

export default OptionTravel;
