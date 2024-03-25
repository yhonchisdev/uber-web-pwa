import WhereToSearch from "@/components/home/where-to-search";
import BottomNavigate from "@/components/home/bottom-navigate";
import ListLocations from "@/components/home/list-locations";
import ListSuggestions from "@/components/home/list-suggestions";
import SlideDailies from "@/components/home/slide-dailies/slide";

function Home(): JSX.Element {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-1 flex-col space-y-6 overflow-y-auto py-6">
        <div className="flex flex-col space-y-5 px-4">
          <h3 className="text-3xl text-black font-medium">Uber</h3>
          <div className="flex flex-col space-y-1">
            <WhereToSearch />
            <ListLocations />
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="flex flex-row items-center justify-between space-x-2 px-4">
            <h4 className="text-lg text-black font-semibold">Sugerencias</h4>
            <span className="text-sm text-gray-600 font-medium">Ver todo</span>
          </div>
          <ListSuggestions />
        </div>
        <div className="flex flex-col space-y-3">
          <div className="flex flex-row items-center justify-between space-x-2 px-4">
            <h4 className="text-lg text-black font-semibold">
              Ahorra a diario
            </h4>
          </div>
          <SlideDailies />
        </div>
      </div>
      <BottomNavigate />
    </div>
  );
}

export default Home;
