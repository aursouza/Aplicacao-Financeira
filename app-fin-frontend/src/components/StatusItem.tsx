"use client";

import { IconPointFilled } from "@tabler/icons-react";
import { useState } from "react";

interface StatusProps {
  status: string[];
}

export default function StatusItem(props: StatusProps) {
  const { status } = props;

  const [stateOptionStatus, setStateOptionStatus] = useState(status[0]);

  return (
    <div
      className={`bg-${stateOptionStatus} text-${stateOptionStatus} rounded-sm flex justify-center items-center w-[110px]`}
    >
      <IconPointFilled size={15} className={`text-${stateOptionStatus}`} />

      <select
        className="px-0.5 pt-1 font-bold bg-transparent text-sm text-center appearance-none"
        onChange={(e) => setStateOptionStatus(e.target.value)}
      >
        {status.map((item) => {
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
