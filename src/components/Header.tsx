// Asset imports
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
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { Popover, Typography } from "@mui/material";
import PopoverContent from "./PopoverContent";

interface HeaderProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCalenderOpen: React.Dispatch<React.SetStateAction<boolean>>;
  calenderOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({
  setModalOpen,
  setCalenderOpen,
  calenderOpen,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // Modal handlers
  const handleModalClickOpen = () => {
    setModalOpen(true);
  };

  const handlecalenderClickOpen = () => {
    setCalenderOpen(!calenderOpen);
  };

  return (
    <header className="border-b">
      {/* Top bar */}
      <div className="bg-[#191919] !z-50 text-[#FFFFFF] h-[84px] flex items-center justify-between p-4 lg:px-16">
        <img src={logo} className="h-[26px]" alt="Myxellia Logo" />

        {/* Action buttons */}
        <span className="flex gap-7">
          <button disabled>
            <img src={bell} alt="Notifications" />
          </button>

          {/* Budgeting tooltip */}
          <Tooltip
            title="Budgeting"
            slotProps={{
              tooltip: {
                sx: {
                  backgroundColor: "black",
                },
              },
            }}
          >
            <button onClick={handleModalClickOpen} className="cursor-pointer">
              <img src={calculator} alt="Budget Calculator" />
            </button>
          </Tooltip>

          {/* Calendar tooltip */}
          <Tooltip
            title="Calender"
            slotProps={{
              tooltip: {
                sx: {
                  backgroundColor: "black",
                },
              },
            }}
          >
            <button
              onClick={handlecalenderClickOpen}
              className="cursor-pointer"
            >
              <img src={calendar} alt="Calendar" />
            </button>
          </Tooltip>

          <button disabled>
            <img src={message} alt="Messages" />
          </button>

          {/* User profile tooltip */}
          <Tooltip
            title={
              <div>
                <h4 className="text-black font-euclid">Dylan Frank</h4>
                <p className="text-[#7e7e7e] font-euclid">dylanfran96@gmail.com</p>
              </div>
            }
            placement="bottom-start"
            slotProps={{
              tooltip: {
                sx: {
                  backgroundColor: "#F5F5F5",
                },
              },
            }}
          >
            <button
              onClick={handleClick}
              className="w-10 h-10 font-medium text-black bg-white rounded-full text-[23px]"
            >
              D
            </button>
          </Tooltip>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            sx={{
                  marginTop: "10px",
                  borderRadius: "1em",
                  
                  maxWidth: "500px",
                }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Typography sx={{ p: 1.5, }}>
              <PopoverContent />
            </Typography>
          </Popover>
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex gap-4 text-[#3D3D3D] h-[67px] items-center px-4 lg:px-16 bg-white">
        {/* Nav items - hidden on mobile */}
        <a className="max-lg:hidden flex items-center gap-2 font-semibold text-center text-black bg-[#F5F5F5] p-2 rounded-md">
          <img src={home} alt="Home" />
          Dashboard
        </a>
        <a className="flex items-center gap-2 text-center max-lg:hidden">
          <img src={toolbox} alt="Toolbox" />
          Listings
        </a>
        <a className="flex items-center gap-2 text-center max-lg:hidden">
          <img src={user1} alt="Users" />
          Users
        </a>
        <a className="flex items-center gap-2 text-center max-lg:hidden">
          <img src={article} alt="Articles" />
          Request
        </a>
        <a className="flex items-center gap-2 text-center max-lg:hidden">
          <img src={scroll} alt="Applications" />
          Applications
        </a>

        {/* Search bar */}
        <div className="p-2 rounded-xl bg-[#F5F5F5] flex gap-2 border grow max-w-[320px] ml-auto">
          <img src={search} alt="Search" />
          <input
            id="search"
            className="bg-transparent focus:outline-none"
            placeholder="Search listings, users here..."
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
