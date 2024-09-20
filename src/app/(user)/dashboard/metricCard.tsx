import { roundIfNumber } from "@/lib/utils";

type Props = {
  value: number | string | null
  label: string
}

const MetricCard = (props: Props) => {
  const { value, label } = props;

  return (
    <div className="p-6 border rounded-md">
      <p className="text-[#6c7381]">{label}</p>
      <p className="mt-2 text-3xl font-bold">{roundIfNumber(value)}</p>
    </div>
  )
};

export default MetricCard;