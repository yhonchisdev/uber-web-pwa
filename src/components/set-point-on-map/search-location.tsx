import { ChangeEvent } from "react";
import * as Solid from "@heroicons/react/24/solid";

type Props = {
  value: string;
  onChange: (i: string) => void;
};
function SearchLocation({ value, onChange }: Props): JSX.Element {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value: string = event.currentTarget.value;
    onChange(value);
  };

  return (
    <div className="flex flex-row items-center space-x-2 bg-gray-100 px-4 py-1 rounded-lg">
      <div className="flex items-center justify-center w-3.5 h-3.5 bg-black">
        <div className="w-1 h-1 bg-white" />
      </div>
      <input
        className="flex-1 bg-gray-100 px-2 outline-none text-base text-black font-normal placeholder:text-gray-400"
        type="text"
        placeholder="Buscar"
        value={value}
        onChange={handleChange}
      />
      <button className="flex items-center justify-center py-3 duration-150 active:opacity-70">
        <Solid.MagnifyingGlassIcon className="w-4 h-4 text-black" />
      </button>
    </div>
  );
}

export default SearchLocation;
