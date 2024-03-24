import * as Solid from "@heroicons/react/24/solid";

function SearchLocation(): JSX.Element {
  return (
    <div className="flex flex-row items-center space-x-2 bg-gray-100 px-4 py-1 rounded-lg">
      <div className="flex items-center justify-center w-3.5 h-3.5 bg-black">
        <div className="w-1 h-1 bg-white" />
      </div>
      <input
        className="flex-1 bg-gray-100 px-2 outline-none text-base text-black font-normal placeholder:text-gray-400"
        type="text"
        placeholder="Buscar"
      />
      <button className="flex items-center justify-center py-3 duration-150 active:opacity-70">
        <Solid.MagnifyingGlassIcon className="w-4 h-4 text-black" />
      </button>
    </div>
  );
}

export default SearchLocation;
