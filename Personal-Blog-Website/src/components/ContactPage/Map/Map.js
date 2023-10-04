import React from "react";
import "./Map.css";

export default function Map() {
  return (
    <>
      <div className="main map-main">
        {/* <div className="wrapper"> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13290.589716950304!2d72.98148739999998!3d33.6144513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1694782875796!5m2!1sen!2s"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
            className="google-map"
          ></iframe>
        {/* </div> */}
      </div>
    </>
  );
}
