import React from "react";
import reviewsdata from "../../data/reviews";

function Clean() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={{
        display: "block",
        height: "24px",
        width: "24px",
        fill: "currentcolor",
      }}
    >
      <path d="M24 0v6h-4.3c.13 1.4.67 2.72 1.52 3.78l.2.22-1.5 1.33a9.05 9.05 0 0 1-2.2-5.08c-.83.38-1.32 1.14-1.38 2.2v4.46l4.14 4.02a5 5 0 0 1 1.5 3.09l.01.25.01.25v8.63a3 3 0 0 1-2.64 2.98l-.18.01-.21.01-12-.13A3 3 0 0 1 4 29.2L4 29.02v-8.3a5 5 0 0 1 1.38-3.45l.19-.18L10 12.9V8.85l-4.01-3.4.02-.7A5 5 0 0 1 10.78 0H11zm-5.03 25.69a8.98 8.98 0 0 1-6.13-2.41l-.23-.23A6.97 6.97 0 0 0 6 21.2v7.82c0 .51.38.93.87 1H7l11.96.13h.13a1 1 0 0 0 .91-.88l.01-.12v-3.52c-.34.04-.69.06-1.03.06zM17.67 2H11a3 3 0 0 0-2.92 2.3l-.04.18-.01.08 3.67 3.1h2.72l.02-.1a4.29 4.29 0 0 1 3.23-3.4zM30 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 0h-2.33v2H22zm8-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM20 20.52a3 3 0 0 0-.77-2l-.14-.15-4.76-4.61v-4.1H12v4.1l-5.06 4.78a3 3 0 0 0-.45.53 9.03 9.03 0 0 1 7.3 2.34l.23.23A6.98 6.98 0 0 0 20 23.6z"></path>
    </svg>
  );
}

function Rating({
  clean,
  accuracy,
  checkin,
  communication,
  location,
  value,
  count,
  overallRating,
}) {
  let avg = Math.trunc(
    (clean + accuracy + checkin + communication + location + value) / 6
  );
  let ratings = [];
  for (let i = 0; i < overallRating.length; i++) {
    ratings.push(
      <li className=" list-none flex gap-2 items-center">
        <span className=" text-xs text-zinc-500">
          {overallRating.length - i}
        </span>
        <div className=" h-1 w-[100%] bg-zinc-300  rounded-full">
          <div
            className={`h-[100%] bg-zinc-800 rounded-full`}
            style={{ width: `${overallRating[i]}%` }}
          ></div>
        </div>
      </li>
    );
  }
  console.log(ratings);
  return (
    <div className=" h-30 pb-10 border-b border-gray-300">
      <ul className=" w-[100%] flex justify-between">
        <li className=" w-[12%] min-w-20">
          <span>Overall rating</span>
          <div>{ratings}</div>
        </li>
        <li className=" border-l py-2 px-5 flex flex-col justify-between">
          <div className="flex flex-col">
            <span>Cleaniness</span>
            <span>4.8</span>
          </div>
          <Clean />
        </li>{" "}
        <li className=" border-l py-2 px-5 flex flex-col justify-between">
          <div className="flex flex-col">
            <span>Cleaniness</span>
            <span>4.8</span>
          </div>
          <Clean />
        </li>
        <li className=" border-l py-2 px-5 flex flex-col justify-between">
          <div className="flex flex-col">
            <span>Cleaniness</span>
            <span>4.8</span>
          </div>
          <Clean />
        </li>{" "}
        <li className=" border-l py-2 px-5 flex flex-col justify-between">
          <div className="flex flex-col">
            <span>Cleaniness</span>
            <span>4.8</span>
          </div>
          <Clean />
        </li>{" "}
        <li className=" border-l py-2 px-5 flex flex-col justify-between">
          <div className="flex flex-col">
            <span>Cleaniness</span>
            <span>4.8</span>
          </div>
          <Clean />
        </li>{" "}
        <li className=" border-l py-2 px-5 flex flex-col justify-between">
          <div className="flex flex-col">
            <span>Cleaniness</span>
            <span>4.8</span>
          </div>
          <Clean />
        </li>
      </ul>
    </div>
  );
}

function Comment() {
  const comments = reviewsdata.map((cmt) => (
    <div className=" w-[50%] min-w-[50%] flex flex-col gap-2 pr-10 my-5">
      <span className=" font-semibold">{cmt.name}</span>
      <span className=" text-gray-600">{cmt.location}</span>
      <div>
        <span>{cmt.rating}</span>
        <span>{cmt.date}</span>
      </div>
      <p>{cmt.description}</p>
    </div>
  ));
  return <div className="flex flex-wrap justify-between">{comments}</div>;
}

function Reviews() {
  return (
    <div className=" w-[100%] mt-10">
      <Rating
        clean={4.2}
        accuracy={3}
        checkin={5}
        communication={4}
        location={4}
        value={4.7}
        count={56}
        overallRating={[75, 20, 5, 0, 0]}
      />
      <Comment />
    </div>
  );
}

export default Reviews;
