"use client";

import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import { useState } from "react";

interface SelectEntryRegistryProps {
  input: string[];
}

export default function SelectEntryRegistry(props: SelectEntryRegistryProps) {
  const { input } = props;

  const [stateOption, setStateOption] = useState("despesa");

  return (
    <div
      className={`flex justify-center border-b border-lightGray border-opacity-30 text-${
        stateOption === "despesa" ? "red" : "green"
      }`}
    >
      <span>
        {stateOption === "despesa" ? (
          <IconTrendingDown size={15} />
        ) : (
          <IconTrendingUp size={15} />
        )}
      </span>
      <select
        className="bg-transparent font-semibold text-sm text-center uppercase"
        onChange={(e) => setStateOption(e.target.value)}
      >
        {input.map((item) => {
          return (
            <option key="" value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
