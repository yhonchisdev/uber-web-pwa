import SetPointOnMap from "@/screens/set-point-on-map";

function App(): JSX.Element {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[430px] max-w-full h-screen overflow-hidden bg-white rounded-3xl shadow-lg shadow-black/20">
        <SetPointOnMap />
      </div>
    </div>
  );
}

export default App;
