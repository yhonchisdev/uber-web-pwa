import Travel, {
  TravelType,
} from "@/components/start-trip/slide-travels/travel";
import rideWithUber from "@/assets/slides/ride-with-uber.webp";
import earnerIllustra from "@/assets/slides/earner-illustra.webp";
import u4bSquare from "@/assets/slides/u4b-square.webp";

function SlideTravels(): JSX.Element {
  return (
    <div className="flex flex-row items-center space-x-4 px-4 overflow-x-auto [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
      {travels.map((travel: TravelType, index: number): JSX.Element => {
        return <Travel key={index} index={index} travel={travel} />;
      })}
    </div>
  );
}

const travels: TravelType[] = [
  {
    title: "Viaja a cualquier lugar con la app de Uber",
    image: rideWithUber,
  },
  {
    title: "Conduce cuando quieras y genera las ganancias que necesites",
    image: earnerIllustra,
  },
  {
    title: "La misma plataforma de Uber, reinventada para los negocios",
    image: u4bSquare,
  },
];

export default SlideTravels;
