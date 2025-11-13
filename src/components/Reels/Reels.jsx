import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Container from "../Container/Container";

const Reels = () => {
  const videos = [
    {
      id: "cWgRIUvBINM",
      subtitle: "Taste the flavors that bring people together.",
    },
    {
      id: "zGGBQMBop6o",
      subtitle: "best burger",
    },
    {
      id: "PcMca_Kay50",
      subtitle: "25 kg rice 50 kg meat",
    },
    {
      id: "ijohKIbCEvo",
      subtitle: "Pure Honey Checking method by Jamshed Majumder",
    },
    {
      id: "m6AwVcAPZCY",
      subtitle: "Steak Buffet at Hotel InterContinental",
    },
  ];

  const players = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Load YouTube IFrame API
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = () => {
      videos.forEach((video, index) => {
        players.current[index] = new window.YT.Player(`player-${index}`, {
          videoId: video.id,
          playerVars: { autoplay: 0, controls: 1, mute: 0 },
          events: {
            onReady: (event) => {
              if (index !== activeIndex) event.target.pauseVideo();
            },
          },
        });
      });
    };
  }, []);

  // Pause all except active
  useEffect(() => {
    players.current.forEach((player, i) => {
      if (player && player.playVideo) {
        if (i === activeIndex) player.playVideo();
        else player.pauseVideo();
      }
    });
  }, [activeIndex]);

  // Handle click to toggle play/pause
  const handleVideoClick = (index) => {
    const player = players.current[index];
    if (!player) return;
    const state = player.getPlayerState();
    if (state === 1) {
      // playing
      player.pauseVideo();
    } else {
      // paused
      player.playVideo();
      player.unMute();
    }
  };

  return (
     
      <Container>
        <section className="w-full  h-screen">
           
          <Swiper
            direction="horizontal"
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="h-full "
          >
            {videos.map((video, index) => (
              <SwiperSlide key={video.id}>
                <div className="relative w-full h-full">
                  <div
                    id={`player-${index}`}
                    className="w-full h-full"
                    onClick={() => handleVideoClick(index)}
                  ></div>
    
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end items-center text-center pb-16 px-4 pointer-events-none">
                    <p className="text-gray-200 text-lg md:text-xl drop-shadow-sm max-w-3xl">
                      {video.subtitle}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </Container>
    
  );
};

export default Reels;
