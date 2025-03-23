import React from "react";
import "./About.css";
import JSAM_PERSION_NUMBER from "../English_num_to_pesion/JSAM-PERSION-NUMBER";


function About() {
  return (
    <div className="About d-flex container gap-4">
      <div className="about-left" dir="rtl">
        <h1 className="fs-2 fw-bold mb-5 lh-sm">
          به احتمال زیاد شما بهترین برنامه را دریافت می کنید
        </h1>

        <p className="fs-6">
          لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به
          مدت 40 سال استاندارد صنعت بوده است.لورم ایپسوم به سادگی ساختار چاپ و
          متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده
          است.
          <br />
          <br />
        <button className="img-h-mob p-2 px-4 text-white fw-bold rounded-pill ab-btn">ادامه مطلب</button>
        </p>

        <img src="/assets/images/About-2.png" className="ab-phn-img" />
      </div>

      <div className="about-right container p-2 w-75">

      <img src="/assets/images/About-1.jpg" />


        <div className="ab-num d-flex justify-content-between mt-3">
          <div className="ab-num-item">
            <h3>
              <JSAM_PERSION_NUMBER>86</JSAM_PERSION_NUMBER>%
            </h3>
            <p>برنامه های امنیتی</p>
          </div>

          <div className="ab-num-item">
            <h3>
              <JSAM_PERSION_NUMBER>99</JSAM_PERSION_NUMBER>%
            </h3>
            <p>اتصال سریعتر</p>
          </div>

          <div className="ab-num-item">
            <h3>
              <JSAM_PERSION_NUMBER>67</JSAM_PERSION_NUMBER>%
            </h3>
            <p>اپلیکیشن سلامت</p>
          </div>

          <div className="ab-num-item">
            <h3>
              <JSAM_PERSION_NUMBER>97</JSAM_PERSION_NUMBER>%
            </h3>
            <p>تبادل اطلاعات </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
