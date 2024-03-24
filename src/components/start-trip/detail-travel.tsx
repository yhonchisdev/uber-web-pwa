import * as Solid from "@heroicons/react/24/solid";

function DetailTravel(): JSX.Element {
  return (
    <div className="flex items-start justify-between space-x-4 bg-white border-2 border-gray-100 rounded-lg p-3">
      <div className="flex flex-col space-y-1">
        <span className="text-xs text-gray-600 font-medium">
          Detalles de viaje
        </span>
        <h4 className="text-base text-black font-semibold">
          Espera en el punto de partida
        </h4>
      </div>
      <button className="flex items-center justify-center bg-gray-100 w-10 h-10 rounded-lg duration-150 active:bg-gray-200">
        <Solid.EllipsisHorizontalIcon className="w-6 h-6 text-black" />
      </button>
    </div>
  );
}

export default DetailTravel;
