function SteapsBar(): JSX.Element {
  return (
    <div className="flex flex-row items-center space-x-2">
      <div className="flex-1 h-1 bg-gray-100">
        <div className="w-full h-full bg-blue-500" />
      </div>
      <div className="flex-1 h-1 bg-gray-100">
        <div className="w-full h-full bg-blue-500" />
      </div>
      <div className="flex-1 h-1 bg-gray-100">
        <div className="w-full h-full bg-blue-500" />
      </div>
      <div className="flex-1 h-1 bg-gray-100">
        <div className="w-1/2 h-full bg-blue-500" />
      </div>
    </div>
  );
}

export default SteapsBar;
