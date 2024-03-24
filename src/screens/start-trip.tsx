import Map from "@/components/map/map";
import DetailTravel from "@/components/start-trip/detail-travel";
import InfoDriver from "@/components/start-trip/info-driver";
import DetailDriver from "@/components/start-trip/detail-driver";
import SlideTravels from "@/components/start-trip/slide-travels/slide";

function StartTripScreen(): JSX.Element {
  return (
    <div className="flex flex-col w-full h-full">
      <Map />
      <div className="relative z-10 flex flex-col space-y-4 bg-white h-2/4 rounded-t-3xl shadow-bottomSheet py-2">
        <div className="w-12 h-1.5 rounded-full bg-gray-200 mx-auto cursor-pointer" />
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

export default StartTripScreen;
