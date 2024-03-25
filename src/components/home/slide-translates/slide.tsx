import Translate, {
  TranslateType,
} from "@/components/home/slide-translates/translate";
import uberMotoRides from "@/assets/slides/uber-moto-rides.png";
import shuttleRides from "@/assets/slides/shuttle-rides.png";

function SlideTranslates(): JSX.Element {
  return (
    <div className="flex flex-row items-start space-x-4 px-4 overflow-x-auto [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
      {translates.map(
        (translate: TranslateType, index: number): JSX.Element => {
          return <Translate key={index} translate={translate} />;
        }
      )}
    </div>
  );
}

const translates: TranslateType[] = [
  {
    image: uberMotoRides,
    title: "Probá Uber Juntos",
    description: "Compartí tu viaje y ahorrá hasta un 20%",
  },
  {
    image: shuttleRides,
    title: "Subí a Uber Moto",
    description: "Atravesá el transito con facilidad y ahorrá tiempo",
  },
];

export default SlideTranslates;
