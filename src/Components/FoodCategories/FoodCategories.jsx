// FoodCategories.js

import React from "react";
import "./FoodCategories.css";
import G1 from "./images/Group 11767m3.png";
import G2 from "./images/Group 11768m4.png";
import G3 from "./images/Group 11769m5.png";
import G4 from "./images/Group 11770m6.png";
import G5 from "./images/Group 11771m7.png";
import G6 from "./images/Group 11772m8.png";
import B1 from "./images/image 841g1.png";
import bg from "./images/image 21 (1).png";

const FoodCategories = () => {
  return (
    <div
    className="start"
    style={{
      // padding: "10%",
      paddingTop:30,
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(28, 29, 37, 0.9)), url(${bg})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
    >
      <div
        style={{
          border: "10px",
          color: "aliceblue",
          width: "60%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{display:"flex", justifyContent:"left", flexDirection:"column"}}>
          <h1 style={{ color: "aliceblue", fontSize: "45px", marginLeft:"-190px"}}>
            Services We Provide
          </h1>
          <h2
            style={{
              color: "#FFA900",
              fontSize: "45px",
              margin: "-30px",
              paddingLeft:120,
            }}
          >
            Get Your Kitchen into Your Pocket
          </h2>
        </div>

        <div>
          <button
            className="more"
          >
            View more
          </button>
        </div>
      </div>

      <div
  style={{
    width: "100%",
    marginTop: "70px",
    display: "flex",
    justifyContent: "center",

  }}
>
  <div className="frist" style={{ width: "auto", margin: '0 5px', paddingRight:'30px'}}>
    <img src={G1} alt="" style={{ height: "130px", width: "110%" }} />
  </div>
  <div className="frist" style={{ width: "auto", margin: '0 5px',  marginRight:'-30px' }}>
    <img src={G2} alt="" style={{ height: "auto", width: "80%" }} />
  </div>
  <div className="frist" style={{ width: "auto", margin: '0 5px' }}>
    <img src={G3} alt="" style={{ height: "auto", width: "80%" }} />
  </div>
  <div className="frist" style={{ width: "auto", margin: '0 5px' }}>
    <img src={G4} alt="" style={{ height: "auto", width: "80%" }} />
  </div>
  <div className="frist" style={{ width: "auto", margin: '0 5px' }}>
    <img src={G5} alt="" style={{ height: "auto", width: "80%" }} />
  </div>
  <div className="frist" style={{ width: "auto", margin: '0 5px' }}>
    <img src={G6} alt="" style={{ height: "auto", width: "80%" }} />
  </div>
</div>

<div className="categories" style={{ width: "80%", marginTop: '200px' }}>
  <h1
    style={{
      color: "#FFD600",
      fontSize: "50px",
      textAlign: "center",
    }}
  >
    Select Your Food Categories Which Describes You The Best
  </h1>

  <div
  style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: "10px",
  }}
>
  {/* First Row */}
  <div className="mark" style={{ flexBasis: "calc(20% - 20px)", marginBottom: "20px", display: "flex", flexDirection: "column", alignItems: "center", border: "0.5px solid grey", borderRadius: "10px" }}>
    <img src={B1} alt="" style={{ height: "220px", width: "200px", objectFit: "cover", borderRadius: "10px 10px 0 0" }} />
    <p style={{ textAlign: "center", color: "white", fontSize: "30px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", margin: "0", padding: "10px" }}>Rajasthani</p>
  </div>
  <div className="mark" style={{ flexBasis: "calc(20% - 20px)", marginBottom: "20px", display: "flex", flexDirection: "column", alignItems: "center", border: "0.5px solid grey", borderRadius: "10px" }}>
    <img src={B1} alt="" style={{ height: "220px", width: "200px", objectFit: "cover", borderRadius: "10px 10px 0 0" }} />
    <p style={{ textAlign: "center", color: "white", fontSize: "30px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", margin: "0", padding: "10px" }}>Marathi</p>
  </div>
  <div className="mark" style={{ flexBasis: "calc(20% - 20px)", marginBottom: "20px", display: "flex", flexDirection: "column", alignItems: "center", border: "0.5px solid grey", borderRadius: "10px" }}>
    <img src={B1} alt="" style={{ height: "220px", width: "200px", objectFit: "cover", borderRadius: "10px 10px 0 0" }} />
    <p style={{ textAlign: "center", color: "white", fontSize: "30px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", margin: "0", padding: "10px" }}>Marwadi</p>
  </div>
  <div className="mark" style={{ flexBasis: "calc(20% - 20px)", marginBottom: "20px", display: "flex", flexDirection: "column", alignItems: "center", border: "0.5px solid grey", borderRadius: "10px" }}>
    <img src={B1} alt="" style={{ height: "220px", width: "200px", objectFit: "cover", borderRadius: "10px 10px 0 0" }} />
    <p style={{ textAlign: "center", color: "white", fontSize: "30px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", margin: "0", padding: "10px" }}>Gujarati</p>
  </div>
  <div className="mark" style={{ flexBasis: "calc(20% - 20px)", marginBottom: "20px", display: "flex", flexDirection: "column", alignItems: "center", border: "0.5px solid grey", borderRadius: "10px" }}>
    <img src={B1} alt="" style={{ height: "220px", width: "200px", objectFit: "cover", borderRadius: "10px 10px 0 0" }} />
    <p style={{ textAlign: "center", color: "white", fontSize: "30px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", margin: "0", padding: "10px" }}>Bengali</p>
  </div>
  
  {/* Repeat the above div structure for other categories in the first row */}

  {/* Second Row */}
  <div className="mark" style={{ flexBasis: "calc(20% - 20px)", marginBottom: "20px", display: "flex", flexDirection: "column", alignItems: "center", border: "0.5px solid grey", borderRadius: "10px" }}>
    <img src={B1} alt="" style={{ height: "220px", width: "200px", objectFit: "cover", borderRadius: "10px 10px 0 0" }} />
    <p style={{ textAlign: "center", color: "white", fontSize: "30px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", margin: "0", padding: "10px" }}>South Indian</p>
  </div>
  <div className="mark" style={{ flexBasis: "calc(20% - 20px)", marginBottom: "20px", display: "flex", flexDirection: "column", alignItems: "center", border: "0.5px solid grey", borderRadius: "10px" }}>
    <img src={B1} alt="" style={{ height: "220px", width: "200px", objectFit: "cover", borderRadius: "10px 10px 0 0" }} />
    <p style={{ textAlign: "center", color: "white", fontSize: "30px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", margin: "0", padding: "10px" }}>Mexican</p>
  </div>
  <div className="mark" style={{ flexBasis: "calc(20% - 20px)", marginBottom: "20px", display: "flex", flexDirection: "column", alignItems: "center", border: "0.5px solid grey", borderRadius: "10px" }}>
    <img src={B1} alt="" style={{ height: "220px", width: "200px", objectFit: "cover", borderRadius: "10px 10px 0 0" }} />
    <p style={{ textAlign: "center", color: "white", fontSize: "30px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", margin: "0", padding: "10px" }}>Ittalian</p>
  </div>
  <div className="mark" style={{ flexBasis: "calc(20% - 20px)", marginBottom: "20px", display: "flex", flexDirection: "column", alignItems: "center", border: "0.5px solid grey", borderRadius: "10px" }}>
    <img src={B1} alt="" style={{ height: "220px", width: "200px", objectFit: "cover", borderRadius: "10px 10px 0 0" }} />
    <p style={{ textAlign: "center", color: "white", fontSize: "30px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", margin: "0", padding: "10px" }}>Pahadi</p>
  </div>
  <div className="mark" style={{ flexBasis: "calc(20% - 20px)", marginBottom: "20px", display: "flex", flexDirection: "column", alignItems: "center", border: "0.5px solid grey", borderRadius: "10px" }}>
    <img src={B1} alt="" style={{ height: "220px", width: "200px", objectFit: "cover", borderRadius: "10px 10px 0 0" }} />
    <p style={{ textAlign: "center", color: "white", fontSize: "30px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", margin: "0", padding: "10px" }}>Junglee</p>
  </div>
  {/* Repeat the above div structure for other categories in the second row */}
</div>
</div>

    </div>
  );
};

export default FoodCategories;