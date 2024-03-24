import Address, { AddressType } from "@/components/plan-your-trip/address";

function ListAddress(): JSX.Element {
  return (
    <div className="flex flex-col space-y-0.5">
      {listAddress.map((address: AddressType, index: number): JSX.Element => {
        return <Address key={index} address={address} />;
      })}
    </div>
  );
}

const listAddress: AddressType[] = [
  {
    title: "Avenida Raúl Scalabrini Ortiz & Paraguay",
    description: "Av. Raúl Scalabrini Ortiz & Paraguay, Buenos Aires",
  },
  {
    title: "Billinghurst & Charcas",
    description: "Buenos Aires",
  },
  {
    title: "Argentina",
    description: "Buenos Aires",
  },
  {
    title: "Av. Costanera Rafael Obligado 4900",
    description: "Buenos Aires",
  },
  {
    title: "Catamarca 2058",
    description: "AAR Buenos Aires",
  },
];

export default ListAddress;
