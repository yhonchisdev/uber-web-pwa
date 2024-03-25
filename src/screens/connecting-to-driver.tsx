import Map from "@/components/map/map";
import SteapsBar from "@/components/connecting-to-driver/steps-bar";
import DetailTravel from "@/components/connecting-to-driver/detail-travel";
import { useNavigator } from "@/components/navigation/navigator";

function ConnectingToDriver(): JSX.Element {
  const { changeCurrent } = useNavigator();

  const handleStartTrip = (): void => {
    changeCurrent(4);
  };

  return (
    <div className="flex flex-col w-full h-full animate-fadeIn">
      <Map />
      <div className="relative z-10 flex flex-col space-y-4 bg-white max-h-[50%] rounded-t-3xl shadow-bottomSheet py-2">
        <div className="w-12 h-1 rounded-full bg-gray-100 mx-auto cursor-pointer" />
        <div className="flex flex-col space-y-4 overflow-y-auto px-4">
          <div className="flex flex-col -space-y-0.5">
            <h3 className="flex-1 text-lg text-black text-center font-semibold">
              Conectándote con un socio de la App
            </h3>
            <span className="text-sm text-gray-500 text-center font-normal">
              Confirmando los detalles del socio de la App
            </span>
          </div>
          <div className="flex flex-col space-y-4">
            <SteapsBar handleContinue={handleStartTrip} />
            <DetailTravel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectingToDriver;
