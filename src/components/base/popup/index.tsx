import React, { type JSX } from "react";
import Button from "../button";
import { ArrowDown } from "../../icons/ArrowDown";
import Modal from "../modal";

const Popup: React.FC = (): JSX.Element => {
  return (
    <div>
      <Button
        varient="contained"
        size="medium"
        icon={<ArrowDown />}
        color="info"
      >
        شعبه شهرک غرب
      </Button>
      <Modal title="لطفا شعبه مورد نظر خود را انتخاب کنید">
        <div className="flex flex-col gap-4 p-4">
          <Button varient="text" size="medium" color="info">
            شعبه شهرک غرب
          </Button>
          <Button varient="text" size="medium" color="info">
            شعبه ونک
          </Button>
          <Button varient="text" size="medium" color="info">
            شعبه پاسداران
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Popup;
