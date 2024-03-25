import * as Solid from "@heroicons/react/24/solid";

function BottomNavigate(): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-between space-x-1 bg-white border-t border-t-gray-200 px-4 pt-4 pb-6 shadow-bottomSheet shadow-black/5">
      <button className="flex flex-1 flex-col items-center justify-center duration-150 active:opacity-80">
        <Solid.HomeIcon className="w-6 h-6 text-black" />
        <span className="text-sm text-black font-normal">Inicio</span>
      </button>
      <button className="relative flex flex-1 flex-col items-center justify-center duration-150 active:opacity-80">
        <Solid.Squares2X2Icon className="w-6 h-6 text-gray-500" />
        <span className="text-sm text-gray-500 font-normal">Servicios</span>
        <div className="absolute -top-1 right-9 w-3 h-3 rounded-full bg-blue-500 border-2 border-white" />
      </button>
      <button className="flex flex-1 flex-col items-center justify-center duration-150 active:opacity-80">
        <Solid.BookmarkSquareIcon className="w-6 h-6 text-gray-500" />
        <span className="text-sm text-gray-500 font-normal">Actividad</span>
      </button>
      <button className="relative flex flex-1 flex-col items-center justify-center duration-150 active:opacity-80">
        <Solid.UserIcon className="w-6 h-6 text-gray-500" />
        <span className="text-sm text-gray-500 font-normal">Cuenta</span>
        <div className="absolute -top-1 right-9 w-3 h-3 rounded-full bg-blue-500 border-2 border-white" />
      </button>
    </div>
  );
}

export default BottomNavigate;
