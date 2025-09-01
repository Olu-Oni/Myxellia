import house from "../assets/solar_home-linear.svg";
import user from "../assets/profile-blue.svg";
import arrowSkinny from "../assets/arrow-right.svg";
const SideCards = () => {
  return (
    <div className="flex flex-wrap flex-1 gap-4">
      <div id="card" className="basis-[407px] min-w-[300px] flex-1 h-[152px]">
        <div
          id="cardHeader"
          className="bg-[#F5F5F5] flex justify-between text-nowrap gap-2 "
        >
          <span className="flex items-center gap-2 text-sm font-medium text-nowrap">
            <img src={house} />
            Listings Overview
          </span>
          <a className="text-xs place-content-center text-[#4545FE]">
            View all
            <img className="inline mb-1 ml-2" src={arrowSkinny} />
          </a>
        </div>
        <div id="cardContent" className="grid grid-cols-3 gap-4">
          <span>
            <h5>Total</h5>
            <h2>1.8k</h2>
          </span>
          <span>
            <h5>Active</h5>
            <h2>80</h2>
          </span>
          <span>
            <h5>Archived</h5>
            <h2>1k</h2>
          </span>
        </div>
      </div>
      <div id="card" className="basis-[407px] flex-1 h-[152px]">
        <div
          id="cardHeader"
          className="bg-[#F5F5F5] text-sm flex justify-between"
        >
          <span className="flex items-center gap-2 font-medium text-nowrap ">
            <img src={user} style={{ color: "#4545FE" }} />
            Users Overview
          </span>
          <a className="text-xs place-content-center text-[#4545FE]">
            View all
            <img className="inline mb-1 ml-2" src={arrowSkinny} />
          </a>
        </div>
        <div id="cardContent" className="grid grid-cols-3 gap-4">
          <span>
            <h5>Total</h5>
            <h2>20.7k</h2>
          </span>
          <span>
            <h5>Riders</h5>
            <h2>8.5k</h2>
          </span>
          <span>
            <h5>Subscribers</h5>
            <h2>7.5k</h2>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideCards;
