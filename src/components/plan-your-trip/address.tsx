import * as Solid from "@heroicons/react/24/solid";

export type AddressType = {
  title: string;
  description: string;
};
type Props = {
  address: AddressType;
};
function Address({ address }: Props): JSX.Element {
  return (
    <div className="flex items-center space-x-5 cursor-pointer duration-150 active:opacity-70">
      <Solid.MapPinIcon className="w-5 h-5 text-black" />
      <div className="flex flex-1 flex-col -space-y-0.5 pt-3 pb-2 border-b-2 border-b-gray-200">
        <span className="text-sm text-black font-normal text-ellipsis line-clamp-1">
          {address.title}
        </span>
        <span className="text-sm text-gray-500 font-normal">
          {address.description}
        </span>
      </div>
    </div>
  );
}

export default Address;
