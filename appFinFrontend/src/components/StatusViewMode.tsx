import { IconPointFilled } from '@tabler/icons-react'

const statusx: string[] = ['Visualização', 'Edição']

interface StatusProps {
  status: string
}

export default function StatusViewMode(props: StatusProps) {
  const { status } = props

  return (
    <div
      className={`bg-${status} text-${status} rounded-sm flex justify-center items-center w-[110px]`}
    >
      <IconPointFilled size={15} className={`text-${status}`} />
      <span className="px-0.5 pt-1 font-bold">{status}</span>
    </div>
  )
}
