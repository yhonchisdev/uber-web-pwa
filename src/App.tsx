import { APIProvider } from "@vis.gl/react-google-maps";
import StartTrip from "@/screens/start-trip";
import PlanYourTrip from "@/screens/plan-your-trip";
import ConnectingToDriver from "@/screens/connecting-to-driver";
import PreviousTrips from "@/screens/previous-trips";
import SetPointOnMap from "@/screens/set-point-on-map";
import Home from "@/screens/home";

function App(): JSX.Element {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="flex items-center justify-center">
        <div className="relative flex flex-row w-[430px] max-w-full h-screen overflow-y-hidden overflow-x-auto bg-white [&::-webkit-scrollbar]:hidden snap-x snap-mandatory sm:rounded-3xl sm:shadow-lg sm:shadow-black/20 sm:border-8 sm:border-gray-300">
          <div className="min-w-full snap-always snap-center">
            <StartTrip />
          </div>
          <div className="min-w-full snap-always snap-center">
            <PlanYourTrip />
          </div>
          <div className="min-w-full snap-always snap-center">
            <ConnectingToDriver />
          </div>
          <div className="min-w-full snap-always snap-center">
            <PreviousTrips />
          </div>
          <div className="min-w-full snap-always snap-center">
            <SetPointOnMap />
          </div>
          <div className="min-w-full snap-always snap-center">
            <Home />
          </div>
        </div>
      </div>
    </APIProvider>
  );
}

export default App;
