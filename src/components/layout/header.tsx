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
                varient="text"
                color="primary"
                onClick={() => {
                  console.log("Hello");
                }}
              >
                سفارش اینترنتی
              </Button>
              <Button
                varient="text"
                color="primary"
                onClick={() => {
                  console.log("Hello");
                }}
              >
                قوانین سایت
              </Button>
            </div>
            <Button
              varient="contained"
              color="primary"
              onClick={() => {
                console.log("Hello");
              }}
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
