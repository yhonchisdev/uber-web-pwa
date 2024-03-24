export type TravelType = {
  title: string;
  image: string;
};
type Props = {
  index: number;
  travel: TravelType;
};
function Travel({ index, travel }: Props): JSX.Element {
  return (
    <div
      className={`flex flex-row min-w-full h-24 ${
        index === 0
          ? "bg-yellow-400"
          : index === 1
          ? "bg-blue-400"
          : "bg-green-400"
      } rounded-lg overflow-hidden snap-always snap-center`}
    >
      <div className="flex items-center flex-1 px-4 py-2">
        <span className="text-lg text-black font-bold text-ellipsis line-clamp-2">
          {travel.title}
        </span>
      </div>
      <img
        className="w-2/6 h-full object-cover"
        src={travel.image}
        alt={travel.title}
      />
    </div>
  );
}

export default Travel;
