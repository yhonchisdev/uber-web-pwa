import * as Solid from "@heroicons/react/24/solid";

export type LocationType = {
  title: string;
  description: string;
};
type Props = {
  location: LocationType;
};
function Location({ location }: Props): JSX.Element {
  return (
    <div className="flex items-center space-x-5 cursor-pointer duration-150 active:opacity-70">
      <Solid.ClockIcon className="w-5 h-5 text-black" />
      <div className="flex flex-1 flex-col space-y-0.5 pt-2 pb-2 border-b-2 border-b-gray-100">
        <span className="text-sm text-black font-medium text-ellipsis line-clamp-1">
          {location.title}
        </span>
        <span className="text-xs text-gray-500 font-normal">
          {location.description}
        </span>
      </div>
    </div>
  );
}

export default Location;
