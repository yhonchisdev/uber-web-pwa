import * as Solid from "@heroicons/react/24/solid";

export type TranslateType = {
  image: string;
  title: string;
  description: string;
};
type Props = {
  translate: TranslateType;
};
function Translate({ translate }: Props): JSX.Element {
  return (
    <div className="flex flex-col min-w-[70%] bg-gray-50 rounded-lg overflow-hidden snap-always snap-center">
      <img
        className="w-full h-40 object-cover"
        src={translate.image}
        alt={translate.title}
      />
      <div className="flex flex-col py-2">
        <div className="flex flex-row items-center space-x-2">
          <span className="text-base text-black font-bold text-ellipsis line-clamp-2">
            {translate.title}
          </span>
          <Solid.ArrowRightIcon className="w-4 h-4 text-black" />
        </div>
        <span className="text-sm text-gray-600 font-normal text-ellipsis line-clamp-2">
          {translate.description}
        </span>
      </div>
    </div>
  );
}

export default Translate;
