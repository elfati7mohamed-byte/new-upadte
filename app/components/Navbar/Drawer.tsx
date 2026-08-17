// // 
// "use client";
// import React, { ReactNode } from "react";
// import { XMarkIcon } from "@heroicons/react/24/outline";

// interface DrawerProps {
//   children: ReactNode;
//   isOpen: boolean;
//   setIsOpen: (isOpen: boolean) => void;
// }

// const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
//   return (
//     <div
//       className={`fixed inset-0 z-[99999] transition-all duration-300 ${
//         isOpen
//           ? "opacity-100 pointer-events-auto visible"
//           : "opacity-0 pointer-events-none invisible"
//       }`}
//     >
//       {/* خلفية معتمة عند فتح القائمة */}
//       <div
//         className="fixed inset-0 bg-black/70 backdrop-blur-sm"
//         onClick={() => setIsOpen(false)}
//       />

//       {/* حاوية القائمة الجانبية */}
//       <aside
//         className={`fixed top-0 left-0 bottom-0 h-full w-[290px] sm:w-[320px] bg-black text-white shadow-2xl z-[100000] flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* الهيدر العلوي للقائمة */}
//         <div className="flex items-center justify-between p-5 border-b border-gray-800 bg-black shrink-0">
//           <span className="text-2xl font-black text-white">
//             Budhok<span className="text-indigo-500">Edu</span>
//           </span>
//           <button
//             onClick={() => setIsOpen(false)}
//             className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
//           >
//             <XMarkIcon className="h-6 w-6" />
//           </button>
//         </div>

//         {/* محتوى الروابط والبحث */}
//         <div className="flex-1 overflow-y-auto bg-black p-4">
//           {children}
//         </div>

//         {/* زر الإغلاق السفلي */}
//         <div className="p-4 border-t border-gray-800 bg-black shrink-0">
//           <button
//             onClick={() => setIsOpen(false)}
//             className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 active:scale-95 transition-all"
//           >
//             Close Menu
//           </button>
//         </div>
//       </aside>
//     </div>
//   );
// };

// export default Drawer;


"use client";
import React, { ReactNode } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
  return (
    <div
      className={`fixed inset-0 z-[99999] transition-all duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto visible"
          : "opacity-0 pointer-events-none invisible"
      }`}
    >
      {/* Dark Overlay Behind Drawer */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Main Drawer Container */}
      <aside
        className={`fixed top-0 left-0 bottom-0 h-full w-[300px] max-w-[85vw] bg-black text-white shadow-2xl z-[100000] flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-800 bg-black shrink-0">
          <span className="text-2xl font-black text-white">
            Budhok<span className="text-indigo-500">Edu</span>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Scrollable Navigation Area */}
        <div className="flex-1 overflow-y-auto bg-black p-4">
          {children}
        </div>

        {/* Footer Button */}
        <div className="p-4 border-t border-gray-800 bg-black shrink-0">
          {/* <button
            onClick={() => setIsOpen(false)}
            className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 active:scale-95 transition-all"
          >
            Close Menu
          </button> */}
        </div>
      </aside>
    </div>
  );
};

export default Drawer;