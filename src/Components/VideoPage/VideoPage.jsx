import React from "react";
import "./VideoPage.css";
import b1 from "./images/image 772.png";
import ad from "./images/add.png";
import small from "./images/Group 11402.png"

const VideoPage = () => {
  return (
    <div className="main">
      {/* <div className="navbar">
        <div className="logo">
          <img src="logo.png" alt="logo" className="logo-new" />
        </div>
        <div className="searchbar">
          <input
            type="text"
            className="search-input"
            placeholder="Enter name of Restaurant, Chef, Dish, or any Street food...."
          />
          <i className="ri-search-line"></i>
        </div>
      </div> */}
      <div className="content">
        <div className="left-content">
          <div className="vid-category">
            <a href="#">All</a>
            <a href="#">North Indian</a>
            <a href="#">South Indian</a>
            <a href="#">Mexicans</a>
            <a href="#">Champaran Meat</a>
            <a href="#">Chinese</a>
            <a href="#">Italian</a>
          </div>
          <div className="videos">
            {/* Repeat the following div for each row */}
            <div className="vid-part1">
              <div className="video-item">
                <div className="video-card">
                  <img
                    className="video-thumbnail"
                    src={b1}
                    alt="Video Thumbnail"
                  />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img
                      className="small-image"
                      src={small}
                      alt="Small Image"
                    />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img
                    className="video-thumbnail"
                    src={b1}
                    alt="Video Thumbnail"
                  />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img
                      className="small-image"
                      src={small}
                      alt="Small Image"
                    />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img
                    className="video-thumbnail"
                    src={b1}
                    alt="Video Thumbnail"
                  />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img
                      className="small-image"
                      src={small}
                      alt="Small Image"
                    />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img
                    className="video-thumbnail"
                    src={b1}
                    alt="Video Thumbnail"
                  />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img
                      className="small-image"
                      src={small}
                      alt="Small Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="vid-part1">
              <div className="video-item">
                <div className="video-card">
                  <img
                    className="video-thumbnail"
                    src={b1}
                    alt="Video Thumbnail"
                  />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img
                      className="small-image"
                      src={small}
                      alt="Small Image"
                    />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img
                    className="video-thumbnail"
                    src={b1}
                    alt="Video Thumbnail"
                  />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img
                      className="small-image"
                      src={small}
                      alt="Small Image"
                    />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img
                    className="video-thumbnail"
                    src={b1}
                    alt="Video Thumbnail"
                  />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img
                      className="small-image"
                      src={small}
                      alt="Small Image"
                    />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img
                    className="video-thumbnail"
                    src={b1}
                    alt="Video Thumbnail"
                  />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img
                      className="small-image"
                      src={small}
                      alt="Small Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="vid-part1">
              <div className="video-item">
                <div className="video-card">
                  <img
                    className="video-thumbnail"
                    src={b1}
                    alt="Video Thumbnail"
                  />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img
                      className="small-image"
                      src={small}
                      alt="Small Image"
                    />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img
                    className="video-thumbnail"
                    src={b1}
                    alt="Video Thumbnail"
                  />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img
                      className="small-image"
                      src={small}
                      alt="Small Image"
                    />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img
                    className="video-thumbnail"
                    src={b1}
                    alt="Video Thumbnail"
                  />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img
                      className="small-image"
                      src={small}
                      alt="Small Image"
                    />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img
                    className="video-thumbnail"
                    src={b1}
                    alt="Video Thumbnail"
                  />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img
                      className="small-image"
                      src={small}
                      alt="Small Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="vid-part1">
              <div className="video-item">
                <div className="video-card">
                  <img
                    className="video-thumbnail"
                    src={b1}
                    alt="Video Thumbnail"
                  />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img
                      className="small-image"
                      src={small}
                      alt="Small Image"
                    />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img
                    className="video-thumbnail"
                    src={b1}
                    alt="Video Thumbnail"
                  />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img
                      className="small-image"
                      src={small}
                      alt="Small Image"
                    />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img
                    className="video-thumbnail"
                    src={b1}
                    alt="Video Thumbnail"
                  />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img
                      className="small-image"
                      src={small}
                      alt="Small Image"
                    />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img
                    className="video-thumbnail"
                    src={b1}
                    alt="Video Thumbnail"
                  />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img
                      className="small-image"
                      src={small}
                      alt="Small Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="vid-part1">
              <div className="video-item">
                <div className="video-card">
                  <img
                    className="video-thumbnail"
                    src={b1}
                    alt="Video Thumbnail"
                  />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img
                      className="small-image"
                      src={small}
                      alt="Small Image"
                    />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img
                    className="video-thumbnail"
                    src={b1}
                    alt="Video Thumbnail"
                  />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img
                      className="small-image"
                      src={small}
                      alt="Small Image"
                    />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img
                    className="video-thumbnail"
                    src={b1}
                    alt="Video Thumbnail"
                  />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img
                      className="small-image"
                      src={small}
                      alt="Small Image"
                    />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img
                    className="video-thumbnail"
                    src={b1}
                    alt="Video Thumbnail"
                  />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img
                      className="small-image"
                      src={small}
                      alt="Small Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat the above div structure for each row */}
          </div>
        </div>
        <div className="right-ad">
          <img className="ad" src={ad} alt="" />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
