import { useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import CIcon from "@coreui/icons-react";
import Avatar from "react-avatar";
import Icon from "@mui/material/Icon";
import "@fontsource/open-sans"; // Defaults to weight 400
import "@fontsource/open-sans/400.css"; // Specify weight
import "@fontsource/open-sans/400-italic.css"; // Specify weight and style
import Button from "@mui/material/Button";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
function Cover() {
  return (
    <>
      <div className="coverDiv grid grid-rows-2 md:grid-rows-2 p-0 m-0">
        <div>
          <div
            style={{ fontFamily: "Roboto" }}
            className="text-5xl text-emerald-700 font-bold tracking-tighter"
          >
            Shuchi
          </div>

          <div
            style={{ fontFamily: "Open Sans " }}
            className="font text-slate-800 "
          >
            Transforming Waste into wealth
          </div>
        </div>

        <Button
          endIcon={<ArrowCircleRightIcon />}
          variant="text"
          style={{ fontFamily: "Open Sans", color: "#FA4A0C" }}
          className=" text-xl mb-10 font-bold border-2"
        >
          Get Started
        </Button>
      </div>
    </>
  );
}

export default Cover;
