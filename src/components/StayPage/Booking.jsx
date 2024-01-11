import React from "react";

function Booking() {
  return (
    <div className="w-[80%] bg-white p-6 flex flex-col gap-4 rounded-xl shadow-xl border border-gray-400 sticky top-24 bottom-0">
      <span>
        <span className=" font-semibold text-2xl">₹20,000</span> night
      </span>
      <div className=" rounded-xl border border-slate-400 text-[14px]">
        <div className="flex justify-between">
          <div className="flex flex-col flex-1 rounded-tl-xl border border-slate-400 p-2">
            <span>CHECK-IN</span>
            <span>1/8/2024</span>
          </div>
          <div className="flex flex-col flex-1 rounded-tr-xl border border-slate-400 p-2">
            <span>CHECKOUT</span>
            <span>1/13/2024</span>
          </div>
        </div>
        <div className="p-2">
          <span>Guest</span>
          <label htmlFor="">Guests</label>
          <select name="" id=""></select>
        </div>
      </div>
      <button className="w-[100%] bg-rose-600 text-white rounded-lg py-3 font-medium">
        Reserve
      </button>
      <span className=" text-gray-600 text-center">
        You won't be charged yet
      </span>
      <div className="text-gray-600">
        <ul className="flex flex-col gap-4">
          <li className="flex justify-between">
            <span>₹20,000 x 5 nights</span>
            <span>₹1,00,000</span>
          </li>
          <li className="flex justify-between">
            <span>Cleaning fee</span>
            <span>₹1,500</span>
          </li>
          <li className="flex justify-between">
            <span>Airbnb service fee</span>
            <span>₹14,329</span>
          </li>
        </ul>
      </div>
      <ul className="flex justify-between font-semibold">
        <span>Total before taxes</span>
        <span>₹1,15,829</span>
      </ul>
    </div>
  );
}

export default Booking;
