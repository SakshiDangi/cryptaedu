import { clsx } from "clsx";

type BarProps = {
  percentage: number,
  color: string
}

const Bar = (props: BarProps) => {
  const { percentage, color } = props;

  const barStyle = {
    height: `${percentage}%`
  }

  const barBgClasses: Record<string, string> = {
    'green': 'bg-green-500',
    'red': 'bg-red-500',
    'blue': 'bg-blue-500'
  }

  return (
    <div className="flex items-end justify-end h-40">
      <div className={clsx(barBgClasses[color], "w-14 rounded-xl border-2 border-black")} style={barStyle}></div>
    </div>
  )
}

export default Bar;