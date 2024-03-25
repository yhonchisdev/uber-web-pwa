import * as Solid from "@heroicons/react/24/solid";

export type DailyType = {
  image: string;
  title: string;
  description: string;
};
type Props = {
  daily: DailyType;
};
function Daily({ daily }: Props): JSX.Element {
  return (
    <div className="flex flex-col min-w-[70%] bg-gray-50 rounded-lg overflow-hidden snap-always snap-center">
      <img
        className="w-full h-40 object-cover"
        src={daily.image}
        alt={daily.title}
      />
      <div className="flex flex-col py-2">
        <div className="flex flex-row items-center space-x-2">
          <span className="text-base text-black font-bold text-ellipsis line-clamp-2">
            {daily.title}
          </span>
          <Solid.ArrowRightIcon className="w-4 h-4 text-black" />
        </div>
        <span className="text-sm text-gray-600 font-normal text-ellipsis line-clamp-2">
          {daily.description}
        </span>
      </div>
    </div>
  );
}

export default Daily;
