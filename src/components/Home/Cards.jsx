import React, { useEffect, useState } from "react";
import { propertiess } from "../../data/property";
import { Link, useNavigate } from "react-router-dom";

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

function Card({ stay, width = 23.5, images }) {
  console.log(images);
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  return (
    <div className={`w-[${width}%] flex flex-col`}>
        <div className=" flex  items-center" onClick={()=>{navigate(`/stay/${stay.id}`)}}>
          <button className=" absolute " onClick={(e)=>{e.stopPropagation(); current==0?setCurrent(4):setCurrent(current-1)}}>
            <img className=" w-6  rounded-full" src="https://www.svgrepo.com/show/7574/round-left-button.svg" alt="" />
          </button>
          <img
            className=" aspect-square object-cover rounded-xl"
            src={stay.images[current]}
            alt=""
          />
          <button className=" absolute right-0" onClick={(e)=>{e.stopPropagation(); setCurrent((current+1)%5)}}>
            <img className=" w-6 rounded-full scale-x-[-1]" src="https://www.svgrepo.com/show/7574/round-left-button.svg" alt="" />
          </button>
        </div>
        <span className="flex justify-between">
          <span className="title">{stay.location}</span>
          <span className="rating flex items-center gap-1">
            <Star />
            {stay.rating.reduce((accumulator, currentValue, index, array) => {
  accumulator += currentValue;
  // If it's the last element, divide by the length of the array to get the average
  if (index === array.length - 1) {
    return accumulator / array.length;
  }
  return accumulator;
}, 0)/5}
          </span>
        </span>
        <span className="card-desc">
          {/* {stay.description.split(" ")[0]} Kilometers away <br></br> */}
          {stay.date}
        </span>
        <span className="price">{stay.perNight.split(" ")[0]} night</span>
    </div>
  );
}

const guestLiked = (Card) => {
  return (props) => {
    return (
      <div className="w-[23.5%] flex flex-col relative ">
        {props.stay.guestFavorite && (
          <span className="absolute bg-white p-1 rounded-2xl px-2 top-[3%] left-[3%]">
            Guest favourite
          </span>
        )}
        <Card stay={props.stay} width={100} />
      </div>
    );
  };
};

const LikedCard = guestLiked(Card);

function Cards({query}) {
  const [filtered, setFiltered] = useState(propertiess);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setFiltered(propertiess.filter((prp)=>{return prp.location.includes(query)}))
    setLoading(false);
  },[query])
  if(loading){
    return <span>Loading</span>
  }
  return (
    <div className=" w-[100%] px-20 py-5 flex flex-wrap gap-[2%] gap-y-12">
      {filtered.map((stay) =>
        stay.guestFavorite ? <LikedCard stay={stay} images={stay.images} /> : <Card stay={stay}/>
      )}
    </div>
  );
}

export default Cards;
