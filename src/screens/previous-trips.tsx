import * as Solid from "@heroicons/react/24/solid";
import OrderLast from "@/components/previous-trips/order-last";
import ListOrder from "@/components/previous-trips/list-order";
import BottomNavigate from "@/components/previous-trips/bottom-navigate";

function PreviousTrips(): JSX.Element {
  return (
    <div className="flex flex-col w-full h-full animate-fadeIn">
      <div className="flex flex-1 flex-col space-y-4 overflow-y-auto py-6">
        <div className="flex flex-col space-y-5 px-4">
          <h3 className="text-3xl text-black font-semibold">Actividad</h3>
          <div className="flex flex-row items-center justify-between space-x-4">
            <span className="text-lg text-black font-semibold">Anteriores</span>
            <button className="flex items-center justify-center bg-gray-200 w-10 h-10 rounded-full duration-150 active:bg-gray-300">
              <Solid.AdjustmentsHorizontalIcon className="w-5 h-5 text-black" />
            </button>
          </div>
          <OrderLast />
        </div>
        <ListOrder />
      </div>
      <BottomNavigate />
    </div>
  );
}

export default PreviousTrips;
