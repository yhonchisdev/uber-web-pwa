import * as Solid from "@heroicons/react/24/solid";
import driver from "@/assets/driver.png";
import taxi from "@/assets/taxi.png";

function InfoDriver(): JSX.Element {
  return (
    <div className="flex flex-row justify-between space-x-4">
      <div className="flex flex-row items-center -space-x-5">
        <div className="flex flex-col -space-y-3 z-10">
          <img
            className="w-10 h-10 border border-white shadow-md shadow-black/25 rounded-full object-cover"
            src={driver}
            alt="Juan Manuel"
          />
          <div className="flex flex-row items-center space-x-0.5 bg-white shadow-md shadow-black/10 rounded-full px-1 py-0.5">
            <span className="text-xs text-black font-normal">4.95</span>
            <Solid.StarIcon className="w-3 h-3 text-black" />
          </div>
        </div>
        <img
          className="w-16 h-16 object-contain"
          src={taxi}
          alt="Juan Manuel"
        />
      </div>
      <div className="flex flex-col items-end">
        <span className="text-base text-black font-medium">***63FN</span>
        <span className="text-xs text-gray-600 font-normal">
          Chevrolet Prisma
        </span>
      </div>
    </div>
  );
}

export default InfoDriver;
