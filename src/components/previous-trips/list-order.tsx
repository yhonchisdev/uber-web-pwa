import Order, { OrderType } from "./order";

function ListOrder(): JSX.Element {
  return (
    <div className="flex flex-col space-y-1 px-3">
      {listOrders.map((order: OrderType, index: number) => {
        return <Order key={index} order={order} />;
      })}
    </div>
  );
}

const listOrders: OrderType[] = [
  {
    address: "Av. Alfredo Benavides",
    departure: "2 mar",
    time: "16:49",
    price: "PEN15,90",
  },
  {
    address: "Av. Raúl Scalabrini Ordinario",
    departure: "23 feb",
    time: "23:29",
    price: "$0,00",
    cancelled: true,
  },
  {
    address: "Av. Costanera Rafael Obligado 4900",
    departure: "16 mar",
    time: "14:29",
    price: "$20,00",
  },
  {
    address: "Avenida Raúl Scalabrini Ortiz & Paraguay",
    departure: "10 feb",
    time: "20:29",
    price: "$0,00",
    cancelled: true,
  },
];

export default ListOrder;
