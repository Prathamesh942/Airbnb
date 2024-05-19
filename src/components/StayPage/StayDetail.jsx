import React from "react";

function StayDetail({subheading, guests, bedrooms, beds, bathrooms, host,exp,description,offer}) {
  return (
    <div className="w-[100%]">
      <div className=" py-7 border-b border-gray-300">
        <span className=" text-2xl font-medium">
          {subheading}
        </span>
        <ul className="flex gap-2">
          <li>{guests} guests</li>
          <li>{bedrooms} bedrooms</li>
          <li>{beds} beds</li>
          <li>{bathrooms} bathrooms</li>
        </ul>
      </div>
      <div className=" py-7 border-b border-gray-300">
        <img src="" alt="" />
        <span className=" font-medium">
          Hosted by {host} <br />{" "}
          <span className=" font-normal text-gray-400">{exp} years of hosting</span>
        </span>
      </div>
      <div className=" py-7 border-b border-gray-300">
        <span>
          {description}
        </span>
      </div>
      <div className=" py-7 border-b border-gray-300 ">
        <span className=" text-2xl font-medium">What this place offers</span>
        <div className="flex gap-5 mt-7">
          <ul className=" flex flex-col gap-2">
            {offer.map((of)=>{
              return <li>{of}</li>})}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StayDetail;
