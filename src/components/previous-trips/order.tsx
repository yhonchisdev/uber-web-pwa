import * as Solid from "@heroicons/react/24/solid";
import taxi from "@/assets/taxi.png";

export type OrderType = {
  address: string;
  departure: string;
  time: string;
  price: string;
  cancelled?: boolean;
};
type Props = {
  order: OrderType;
};
function Order({ order }: Props): JSX.Element {
  return (
    <div className="flex flex-row items-center space-x-3">
      <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-md">
        <img className="w-14 h-14 object-contain" src={taxi} alt="taxi" />
      </div>
      <div className="flex flex-1 flex-row items-center justify-between space-x-4 pt-2 pb-3 border-b-2 border-gray-100">
        <div className="flex flex-col -space-y-0.5">
          <h4 className="text-base text-black font-medium text-ellipsis line-clamp-2">
            {order.address}
          </h4>
          <div className="flex flex-row items-center space-x-1">
            <span className="text-sm text-gray-500 font-normal">
              {order.departure}
            </span>
            <span className="text-sm text-gray-500 font-medium">•</span>
            <span className="text-sm text-gray-500 font-normal">
              {order.time}
            </span>
          </div>
          <div className="flex flex-row items-center space-x-1">
            <span className="text-sm text-gray-500 font-normal">
              {order.price}
            </span>
            {order.cancelled && (
              <>
                <span className="text-sm text-gray-500 font-medium">•</span>
                <span className="text-sm text-gray-500 font-normal">
                  Cancelado
                </span>
              </>
            )}
          </div>
        </div>
        <button className="flex flex-row items-center space-x-2 bg-gray-100 px-3 py-2 rounded-full duration-150 active:bg-gray-200">
          <Solid.ArrowPathIcon className="w-4 h-4 text-black" />
          <span className="text-sm text-black font-normal text-nowrap">
            Repetir solicitud
          </span>
        </button>
      </div>
    </div>
  );
}

export default Order;
