import React from "react";
import Button from "../base/button";
import Logo from "../base/logo";
import Container from "../base/container";

const Header: React.FC = () => {
  return (
    <header>
      <Container>
        <div className="flex justify-between items-center py-2">
          <div>
            <Logo />
          </div>
          <div className="[&>Button]:mr-2 flex items-center">
            <div className="hidden md:flex">
              <Button
                variant="text"
                color="primary"
                onClick={() => console.log("Hiii")}
              >
                سفارش اینترنتی
              </Button>
              <Button
                variant="text"
                color="primary"
                onClick={() => console.log("Hiii")}
              >
                قوانین سایت
              </Button>
            </div>
            <Button
                variant="contained"
                color="primary"
                onClick={() => console.log("Hiii")}
              >
                ورود
              </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
