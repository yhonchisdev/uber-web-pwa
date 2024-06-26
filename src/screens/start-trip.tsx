import Map from "@/components/map/map";
import DetailTravel from "@/components/start-trip/detail-travel";
import InfoDriver from "@/components/start-trip/info-driver";
import DetailDriver from "@/components/start-trip/detail-driver";
import SlideTravels from "@/components/start-trip/slide-travels/slide";
import { useNavigator } from "@/components/navigation/navigator";

function StartTrip(): JSX.Element {
  const { changeCurrent } = useNavigator();

  const handleBack = (): void => {
    changeCurrent(1);
  };

  const handleBackHome = (): void => {
    changeCurrent(0);
  };

  return (
    <div className="flex flex-col w-full h-full animate-fadeIn">
      <Map onBack={handleBack} onBackHome={handleBackHome} />
      <div className="relative z-10 flex flex-col space-y-4 bg-white max-h-[50%] rounded-t-3xl shadow-bottomSheet py-2">
        <div className="w-12 h-1 rounded-full bg-gray-100 mx-auto cursor-pointer" />
        <div className="flex flex-col -space-y-1 overflow-y-auto">
          <h3 className="text-lg text-black text-center font-semibold">
            Inicio de viaje en 2 min
          </h3>
          <div className="divide-y divide-gray-200">
            <div className="p-4">
              <DetailTravel />
            </div>
            <div className="flex flex-col space-y-3 p-4">
              <InfoDriver />
              <DetailDriver />
            </div>
            <div className="py-4">
              <SlideTravels />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartTrip;
