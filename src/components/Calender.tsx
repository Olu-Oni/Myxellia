import arrow from "../assets/Arrow-left-stick.svg";

interface SliderProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SlideCalender: React.FC<SliderProps> = ({ open, setOpen }) => {
  // Calendar data - simplified array of days
  const calendarDays = [
    29, 30, 31, "NOV 1", 2, 3, 4,
    5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30,31, "DEC 1", 2,
    3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15
  ];

  // Current selected day
  const currentDay = 16;

  // Split into weeks
  const calendarWeeks = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    calendarWeeks.push(calendarDays.slice(i, i + 7));
  }

  const dayHeaders = ['SUN', 'MON', 'TUE', 'WED', 'THURS', 'FRI', 'SAT'];

  const getCellClassName = (day: number | string) => {
    const baseClasses = "h-[16px] w-fit text-[#969696]  text-[10px] cursor-pointer transition-colors duration-100 ";
    
    // Check if it's the selected day
    if (day === currentDay) {
      return `${baseClasses} bg-blue-600 px-2 text-center !text-white rounded-full font-medium`;
    }
    
    // Check if it's current month (1-30 for November)
    if (typeof day === 'number' && day >= 1 && day <= 30) {
      return `${baseClasses} text-white hover:bg-gray-700 rounded`;
    }
    
    // Previous/next month days (including "DEC 1")
    return `${baseClasses} `;
  };

  return (
    <>
      <aside
        className={`absolute top-[84px] right-0 w-[400px] bg-[#171717]  text-white transform transition-transform duration-300 ease-out z-40 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-[50px] flex justify-between items-center px-6">
          <button onClick={() => setOpen(false)} className="flex items-center gap-2">
            <img src={arrow} alt="back button" />
            Calendar
          </button>
          <button onClick={() => setOpen(false)} className="text-lg hover:text-gray-300">
            ×
          </button>
        </div>
        
        <div className="min-h-screen p-6 bg-black">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <button className="p-2 text-gray-400 hover:text-white">
              ‹
            </button>
            <h2 className="text-lg font-medium text-white">
              November 2023
            </h2>
            <button className="p-2 text-gray-400 hover:text-white">
              ›
            </button>
          </div>

          {/* Calendar Table */}
          <table className="w-full text-[#969696] border-t border-r border-l !rounded-2xl border-[#85858541]">
            {/* Days of week header */}
            <thead >
              <tr>
                {dayHeaders.map((day) => (
                  <th key={day} className={`p-1 text-[10px] font-medium text-left  border-b border-[#85858541] border-l outline-none ${day==='SUN'?"rounded-2xl ":""}`}>
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            
            {/* Calendar body */}
            <tbody>
              {calendarWeeks.map((week, weekIndex) => (
                <tr key={weekIndex}>
                  {week.map((day, dayIndex) => (
                    <td key={`${weekIndex}-${dayIndex}`} className={`text-left  text-[10px] w-[50px] h-[91px] border-b border-l border-[#85858541] p-1.5 content-start`}>
                      <div className={getCellClassName(day)}>
                        {day}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </aside>

      {/* Overlay */}
      {/* {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 transition-opacity duration-300 ease-in-out bg-black bg-opacity-50"
        />
      )} */}
    </>
  );
};

export default SlideCalender;