import React from "react";
import img from "../../assets/logo.png";
export default function Navber({ price }) {
  return (
    <div className="flex justify-between px-10 py-5 items-center">
      <div className="">
        <img className="w-10" src={img} alt="" />
      </div>

      <div className="flex items-center gap-3">
        <p>Home</p>
        <p>Fixture</p>
        <p>Temas</p>
        <p>schedulesd</p>
        <button className="btn bg-yellow-400">{price} Coin </button>
      </div>
    </div>
  );
}
