import { APIProvider } from "@vis.gl/react-google-maps";
import NavigatorProvider from "@/components/navigation/navigator";
import StartTrip from "@/screens/start-trip";
import PlanYourTrip from "@/screens/plan-your-trip";
import ConnectingToDriver from "@/screens/connecting-to-driver";
import PreviousTrips from "@/screens/previous-trips";
import SetPointOnMap from "@/screens/set-point-on-map";
import Home from "@/screens/home";
import iphone from "@/assets/iphone.png";

function App(): JSX.Element {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="flex items-center justify-center">
        <div className="relative z-10 flex flex-row w-[430px] p-4 max-w-full h-screen ">
          <img
            className="absolute left-0 top-0 -z-10 w-screen h-screen"
            src={iphone}
            alt="iphone"
          />
          <div className="relative -z-10 w-full h-full rounded-[40px] overflow-hidden">
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
      </div>
    </APIProvider>
  );
}

export default App;
