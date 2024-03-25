import { useEffect, useState } from "react";
import * as Solid from "@heroicons/react/24/solid";
import { Map, AdvancedMarker, useApiIsLoaded } from "@vis.gl/react-google-maps";
import car from "@/assets/car.png";

type Props = {
  hiddenControls?: boolean;
  onBack?: () => void;
  onBackHome?: () => void;
};
function GoogleMap({ hiddenControls, onBack, onBackHome }: Props): JSX.Element {
  const position: google.maps.LatLngLiteral = {
    lat: -13.531817043356819,
    lng: -71.96707400490665,
  };

  const isLoaded = useApiIsLoaded();

  const [myPosition, setMyPosition] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [destination, setDestination] =
    useState<google.maps.LatLngLiteral | null>(null);

  useEffect(() => {
    setDestination({
      lat: -13.5198586869943,
      lng: -71.97515659429246,
    });
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (location: GeolocationPosition): void => {
        setMyPosition({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        });
      },
      (error: GeolocationPositionError): void => {
        console.error(error);
      }
    );
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-full bg-gray-50 -mb-5">
      {isLoaded ? (
        <>
          <Map
            mapId={"bf51a910020fa25a"}
            disableDefaultUI
            gestureHandling="greedy"
            className="w-full h-full"
            fullscreenControl={false}
            zoomControl={false}
            mapTypeControl={false}
            streetViewControl={false}
            defaultCenter={position}
            defaultZoom={16}
          >
            {myPosition && (
              <AdvancedMarker position={myPosition}>
                <div className="flex items-center justify-center bg-blue-500/25 w-16 h-16 rounded-full duration-150 active:opacity-80">
                  <div className="w-4 h-4 rounded-full bg-blue-500" />
                  <div className="absolute z-10 top-3.5 border-b-[6px] border-x-[6px] border-y-blue-500 border-x-transparent" />
                </div>
              </AdvancedMarker>
            )}
            <AdvancedMarker position={position}>
              <img
                className="w-12 h-12 object-contain rotate-90"
                src={car}
                alt="car"
              />
            </AdvancedMarker>
            {destination && (
              <AdvancedMarker position={destination}>
                <div className="relative flex flex-col items-center">
                  <div className="flex items-center justify-center w-8 h-8 bg-black rounded-full">
                    <div className="w-2 h-2 bg-white" />
                  </div>
                  <div className="w-1 h-5 bg-black" />
                  <div className="absolute bottom-0 -z-10 -mb-4 flex items-center justify-center -rotate-45">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20">
                      <div className="w-4 h-4 rounded-full bg-blue-500" />
                    </div>
                    <div className="absolute z-10 -top-2.5 border-b-[6px] border-x-[6px] border-y-blue-500 border-x-transparent" />
                  </div>
                </div>
              </AdvancedMarker>
            )}
          </Map>
        </>
      ) : (
        <div className="w-5 h-5 rounded-full border-2 border-white border-l-black border-t-black animate-spin" />
      )}
      {!hiddenControls && (
        <>
          <button className="absolute bottom-10 right-5 z-10 flex items-center justify-center bg-white w-10 h-10 rounded-full shadow-md shadow-black/15 duration-150 active:opacity-80">
            <Solid.ShieldCheckIcon className="w-6 h-6 text-blue-500" />
          </button>
          <button className="absolute bottom-20 mb-4 right-5 z-10 flex items-center justify-center bg-white w-10 h-10 rounded-full shadow-md shadow-black/15 duration-150 active:opacity-80">
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white border-l-gray-200 border-r-gray-200">
              <Solid.MapPinIcon className="w-4 h-4 text-blue-500" />
            </div>
          </button>
          <button className="absolute top-5 right-5 z-10 flex items-center justify-center bg-white w-10 h-10 rounded-full shadow-md shadow-black/15 duration-150 active:opacity-80">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full border-2 border-gray-200">
              <Solid.UserIcon className="w-5 h-5 text-gray-300" />
              <div className="absolute -top-0.5 -left-0.5 w-2 h-2 rounded-full bg-blue-500" />
            </div>
          </button>
        </>
      )}
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-5 left-5 z-10 flex items-center justify-center bg-white w-12 h-12 rounded-full shadow-md shadow-black/15 duration-150 active:opacity-80"
        >
          <Solid.ArrowLeftIcon className="w-5 h-5 text-black" />
        </button>
      )}
      {onBackHome && (
        <button
          onClick={onBackHome}
          className="absolute bottom-10 left-5 z-10 flex items-center justify-center bg-white w-12 h-12 rounded-full shadow-md shadow-black/15 duration-150 active:opacity-80"
        >
          <Solid.HomeIcon className="w-5 h-5 text-blue-500" />
        </button>
      )}
    </div>
  );
}

export default GoogleMap;
