import * as Solid from "@heroicons/react/24/solid";

export type WayToUseType = {
  image: string;
  title: string;
  description: string;
};
type Props = {
  wayToUse: WayToUseType;
};
function WayToUse({ wayToUse }: Props): JSX.Element {
  return (
    <div className="flex flex-col min-w-[70%] bg-gray-50 rounded-lg overflow-hidden snap-always snap-center">
      <img
        className="w-full h-40 object-cover"
        src={wayToUse.image}
        alt={wayToUse.title}
      />
      <div className="flex flex-col py-2">
        <div className="flex flex-row items-center space-x-2">
          <span className="text-base text-black font-bold text-ellipsis line-clamp-2">
            {wayToUse.title}
          </span>
          <Solid.ArrowRightIcon className="w-4 h-4 text-black" />
        </div>
        <span className="text-sm text-gray-600 font-normal text-ellipsis line-clamp-2">
          {wayToUse.description}
        </span>
      </div>
    </div>
  );
}

export default WayToUse;
