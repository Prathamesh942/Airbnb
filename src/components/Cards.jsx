import React from "react";
import properties from "../data/property";

const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    aria-hidden="true"
    role="presentation"
    focusable="false"
    style={{
      display: "block",
      height: "12px",
      width: "12px",
      fill: "currentcolor",
    }}
  >
    <path
      fillRule="evenodd"
      d="M15.1 1.58L11.97 10.46 2.11 11.73a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
    ></path>
  </svg>
);

function Card({ stay }) {
  return (
    <div className="w-[23.5%]">
      <img
        className=" aspect-square object-cover rounded-xl"
        src="https://a0.muscache.com/im/pictures/miso/Hosting-741726654862114190/original/8bfadc5b-2666-4af6-be1c-a339cc6a34f3.jpeg?im_w=720"
        alt=""
      />
      <span className="card-heading">
        <span className="title">{stay.location}</span>
        <span className="rating">
          <Star />
          {stay.rating}
        </span>
      </span>
      <span className="card-desc">{stay.description}</span>
      <span className="price">{stay.perNight.split(" ")[0]} night</span>
    </div>
  );
}

function Cards() {
  return (
    <div className=" w-screen px-20 py-5 flex flex-wrap gap-[2%] gap-y-12 ">
      {properties.map((stay) => (
        <Card stay={stay} />
      ))}
    </div>
  );
}

export default Cards;
