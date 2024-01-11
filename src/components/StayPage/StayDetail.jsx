import React from "react";

function StayDetail() {
  return (
    <div className="w-[100%]">
      <div className=" py-7 border-b border-gray-300">
        <span className=" text-2xl font-medium">
          Farm stay in Mulshi, India
        </span>
        <ul className="flex gap-2">
          <li>15 guests</li>
          <li>2 bedrooms</li>
          <li>15 beds</li>
          <li>2 bathrooms</li>
        </ul>
      </div>
      <div className=" py-7 border-b border-gray-300">
        <img src="" alt="" />
        <span className=" font-medium">
          Hosted by Prathamesh <br />{" "}
          <span className=" font-normal text-gray-400">3 years of hosting</span>
        </span>
      </div>
      <div className=" py-7 border-b border-gray-300">
        <span>
          Just 60 Km from Pune in arms of nature enjoy nature to its best, in
          mornings you can hear birds chirping with a sip of tea in the gazebo
          with a spectacular view of the Mulshi backwaters .Kudalika Vally just
          3 km away.BBQ available, campfire on demand.
        </span>
      </div>
      <div className=" py-7 border-b border-gray-300 ">
        <span className=" text-2xl font-medium">What this place offers</span>
        <div className="flex gap-5 mt-7">
          <ul className=" flex flex-col gap-2">
            <li>Lake view</li>
            <li>Mountain view</li>
            <li>Waterfront</li>
            <li>Kitchen</li>
            <li>Wifi</li>
          </ul>
          <ul className=" flex flex-col gap-2">
            <li> Carbon monoxide alarm</li>
            <li> Smoke alarm</li>
            <li>Free parking on premises</li>
            <li>Pets allowed</li>
            <li>Private patio or balcony</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StayDetail;
