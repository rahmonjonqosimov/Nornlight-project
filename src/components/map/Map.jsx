import React from "react";

const Map = () => {
  return (
    <div
      className=""
      style={{
        maxWidth: "1800px",
        margin: "0 auto",
        padding: "0 16px",
      }}
    >
      <div style={{ width: "100%" }}>
        <iframe
          width="100%"
          height="400"
          className="map"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Najot%20talim+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps devices</a>
        </iframe>
      </div>
    </div>
  );
};

export default Map;
