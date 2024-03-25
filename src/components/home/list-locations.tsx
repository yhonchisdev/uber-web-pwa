import Location, { LocationType } from "./location";

function ListLocations(): JSX.Element {
  return (
    <div className="flex flex-col space-y-0.5">
      {listLocations.map(
        (location: LocationType, index: number): JSX.Element => {
          return <Location key={index} location={location} />;
        }
      )}
    </div>
  );
}

const listLocations: LocationType[] = [
  {
    title: "Avenida Raúl Scalabrini Ortiz & Paraguay",
    description: "Av. Raúl Scalabrini Ortiz & Paraguay, Buenos Aires",
  },
  {
    title: "Billinghurst & Charcas",
    description: "Buenos Aires",
  },
];

export default ListLocations;
