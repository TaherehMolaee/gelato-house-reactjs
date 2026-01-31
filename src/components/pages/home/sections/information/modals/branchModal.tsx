import React, { type JSX } from "react";
import Modal from "../../../../../base/modal";
import { Button } from "../../../../../base/button";

type BranchModalProps = {
  onClick?: () => void;
};

const BranchModal: React.FC<BranchModalProps> = ({
  onClick = () => {},
}): JSX.Element => {
  return (
    <Modal title="لطفا شعبه مورد نظر خود را انتخاب کنید" onClose={onClick}>
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
  );
};

export default BranchModal;
