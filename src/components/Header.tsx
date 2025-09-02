import logo from "../assets/myxellia-logo.svg";
import bell from "../assets/bell-icon.svg";
import calculator from "../assets/calculator-icon.svg";
import calendar from "../assets/calendar.svg";
import message from "../assets/message-notif.svg";
import home from "../assets/Home 1.svg";
import toolbox from "../assets/Toolbox.svg";
import user1 from "../assets/Profile1.svg";
import article from "../assets/Article.svg";
import scroll from "../assets/Scroll.svg";
import search from "../assets/Search 1.svg";

interface HeaderProps {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
      setCalenderOpen: React.Dispatch<React.SetStateAction<boolean>>;
  calenderOpen: boolean;

}
const Header:React.FC<HeaderProps> = ({setModalOpen, setCalenderOpen, calenderOpen}) => {
    const handleModalClickOpen = () => {
    setModalOpen(true);
  };

  const handlecalenderClickOpen = () => {
    setCalenderOpen(!calenderOpen);
  };
  return (
    <header className="border-b">
      <div className="bg-[#191919] !z-50 text-[#FFFFFF] h-[84px] flex items-center justify-between p-4 lg:px-16">
        <img src={logo} className="h-[26px]" />

        <span className="flex gap-7">
          <button disabled>
            <img src={bell} />
          </button>
          <button onClick={handleModalClickOpen} className="cursor-pointer">
            <img src={calculator} />
          </button>
          <button  onClick={handlecalenderClickOpen}  className="cursor-pointer">
            <img src={calendar} />
          </button>
          <button disabled>
            <img src={message} />
          </button>
          <button className="w-10 h-10 font-medium text-black bg-white rounded-full text-[23px]">
            D
          </button>
        </span>
      </div>
      <nav className="flex gap-4 text-[#3D3D3D] h-[67px] items-center px-4 lg:px-16 bg-white">
        <a className="max-lg:hidden flex items-center gap-2 font-semibold text-center text-black bg-[#F5F5F5] p-2 rounded-md"><img src={home}/>Dashboard</a>
        <a className="flex items-center gap-2 text-center max-lg:hidden"><img src={toolbox}/>Listings</a>
        <a className="flex items-center gap-2 text-center max-lg:hidden"><img src={user1}/>Users</a>
        <a className="flex items-center gap-2 text-center max-lg:hidden"><img src={article}/>Request</a>
        <a className="flex items-center gap-2 text-center max-lg:hidden"><img src={scroll}/>Applications</a>
        <div className="p-2 rounded-lg bg-[#F5F5F5] flex gap-2 border grow max-w-[320px] ml-auto">
          <img src={search}/> <input className="bg-transparent focus:outline-none " placeholder="Search listings, users here..."/></div>
      </nav>
    </header>
  );
};

export default Header;
