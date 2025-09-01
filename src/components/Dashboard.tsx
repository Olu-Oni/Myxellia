import MainCard from "./MainCard";
import SideCards from "./SideCards";
import messages from "../assets/messages-3.svg";
import Swiper from "./Swiper";

const Dashboard = () => {
  return (
    <main className="relative flex flex-col gap-4 p-4 lg:px-16">
      <h3 className="">Welcome, Ahmed</h3>
      <div className="flex flex-wrap gap-5">
        <MainCard />
        <SideCards />
        <Swiper />
      </div>
      <button className="fixed bg-[#242526] bottom-20 right-12 w-14 h-14 flex place-content-center rounded-full">
        <img width={24} src={messages} />
      </button>
    </main>
  );
};

export default Dashboard;
