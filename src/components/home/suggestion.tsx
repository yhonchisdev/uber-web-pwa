export type SuggestionType = {
  image: string;
  title: string;
};
type Props = {
  suggestion: SuggestionType;
};
function Suggestion({ suggestion }: Props): JSX.Element {
  return (
    <div className="flex flex-1 flex-col items-center justify-center space-y-2 w-24 h-24 bg-gray-100 rounded-md py-2">
      <img
        className="w-11 h-11 object-contain"
        src={suggestion.image}
        alt="taxi"
      />
      <span className="text-xs text-black font-medium">{suggestion.title}</span>
    </div>
  );
}

export default Suggestion;
