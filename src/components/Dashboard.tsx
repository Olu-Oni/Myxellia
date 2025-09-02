import MainCard from "./MainCard";
import SideCards from "./SideCards";
import messages from "../assets/messages-3.svg";
import Slides from "./Slides";

const Dashboard = () => {
  return (
    <main className="relative flex flex-col gap-4 p-4 lg:px-16">
      <h3 className="">Welcome, Ahmed</h3>
      <div className="flex flex-wrap items-center gap-5">
        <MainCard />
        <SideCards />
        
        <Slides amt={1}/>
        <Slides amt={2}/>
        <Slides amt={3}/>
        
      </div>
      <button className="fixed z-20 bg-[#242526] bottom-20 right-12 w-14 h-14 flex place-content-center rounded-full">
        <img width={24} src={messages} />
      </button>
    </main>
  );
};

export default Dashboard;
