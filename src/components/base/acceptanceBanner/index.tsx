import React, { type JSX } from "react";

const AcceptanceBanner: React.FC = (): JSX.Element => {
  return (
    <div className="bg-primary-600 text-white text-center py-2 flex justify-center items-center">
      <div className="flex justify-center items-center relative ml-2 animate-pulse">
        <div className="w-5 h-5 bg-green-400 opacity-15 flex justify-center items-center rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full absolute z-10" />
      </div>
      <h6 className="text-sm font-bold">سفارش می‌پذیریم</h6>
    </div>
  );
};

export default AcceptanceBanner;


