import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

import formatValue from "@/utils/currency";

interface EntryTypeProps {
  value: number;
  type: string;
}

export default function EntryType(props: EntryTypeProps) {
  const { value, type } = props;

  return (
    <span className="flex font-bold">
      {type === "receita" ? (
        <IconTrendingUp stroke={2.5} size={15} className="text-green mr-1" />
      ) : (
        <IconTrendingDown stroke={2.5} size={15} className="text-red mr-1" />
      )}

      {formatValue.format(value)}
    </span>
  );
}
