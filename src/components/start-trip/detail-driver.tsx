import * as Solid from "@heroicons/react/24/solid";

function DetailDriver(): JSX.Element {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-row items-center mx-auto">
        <span className="text-xs text-blue-500 font-medium uppercase underline cursor-pointer duration-150 active:opacity-80">
          Juan Manuel
        </span>
        <span className="text-sm text-black font-medium mx-1.5">•</span>
        <div className="flex flex-row items-center space-x-0.5">
          <span className="text-xs text-black font-normal">4.95</span>
          <Solid.StarIcon className="w-3 h-3 text-black" />
        </div>
        <span className="text-sm text-black font-medium mx-1.5">•</span>
        <span className="text-xs text-gray-600 font-normal">1.586 viajes</span>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <input
          className="flex-1 bg-gray-200 px-4 py-2 rounded-full text-sm text-black font-normal outline-black placeholder:text-gray-600"
          type="text"
          placeholder="Nota para iniciar el viaje"
        />
        <button className="flex items-center justify-center bg-gray-200 w-10 h-10 rounded-full duration-150 active:bg-gray-300">
          <Solid.PhoneIcon className="w-5 h-5 text-black" />
        </button>
      </div>
    </div>
  );
}

export default DetailDriver;
