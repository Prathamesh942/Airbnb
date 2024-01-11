import React from "react";
import Header from "../components/Home/Header";
import { Navbar } from "../components/Home/Header";
import Gallery from "../components/StayPage/Gallery";
import StayDetail from "../components/StayPage/StayDetail"; // Assuming StayDetail is a component you want to import
import Booking from "../components/StayPage/Booking";
import Calendar from "../components/StayPage/Calendar";
import Reviews from "../components/StayPage/Reviews";
import Map from "../components/StayPage/Map";
import Host from "../components/StayPage/Host";

function StayPage() {
  return (
    <div>
      <Navbar scrolled={0} padding={48} />
      <div className=" px-48 flex justify-center py-7">
        <div className="flex justify-between mt-20 w-screen">
          <span className=" text-3xl font-medium">
            Forest View Master Cottage
          </span>
          <div>
            <button className=" font-medium">Share</button>
            <button className=" font-medium">Save</button>
          </div>
        </div>
      </div>

      <div className=" px-48 flex justify-center">
        <Gallery />
      </div>
      <div className=" px-48 flex">
        <div className="w-[60%]">
          <StayDetail />
          <Calendar />
        </div>
        <div className="w-[40%] flex justify-center items-start">
          <Booking />
        </div>
      </div>
      <div className=" px-48 flex justify-center">
        <Reviews />
        <Map />
        <Host />
      </div>
    </div>
  );
}

export default StayPage;
