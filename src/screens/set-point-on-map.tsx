import { useState } from "react";
import Map from "@/components/map/map";
import SearchLocation from "@/components/set-point-on-map/search-location";
import { useNavigator } from "@/components/navigation/navigator";

function SetPointOnMap(): JSX.Element {
  const { changeCurrent } = useNavigator();

  const [searchText, setSearchText] = useState<string>("");

  const handleChange = (value: string): void => {
    setSearchText(value);
  };

  const handleBack = (): void => {
    changeCurrent(1);
  };

  const handleConnectToDriver = (): void => {
    changeCurrent(3);
  };

  return (
    <div className="flex flex-col w-full h-full animate-fadeIn">
      <Map hiddenControls onBack={handleBack} />
      <div className="relative z-10 flex flex-col space-y-4 bg-white max-h-[50%] rounded-t-3xl shadow-bottomSheet shadow-black/5 py-2">
        <div className="w-12 h-1 rounded-full bg-gray-100 mx-auto cursor-pointer" />
        <div className="flex flex-col -space-y-1 overflow-y-auto divide-y-2 divide-gray-100">
          <div className="flex flex-col -space-y-0.5 px-4 pb-4">
            <h3 className="flex-1 text-lg text-black text-center font-semibold">
              Fija tu destino
            </h3>
            <span className="text-sm text-gray-500 text-center font-normal">
              Arrastra el mapa para mover el marcador
            </span>
          </div>
          <div className="flex flex-col space-y-4 px-4 pt-4 pb-6">
            <SearchLocation value={searchText} onChange={handleChange} />
            <button
              disabled={searchText.length === 0}
              onClick={handleConnectToDriver}
              className="flex items-center justify-center bg-black rounded-lg px-6 py-4 duration-150 group active:bg-black/80 disabled:bg-gray-100"
            >
              <span className="text-base text-white text-center font-normal group-disabled:text-gray-400">
                Confirmar destino
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetPointOnMap;
