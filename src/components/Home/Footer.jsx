import React from "react";

const Footer = () => {
  return (
    <footer className="w-[100%]">
      <div className="flex px-20 py-10 justify-between border-t mt-8">
        <ul className="flex flex-col gap-2">
          <li>Help Centre</li>
          <li>AirCover</li>
          <li>Anti-discrimination</li>
          <li>Disability support</li>
          <li>Cancellation options</li>
          <li>Report neighbourhood concern</li>
        </ul>

        <ul className="flex flex-col gap-2">
          <li>Airbnb your home</li>
          <li>AirCover for Hosts</li>
          <li>Hosting resources</li>
          <li>Community forum</li>
          <li>Hosting responsibly</li>
        </ul>

        <ul className="flex flex-col gap-2 text-right">
          <li>Newsroom</li>
          <li>New features</li>
          <li>Careers</li>
          <li>Investors</li>
          <li>Airbnb.org emergency stays</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
