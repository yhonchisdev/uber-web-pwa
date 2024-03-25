import WayToUse, {
  WayToUseType,
} from "@/components/home/slide-ways-to-use/way-to-user";
import luxuryTravel from "@/assets/slides/luxury-travel.png";
import sendPackage from "@/assets/slides/send-package.png";
import chooseComfort from "@/assets/slides/choose-comfort.png";

function SlideWaysToUse(): JSX.Element {
  return (
    <div className="flex flex-row items-start space-x-4 px-4 overflow-x-auto [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
      {waysToUse.map((wayToUse: WayToUseType, index: number): JSX.Element => {
        return <WayToUse key={index} wayToUse={wayToUse} />;
      })}
    </div>
  );
}

const waysToUse: WayToUseType[] = [
  {
    image: luxuryTravel,
    title: "Viajá de lujo",
    description: "Servicio de calidad y autos de alta gama",
  },
  {
    image: sendPackage,
    title: "Enviá un paquete",
    description: "Entregas a pedido en toda la ciudad",
  },
  {
    image: chooseComfort,
    title: "Elegí la comodidad",
    description:
      "Los conductores con las mejores calificaciones y los autos mas nuevos",
  },
];

export default SlideWaysToUse;
