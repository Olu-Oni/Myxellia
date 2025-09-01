import arrowCircled from "../assets/arrow-circled.svg";

interface StatisticsValues {
  amountColor?: string;
  amount: number;
  percentageColor: string;
  percentage: number;
  children: React.ReactNode;
  arrowUp?: boolean;
}
const StatisticCard: React.FC<StatisticsValues> = ({
  children,
  amountColor,
  amount,
  percentageColor,
  percentage,
  arrowUp,
}) => {
  const formatNaira = (amt: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amt);
  };
  return (
    <span className="border h-[73px] w-[190px] p-3 rounded-xl">
      <h3 style={{ color: amountColor || "#4545FE" }}>{formatNaira(amount)}</h3>
      <span className="flex mt-1">
        <h6>{children}</h6>
        <svg
          className="ml-2 mr-1"
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={percentageColor || "currentColor"}
        >
          <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM13 12H16L12 8L8 12H11V16H13V12Z"></path>
        </svg>
        <h6 style={{ color: percentageColor }}>{percentage}%</h6>
      </span>
    </span>
  );
};

export default StatisticCard;
