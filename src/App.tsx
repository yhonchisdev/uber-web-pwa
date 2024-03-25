import { APIProvider } from "@vis.gl/react-google-maps";
import NavigatorProvider from "@/components/navigation/navigator";
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
        <div className="relative flex flex-row w-[430px] max-w-full h-screen overflow-hidden bg-white sm:rounded-3xl sm:shadow-lg sm:shadow-black/20 sm:border-8 sm:border-gray-300">
          <NavigatorProvider>
            <Home />
            <PlanYourTrip />
            <SetPointOnMap />
            <ConnectingToDriver />
            <StartTrip />
            <PreviousTrips />
          </NavigatorProvider>
        </div>
      </div>
    </APIProvider>
  );
}

export default App;
