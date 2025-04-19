import { useRef } from "react";
import { useState } from "react";

function Hero() {
  const [currentIndex, setcurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;
  const nextVideoRef = useRef(null);

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setcurrentIndex(upcomingVideoIndex);
  };

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };
  const getVideoSrc = (index) => {
    return `./videos/hero-${index}.mp4`;
  };
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div
            className="mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg "
            onClick={handleMiniVideoClick}
          >
            <div className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in-out hover:opacity-100 hover:scale-100">
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(currentIndex === totalVideos ? 1 : currentIndex)}
            loop
            muted
            autoPlay
            className="absolute-center left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className="absolute z-40 right-5 bottom-5  font-bold text-white special-font hero-heading">
          G<b>a</b>ming
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full border-2 border-black">
          <div className="mt-25 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e
            </h1>
            <p className="max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
