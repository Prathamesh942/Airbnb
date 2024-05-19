import React from "react";

function Gallery({images}) {
  console.log(images);
  return (
    <div className="w-screen grid grid-rows-2 grid-cols-4 row gap-2 ">
      <img
        className=" row-span-2 col-span-2"
        src={images[0]}
        alt=""
      />
      <img
        className=" row-span-1 col-span-1"
        src={images[1]}
        alt=""
      />
      <img
        className=" row-span-1 col-span-1"
        src={images[2]}
        alt=""
      />
      <img
        className=" row-span-1 col-span-1"
        src={images[3]}
        alt=""
      />
      <img
        className=" row-span-1 col-span-1"
        src={images[4]}
        alt=""
      />
    </div>
  );
}

export default Gallery;
