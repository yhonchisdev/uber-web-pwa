import * as Solid from "@heroicons/react/24/solid";
import Map from "@/components/map/map";

function OrderLast(): JSX.Element {
  return (
    <div className="flex flex-col space-y-3 border border-gray-200 rounded-xl shadow-md shadow-black/5 p-4">
      <div className="w-full h-40 rounded-xl overflow-hidden">
        <Map hiddenControls />
      </div>
      <div className="flex flex-col items-start space-y-4">
        <div className="flex flex-col space-y-1">
          <h4 className="text-lg text-black font-semibold">Portela 2740</h4>
          <div className="flex flex-row items-center space-x-1">
            <span className="text-sm text-gray-500 font-normal">18 mar</span>
            <span className="text-sm text-gray-500 font-medium">•</span>
            <span className="text-sm text-gray-500 font-normal">18:34</span>
          </div>
          <div className="flex flex-row items-center space-x-1">
            <span className="text-sm text-gray-500 font-normal">$0,00</span>
            <span className="text-sm text-gray-500 font-medium">•</span>
            <span className="text-sm text-gray-500 font-normal">Cancelado</span>
          </div>
        </div>
        <button className="flex flex-row items-center space-x-2 bg-gray-100 px-3 py-2 rounded-full duration-150 active:bg-gray-200">
          <Solid.ArrowPathIcon className="w-4 h-4 text-black" />
          <span className="text-sm text-black font-normal">
            Repetir solicitud
          </span>
        </button>
      </div>
    </div>
  );
}

export default OrderLast;
