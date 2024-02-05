import React, { useEffect } from 'react';
import b1 from "./images/image 772.png";
import sm from "./images/Group 11402.png";
import av from "./images/Group 12203.png";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section, index) => {
      const videoList = section.querySelector(".video-list");
      const prevButton = section.querySelector(`#prev-slide-${index + 1}`);
      const nextButton = section.querySelector(`#next-slide-${index + 1}`);

      const maxScrollLeft = videoList.scrollWidth - videoList.clientWidth;

      const handleSlideButtons = () => {
        prevButton.style.display = videoList.scrollLeft <= 0 ? "none" : "flex";
        nextButton.style.display = videoList.scrollLeft >= maxScrollLeft ? "none" : "flex";
      };

      prevButton.addEventListener("click", () => {
        videoList.scrollBy({ left: -videoList.clientWidth, behavior: "smooth" });
      });

      nextButton.addEventListener("click", () => {
        videoList.scrollBy({ left: videoList.clientWidth, behavior: "smooth" });
      });

      videoList.addEventListener("scroll", () => {
        handleSlideButtons();
      });

      handleSlideButtons();
    });
  }, []); // Empty dependency array means this effect will run once after the initial render

  return (
    <div>
      {/* ... rest of your component */}
      <section>
        <h2>Free Recorded recipes |</h2>
        <div className="video-card-container">
          <button id="prev-slide-1" className="slide-button material-symbols-rounded">←</button>
          <div className="video-list">
          <div className="video-row">
              {/* Your video items */}
              <div className="video-item">
                <div className="video-card">
                  <img className="video-thumbnail" src={b1} alt="Video Thumbnail" />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img className="small-image" src={sm} alt="SmallImage" />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img className="video-thumbnail" src={b1} alt="Video Thumbnail" />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img className="small-image" src={sm} alt="Small Image" />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img className="video-thumbnail" src={b1} alt="Video Thumbnail" />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img className="small-image" src={sm} alt="Small Image" />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img className="video-thumbnail" src={b1} alt="Video Thumbnail" />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img className="small-image" src={sm} alt="Small Image" />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img className="video-thumbnail" src={b1} alt="Video Thumbnail" />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img className="small-image" src={sm} alt="Small Image" />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img className="video-thumbnail" src={b1} alt="Video Thumbnail" />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img className="small-image" src={sm} alt="Small Image" />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img className="video-thumbnail" src={b1} alt="Video Thumbnail" />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img className="small-image" src={sm} alt="Small Image" />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img className="video-thumbnail" src={b1} alt="Video Thumbnail" />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img className="small-image" src={sm} alt="Small Image" />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img className="video-thumbnail" src={b1} alt="Video Thumbnail" />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img className="small-image" src={sm} alt="Small Image" />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img className="video-thumbnail" src={b1} alt="Video Thumbnail" />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img className="small-image" src={sm} alt="Small Image" />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img className="video-thumbnail" src={b1} alt="Video Thumbnail" />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img className="small-image" src={sm} alt="Small Image" />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img className="video-thumbnail" src={b1} alt="Video Thumbnail" />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img className="small-image" src={sm} alt="Small Image" />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img className="video-thumbnail" src={b1} alt="Video Thumbnail" />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img className="small-image" src={sm} alt="Small Image" />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img className="video-thumbnail" src={b1} alt="Video Thumbnail" />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img className="small-image" src={sm} alt="Small Image" />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img className="video-thumbnail" src={b1} alt="Video Thumbnail" />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img className="small-image" src={sm} alt="Small Image" />
                  </div>
                </div>
              </div>
              <div className="video-item">
                <div className="video-card">
                  <img className="video-thumbnail" src={b1} alt="Video Thumbnail" />
                  <div className="video-details">
                    <div>
                      <h3>Video Title 1</h3>
                      <p className="Chefname">Sanjeev Kapoor</p>
                      <p className="count">120k Likes, 300 Views</p>
                    </div>
                    <img className="small-image" src={sm} alt="Small Image" />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <button id="next-slide-1" className="slide-button material-symbols-rounded">→</button>
        </div>
        <div className="slider-scrollbar">
          <div className="scrollbar-track">
            <div className="scrollbar-thumb"></div>
          </div>
        </div>
      </section>

      <section>
        <h2>Let's cook Something from your Locals |</h2>
        <div className="video-card-container">
          <button id="prev-slide-2" className="slide-button-local material-symbols-rounded">←</button>
          <div className="video-list">
                <div className="video-row">
                    <div className="video-item">
                        <div className="video-card">
                            <img className="video-thumbnail" src={b1} alt="Video Thumbnail"/>
                            <div className="video-details">
                                <div>
                                    <h3>Video Title 1</h3>
                                    <p className="Chefname">Sanjeev Kapoor</p>
                                    <p className="count">120k Likes, 300 Views</p>
                                </div>
                                <img className="small-image" src={sm} alt="Small Image"/>
                            </div>
                            <img className="image-btn" src={av} alt="Image Button"/>
                        </div> 
                    </div>
                    <div className="video-item">
                        <div className="video-card">
                            <img className="video-thumbnail" src={b1} alt="Video Thumbnail"/>
                            <div className="video-details">
                                <div>
                                    <h3>Video Title 1</h3>
                                    <p className="Chefname">Sanjeev Kapoor</p>
                                    <p className="count">120k Likes, 300 Views</p>
                                </div>
                                <img className="small-image" src={sm} alt="Small Image"/>
                            </div>
                            <img className="image-btn" src={av} alt="Image Button"/>
                        </div> 
                    </div>
                    <div className="video-item">
                        <div className="video-card">
                            <img className="video-thumbnail" src={b1} alt="Video Thumbnail"/>
                            <div className="video-details">
                                <div>
                                    <h3>Video Title 1</h3>
                                    <p className="Chefname">Sanjeev Kapoor</p>
                                    <p className="count">120k Likes, 300 Views</p>
                                </div>
                                <img className="small-image" src={sm} alt="Small Image"/>
                            </div>
                            <img className="image-btn" src={av} alt="Image Button"/>
                        </div> 
                    </div>
                    <div className="video-item">
                        <div className="video-card">
                            <img className="video-thumbnail" src={b1} alt="Video Thumbnail"/>
                            <div className="video-details">
                                <div>
                                    <h3>Video Title 1</h3>
                                    <p className="Chefname">Sanjeev Kapoor</p>
                                    <p className="count">120k Likes, 300 Views</p>
                                </div>
                                <img className="small-image" src={sm} alt="Small Image"/>
                            </div>
                            <img className="image-btn" src={av} alt="Image Button"/>
                        </div> 
                    </div>
                    <div className="video-item">
                        <div className="video-card">
                            <img className="video-thumbnail" src={b1} alt="Video Thumbnail"/>
                            <div className="video-details">
                                <div>
                                    <h3>Video Title 1</h3>
                                    <p className="Chefname">Sanjeev Kapoor</p>
                                    <p className="count">120k Likes, 300 Views</p>
                                </div>
                                <img className="small-image" src={sm} alt="Small Image"/>
                            </div>
                            <img className="image-btn" src={av} alt="Image Button"/>
                        </div> 
                    </div>
                    <div className="video-item">
                        <div className="video-card">
                            <img className="video-thumbnail" src={b1} alt="Video Thumbnail"/>
                            <div className="video-details">
                                <div>
                                    <h3>Video Title 1</h3>
                                    <p className="Chefname">Sanjeev Kapoor</p>
                                    <p className="count">120k Likes, 300 Views</p>
                                </div>
                                <img className="small-image" src={sm} alt="Small Image"/>
                                
                            </div>
                            <img className="image-btn" src={av} alt="Image Button"/>
                        </div> 
                    </div>
                </div>
            </div>
          <button id="next-slide-2" className="slide-button-local material-symbols-rounded">→</button>
        </div>
        <div className="slider-scrollbar">
          <div className="scrollbar-track">
            <div className="scrollbar-thumb"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
