import React from 'react'
import background from "../../assets/bg-shadow.png";

import bgImg from '../../assets/banner-main.png'
export default function HeroContainer({ handelAddMoneyBtn }) {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="flex justify-center bg-no-repeat rounded-xl p-10 bg-cover object-cover w-11/12 mx-auto bg-black"
    >
      <div className="flex flex-col justify-center items-center text-white">
        <div>
          <img src={bgImg} alt="" />
        </div>
        <p className="mt-3 text-2xl font-bold">
          Assemble Your Ultimate Dream 11 Cricket Team
        </p>
        <p className="mt-2 text-xl font-semibold">
          Beyond Boundaries Beyond Limits
        </p>
        <button onClick={() => handelAddMoneyBtn(500000)} className="btn bg-yellow-400">
          {" "}
          Claim Free Credit
        </button>
      </div>
    </div>
  );
}
