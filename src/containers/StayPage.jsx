import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Home/Header";
import { Navbar } from "../components/Home/Header";
import Gallery from "../components/StayPage/Gallery";
import StayDetail from "../components/StayPage/StayDetail"; // Assuming StayDetail is a component you want to import
import Booking from "../components/StayPage/Booking";
import Calendar from "../components/StayPage/Calendar";
import Reviews from "../components/StayPage/Reviews";
import Footer from "../components/Home/Footer";
import Map from "../components/StayPage/Map";
import Host from "../components/StayPage/Host";
import { propertiess } from "../data/property";

function StayPage() {
  const { id } = useParams();
  const [property, setProperty] = useState();
  const [loading, setLoading] =  useState(true);

  useEffect(() => {
    const property = propertiess.filter((p)=>{return p.id==id});
    setProperty(property[0]);
    setLoading(false);
  }, [id]);

  console.log(property);

  if(loading){
    return <>Loading</>
  }

  return (
    <div>
      <Navbar scrolled={0} padding={48} />
      <div className=" px-48 flex justify-center py-7">
        <div className="flex justify-between mt-20 w-screen">
          <span className=" text-3xl font-medium">
            {property.heading}
          </span>
          <div>
            <button className=" font-medium">Share</button>
            <button className=" font-medium">Save</button>
          </div>
        </div>
      </div>

      <div className=" px-48 flex justify-center">
        <Gallery images={property.images} />
      </div>
      <div className=" px-48 flex py-10">
        <div className="w-[60%] border-b border-gray-300">
        {/* subheading, guests, bedrooms, beds, bathrooms, host,exp,description,offer */}
          <StayDetail subheading={property.subheading} guests={property.guests} bedrooms={property.bedrooms} beds={property.beds} bathrooms={property.bathrooms} host={property.host} exp={property.exp} description={property.description} offer={property.offer}/>
          <Calendar />
        </div>
        <div className="w-[40%] flex justify-end items-start border-b-2 border-gray-300">
          <Booking />
        </div>
      </div>
      <div className=" px-48 flex flex-col justify-center">
        <Reviews rating={property.rating} reviews={property.reviews} />
        <Host />
      </div>
      <Footer />
    </div>
  );
}

export default StayPage;
