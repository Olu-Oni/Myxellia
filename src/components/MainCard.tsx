// Component imports
import MyBarChart from "./BarChart";
import arrow1 from "../assets/arrow2.svg";
import StatisticCard from "./StatisticCard";

const MainCard = () => {
  return (
    <div id="card" className="basis-[860px] min-h-[320px] border rounded-md">
      {/* Header section */}
      <div id="card-header" className="flex flex-col gap-3 !pb-3 border-b">
        <span className="flex justify-between gap-4">
          <span>
            <h3 className="">Sales Overview</h3>
            <p className="text-[#606060] text-xs mt-1">
              Showing overview Jan 2022 - Sep 2022
            </p>
          </span>

          <button className="px-6 h-[46px] font-medium border rounded-full flex place-items-center">
            View Transactions
          </button>
        </span>

        {/* Time period filters */}
        <span className="grid grid-cols-[repeat(3,80px)] gap-4 ml-auto h-[33px] text-sm">
          <button className="">1 Week</button>
          <button>1 Month</button>
          <button className="font-semibold active">1 Year</button>
        </span>
      </div>

      {/* Chart and statistics content */}
      <div id="card-content" className="flex overflow-auto gap-2 !pt-3 !pb-2">
        {/* Chart with navigation arrows */}
        <span id="graph" className="flex items-center">
          <button className="min-w-[18px] h-[18px] active flex place-content-center">
            <img src={arrow1} />
          </button>
          <MyBarChart />
          <button className="min-w-[18px] h-[18px] active flex place-content-center">
            <img src={arrow1} className="rotate-180" />
          </button>
        </span>

        {/* Statistics cards grid */}
        <div id="statistics" className="grid grid-cols-2 gap-2 min-w-[375px]">
          <StatisticCard
            percentage={2.5}
            percentageColor="#12B76A"
            amount={120000000}
          >
            Total Inflow
          </StatisticCard>
          <StatisticCard
            percentage={2.5}
            percentageColor="#12B76A"
            amount={50000000}
            amountColor="#12B76A"
          >
            MRR
          </StatisticCard>
          <StatisticCard
            percentage={0.5}
            percentageColor="#14B8A6"
            amount={120000000}
            amountColor="#14B8A6"
            arrowDown={true}
          >
            Commission Revenue
          </StatisticCard>
          <StatisticCard
            percentage={0.5}
            percentageColor="#F04438"
            amount={120000000}
            amountColor="#F04438"
            arrowDown={true}
          >
            GMV
          </StatisticCard>
        </div>
      </div>
    </div>
  );
};

export default MainCard;