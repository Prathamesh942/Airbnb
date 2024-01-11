import React from "react";

function Gallery() {
  return (
    <div className="w-screen grid grid-rows-2 grid-cols-4 row gap-2 ">
      <img
        className=" row-span-2 col-span-2"
        src="https://a0.muscache.com/im/pictures/ed4f4ee5-54f1-4c65-9376-200edf81335c.jpg?im_w=960"
        alt=""
      />
      <img
        className=" row-span-1 col-span-1"
        src="https://a0.muscache.com/im/pictures/99a29820-e12a-4874-9006-aac4e539d8d1.jpg?im_w=480"
        alt=""
      />
      <img
        className=" row-span-1 col-span-1"
        src="https://a0.muscache.com/im/pictures/33f728c4-721f-4ad2-a5ca-e2be308e3a67.jpg?im_w=480"
        alt=""
      />
      <img
        className=" row-span-1 col-span-1"
        src="https://a0.muscache.com/im/pictures/b8183c88-1bbc-4b95-ae58-08948d6ca668.jpg?im_w=480"
        alt=""
      />
      <img
        className=" row-span-1 col-span-1"
        src="https://a0.muscache.com/im/pictures/aec9c667-179c-4789-9f8f-bf977d035897.jpg?im_w=480"
        alt=""
      />
    </div>
  );
}

export default Gallery;
