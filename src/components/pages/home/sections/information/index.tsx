import React, { useState, type JSX } from "react";
import Button from "../../../../base/button";
import { ArrowDown } from "../../../../icons/ArrowDown";
import NavigationModal from "./modals/navigationModal";
import BranchModal from "./modals/branchModal";
import SvgHandBag from "../../../../icons/HandBag";
import SvgMotorCycle from "../../../../icons/MotorCycle";

const Information: React.FC = (): JSX.Element => {
  const [isBranchModalShow, setIsBranchModalShow] = useState<boolean>(false);
  const [isNavigationModalShow, setIsNavigationModalShow] =
    useState<boolean>(false);

  const closeModals = () => {
    setIsBranchModalShow(false);
    setIsNavigationModalShow(false);
  };

  return (
    <div className="flex justify-between py-12">
      <div className="flex gap-2 items-end">
        <div>
          <Button
            varient="contained"
            size="small"
            icon={<ArrowDown />}
            color="info"
            onClick={() => setIsBranchModalShow(true)}
          >
            شعبه شهرک غرب
          </Button>
        </div>
        <div>
          <Button
            varient="contained"
            size="small"
            icon={<ArrowDown />}
            color="info"
            onClick={() => setIsNavigationModalShow(true)}
          >
            شعبه شهرک غرب
          </Button>
        </div>
      </div>
      <div className="flex py-4 px-16 justify-between border border-gray-200 rounded-2xl">
        <div className="flex items-center gap-2">
          <SvgHandBag className="text-4xl" />
          <div>
            <h3>تا 20 دقیقه</h3>
            <h4 className="text-gray-500 font-light text-sm">تحویل حضوری</h4>
          </div>
        </div>
        <div className="w-[0.5px] h-full bg-gray-400 mx-4"></div>
        <div className="flex items-center gap-2">
          <SvgMotorCycle className="text-4xl" />
          <div>
            <h3>تا 120 دقیقه</h3>
            <h4 className="text-gray-500 font-light text-sm">ارسال با پیک</h4>
          </div>
        </div>
      </div>
      {isBranchModalShow && <BranchModal onClick={closeModals} />}
      {isNavigationModalShow && <NavigationModal onClick={closeModals} />}
    </div>
  );
};

export default Information;
