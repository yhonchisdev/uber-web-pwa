import Daily, { DailyType } from "@/components/home/slide-dailies/daily";
import rideWithUber from "@/assets/slides/ride-with-uber.webp";
import earnerIllustra from "@/assets/slides/earner-illustra.webp";

function SlideDailies(): JSX.Element {
  return (
    <div className="flex flex-row items-center space-x-4 px-4 overflow-x-auto [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
      {dailies.map((daily: DailyType, index: number): JSX.Element => {
        return <Daily key={index} daily={daily} />;
      })}
    </div>
  );
}

const dailies: DailyType[] = [
  {
    image: rideWithUber,
    title: "Agregá hasta 5 paradas",
    description: "Buscá lo que necesites en el camino",
  },
  {
    image: earnerIllustra,
    title: "Viajes con Uber Easy",
    description: "Viajes económicos",
  },
];

export default SlideDailies;
