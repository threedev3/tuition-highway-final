import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

export default function Selector({ data, selected, setSelected, placeholder }) {
  const [query, setQuery] = useState("");

  const filteredItems =
    query === ""
      ? data
      : data.filter((item) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Combobox
      value={selected}
      onChange={setSelected}
      onClose={() => setQuery("")}
    >
      <div className="relative">
        <ComboboxInput
          className={clsx(
            "w-full  py-2 pr-8 border-b-2 border-b-borderColor bg-transparent sm:placeholder:text-base placeholder:text-sm",
            "focus:outline-none"
          )}
          placeholder={placeholder}
          displayValue={(item) => (item ? item.name : "")}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
          <ChevronDownIcon className="size-4 fill-black " />
        </ComboboxButton>
      </div>

      <ComboboxOptions
        anchor="bottom"
        transition
        className={clsx(
          "w-[var(--input-width)]  border border-gray-300 bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 h-32"
        )}
      >
        {filteredItems.map((item, index) => (
          <ComboboxOption
            key={index}
            value={item}
            className="group flex items-center gap-2 rounded-md py-1.5 px-3 select-none  cursor-pointer hover:bg-gray-100"
          >
            <div className="text-sm/6 text-black">{item.name}</div>
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
}
