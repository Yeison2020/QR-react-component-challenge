import React from "react";
import qr from "../assets/image-qr-code.png";

const Screen = () => {
  return (
    <div className="main-screen">
      <img src={qr} alt="QR code" className="image-qr" />
      <h5 className="text_bases">
        Improve your front-end skills by building projects
      </h5>
      <h6 className="mb-2">
        {" "}
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </h6>
      <h6 style={{ marginTop: 10 }}>Yeison Casado</h6>
    </div>
  );
};

export default Screen;
