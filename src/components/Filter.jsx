import React, { useState } from "react";

function vwToPx(vwValue) {
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;
  return (vwValue * viewportWidth) / 100;
}

function Caraousel({ destinations }) {
  const [tpx, setTpx] = useState(0);
  const VwInPx = vwToPx(30);
  const presses = Math.floor((100 * 28) / VwInPx) - 2;
  const lst = destinations.map((destination) => (
    <div style={{ transform: `translate(${tpx * 30}vw)` }}>
      <img src={destination.imageUrl} alt="" />
      <span>{destination.category}</span>
    </div>
  ));
  return (
    <div>
      <button
        onClick={() => {
          console.log(destinations.length);
          if (tpx == 0) {
            return;
          }
          setTpx(tpx + 1);
        }}
      >
        &lt;
      </button>
      <div>{lst}</div>
      <button
        onClick={() => {
          console.log(tpx, presses);
          if (tpx * -1 >= presses) {
            return;
          }
          console.log(tpx);
          setTpx(tpx - 1);
        }}
      >
        &gt;
      </button>
    </div>
  );
}

function Filter() {
  const destinations = [
    {
      category: "National parks",
      imageUrl:
        "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
    },
    {
      category: "Amazing views",
      imageUrl:
        "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
    },
    {
      category: "New",
      imageUrl:
        "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
    },
    {
      category: "Off-the-grid",
      imageUrl:
        "https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg",
    },
    {
      category: "Design",
      imageUrl:
        "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
    },
    {
      category: "Farms",
      imageUrl:
        "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
    },
    {
      category: "Earth homes",
      imageUrl:
        "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
    },
    {
      category: "Historical homes",
      imageUrl:
        "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
    },
    {
      category: "Beachfront",
      imageUrl:
        "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
    },
    {
      category: "Skiing",
      imageUrl:
        "https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg",
    },
    {
      category: "Tiny homes",
      imageUrl:
        "https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg",
    },
    {
      category: "OMG!",
      imageUrl:
        "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
    },
    {
      category: "Lakefront",
      imageUrl:
        "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
    },
    {
      category: "Amazing pools",
      imageUrl:
        "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
    },
    {
      category: "Countryside",
      imageUrl:
        "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
    },
    {
      category: "Top of the world",
      imageUrl:
        "https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg",
    },
    {
      category: "Bed & breakfasts",
      imageUrl:
        "https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg",
    },
    {
      category: "Vineyards",
      imageUrl:
        "https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg",
    },
    {
      category: "Caves",
      imageUrl:
        "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
    },
    {
      category: "Rooms",
      imageUrl:
        "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
    },
    {
      category: "Lake",
      imageUrl:
        "https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg",
    },
    {
      category: "Islands",
      imageUrl:
        "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
    },
    {
      category: "Camping",
      imageUrl:
        "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
    },
    {
      category: "Tropical",
      imageUrl:
        "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
    },
    {
      category: "Cabins",
      imageUrl:
        "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
    },
    {
      category: "Play",
      imageUrl:
        "https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg",
    },
    {
      category: "Iconic cities",
      imageUrl:
        "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
    },
    {
      category: "Treehouses",
      imageUrl:
        "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg",
    },
  ];

  return (
    <div>
      <Caraousel destinations={destinations} />
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          style={{
            display: "block",
            fill: "none",
            height: "16px",
            width: "16px",
            stroke: "currentColor",
            strokeWidth: "3",
            overflow: "visible",
          }}
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path
            fill="none"
            d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"
          ></path>
        </svg>
        Filters
      </button>
    </div>
  );
}

export default Filter;