import * as Solid from "@heroicons/react/24/solid";
import Map from "@/components/map/map";
import WhereTo from "@/components/plan-your-trip/where-to";
import OptionTravel from "@/components/plan-your-trip/option-travel";
import ListAddress from "@/components/plan-your-trip/list-address";
import { useNavigator } from "@/components/navigation/navigator";

function PlanYourTrip(): JSX.Element {
  const { changeCurrent } = useNavigator();

  const handleBack = (): void => {
    changeCurrent(0);
  };

  return (
    <div className="flex flex-col w-full h-full animate-fadeIn">
      <Map />
      <div className="relative z-10 flex flex-col space-y-4 bg-white max-h-[100%] rounded-t-3xl shadow-bottomSheet py-2">
        <div className="w-12 h-1 rounded-full bg-gray-100 mx-auto cursor-pointer" />
        <div className="flex flex-col space-y-4 overflow-y-auto px-4">
          <div className="flex flex-row items-center space-x-2">
            <button
              onClick={handleBack}
              className="flex items-center justify-center w-10 h-10 rounded-full duration-150 active:bg-gray-100"
            >
              <Solid.ArrowLeftIcon className="w-5 h-5 text-black" />
            </button>
            <h3 className="flex-1 text-lg text-black text-center font-semibold">
              Planifica tu viaje
            </h3>
          </div>
          <div className="flex flex-col space-y-3">
            <OptionTravel />
            <div className="flex flex-col space-y-0.5">
              <WhereTo />
              <div className="flex flex-col -space-y-0.5">
                <ListAddress />
                <div className="flex items-center space-x-5 cursor-pointer duration-150 active:opacity-70">
                  <Solid.MapIcon className="w-5 h-5 text-black" />
                  <div className="flex flex-1 flex-col -space-y-0.5 pt-5 pb-5 border-b-2 border-b-gray-200">
                    <span className="text-sm text-black font-normal text-ellipsis line-clamp-1">
                      Establece la ubicacion en el mapa.
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-5 cursor-pointer duration-150 active:opacity-70">
                  <Solid.StarIcon className="w-5 h-5 text-black" />
                  <div className="flex flex-1 flex-col -space-y-0.5 pt-4 pb-4">
                    <span className="text-sm text-black font-normal text-ellipsis line-clamp-1">
                      Ubicaciones guardadas
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanYourTrip;
