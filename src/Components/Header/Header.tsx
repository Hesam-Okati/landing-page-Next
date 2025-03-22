import React from "react";
import "./Header.css";
import { FaApple, FaGooglePlay } from "react-icons/fa";

function Header() {
  return (
    <div className="d-flex py-4 container align-items-center justify-content-between">
      <img className="hero-image" src="/assets/images/header-image.jpg" />
      <div>
        <div className="text-center mb-5">
          <p className="text-warning fs-4">
            پلتفرم های موجود در اپلیکیشن های موبایل
          </p>
          <h1 className="text-light fs-1 fw-bold">اپلیکیشن تجاری موبایلی پلتفرم بروفا</h1>
        </div>
        <div className="d-flex justify-content-evenly">
          <button className="fw-bold img-h-mob rounded-5 btn text-white p-2 d-flex align-items-center gap-2">
            دانلود برای اندروید
            <FaGooglePlay className="fs-3 " />
          </button>

          <button className="fw-bold p-2 rounded-5 btn text-white border-white d-flex align-items-center gap-2">
             دانلود برای آیفون   
            <FaApple className="fs-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
