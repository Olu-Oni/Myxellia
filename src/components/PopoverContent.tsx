import {  LockKeyhole, LogOut, ShieldCheckIcon, UserCheck, Users, } from "lucide-react";

const PopoverContent = () => {
  return (


   
      <div className="w-[330px] pt-1 font-euclid">
        {/* User profile header */}
        <div className="p-4 border-b border-gray-200 bg-[#F5F5F5] rounded-xl">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 bg-teal-700 rounded-full">
              <span className="text-xl font-semibold text-white">D</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Dylan Frank</h2>
              <p className="text-sm text-gray-500">dylan96@mail.com</p>
            </div>
          </div>
        </div>

        {/* Menu options */}
        <div className="pt-2 ">
          {/* Teams */}
          <div className="flex items-center px-2 py-4 space-x-4 border-b cursor-pointer hover:bg-gray-50">
            <Users className="w-5 h-5 fill-black" />
            <span className="text-gray-900 ">Teams</span>
          </div>

          {/* Contact Persons */}
          <div className="flex items-center px-2 py-4 space-x-4 border-b cursor-pointer hover:bg-gray-50">
            <UserCheck className="w-5 h-5 fill-black" />
            <span className="font-medium text-gray-900">Contact Persons</span>
          </div>


          {/* Change password */}
          <div className="flex items-center px-2 py-4 space-x-4 border-b cursor-pointer hover:bg-gray-50">
            <LockKeyhole className="w-5 h-5" />
            <span className="font-medium text-gray-900">Change password</span>
          </div>

          {/* 2-Factor Authentication */}
          <div className="flex items-center px-2 py-4 space-x-4 border-b cursor-pointer hover:bg-gray-50">
            <ShieldCheckIcon className="w-5 h-5 text-white scale-125 fill-black" />
            <span className="font-medium text-gray-900">2 - Factor Authentication</span>
          </div>

        

          {/* Logout */}
          <div className="flex items-center px-2 py-4 space-x-4 cursor-pointer hover:bg-red-50 ">
            <LogOut className="w-5 h-5 text-red-500 rotate-180" />
            <span className="font-medium text-red-500">Logout</span>
          </div>
        </div>
      </div>

  );
}

export default PopoverContent
