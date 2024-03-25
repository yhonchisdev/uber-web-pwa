import taxi from "@/assets/taxi.png";
import calendar from "@/assets/calendar.png";
import box from "@/assets/box.png";
import Suggestion, { SuggestionType } from "@/components/home/suggestion";

function ListSuggestions(): JSX.Element {
  return (
    <div className="flex flex-row items-center space-x-4 overflow-x-auto px-4">
      {listSuggestions.map(
        (suggestion: SuggestionType, index: number): JSX.Element => {
          return <Suggestion key={index} suggestion={suggestion} />;
        }
      )}
    </div>
  );
}

const listSuggestions: SuggestionType[] = [
  {
    image: taxi,
    title: "Viaje",
  },
  {
    image: calendar,
    title: "Reserve",
  },
  {
    image: box,
    title: "Envios",
  },
];

export default ListSuggestions;
