import { useState, forwardRef } from "react";

const HowItWorks = forwardRef<HTMLElement>((_, ref) => {
  // State to manage video play
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Handle image click to play video
  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section ref={ref} className="hidden md:block w-full overflow-hidden">
      <div
        className="w-[87%] max-w-[1200px] mx-auto rounded-[54px] bg-custom-gradient p-10 m-10"
        data-aos="fade-up"
      >
        <div className="w-full text-center" data-aos="fade-down">
          <p className="font-roboto text-[36px] md:text-[48px] font-black text-neutral-200">
            How It Works&nbsp;
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(92.57deg, #D84315 -28.74%, #FFC107 124.48%)",
              }}
            >
              - 3 Easy Steps
            </span>
          </p>
          <p className="font-roboto text-[14px] md:text-[18px] font-normal leading-[22px] text-neutral-300">
            Getting started with Swasthi is quick and easy! Follow these three
            simple steps to begin your journey towards a healthier lifestyle!
          </p>
        </div>
        <div
          className="w-full flex flex-wrap md:flex-nowrap justify-evenly items-center p-6"
          data-aos="fade-up"
        >
          <div
            className="w-full md:w-[300px] space-y-8 text-center md:text-right"
            data-aos="slide-right"
          >
            <div className="space-y-4">
              <p className="text-neutral-100 font-roboto text-[16px] md:text-[20px] font-bold">
                Download App
              </p>
              <div className="flex justify-center md:justify-end gap-2">
                <img src="/applestore.png" alt="Apple store" />
                <img src="/googleplay.png" alt="Google play" />
              </div>
              <p className="font-roboto text-[12px] md:text-[14px] text-neutral-300">
                Download Swasthi on your favourite device. Available on both iOS
                and Android platforms.
              </p>
            </div>
            <div className="w-full md:w-[300px]">
              <img src="/Frame 2608479.png" alt="login" className="mx-auto" />
            </div>
            <div className="space-y-4">
              <p className="text-neutral-100 font-roboto text-[16px] md:text-[20px] font-bold">
                You're Done
              </p>
              <p className="text-neutral-100 font-roboto font-bold">
                Enjoy the Experience
              </p>
              <p className="font-roboto text-[12px] md:text-[14px] text-neutral-300">
                Explore the app's amazing features, track your progress, and
                share Swasthi with friends and family to inspire their health
                journey.
              </p>
            </div>
          </div>
          <div
            className="m-0 h-full xl:block md:block hidden"
            data-aos="zoom-in"
          >
            <img
              src="/Rectangle 7.png"
              alt="rectangle"
              className="ml-14 mt-0 absolute "
            />
            <img
              src="/Circle1.png"
              alt="circle1"
              className="h-[60px] w-[60px] rounded-full relative z-10 ml-7 mt-[60px]"
            />
            <img
              src="/Circle2.png"
              alt="circle2"
              className="h-[60px] w-[60px] rounded-full relative z-10 my-[120px] ml-7"
            />
            <img
              src="/Circle3.png"
              alt="circle3"
              className="h-[60px] w-[60px] rounded-full relative z-10 mb-[50px] ml-7"
            />
          </div>
          <div
            className="w-full md:w-[300px] space-y-8 text-center md:text-left"
            data-aos="slide-left"
          >
            <div className="w-full md:w-[300px]">
              <img
                src="/Frame 2608478.png"
                alt="download_app"
                className="mx-auto"
              />
            </div>
            <div className="space-y-4">
              <p className="text-neutral-100 font-roboto text-[16px] md:text-[20px] font-bold">
                Create Account
              </p>
              <p className="text-neutral-100 font-roboto font-bold">
                7 days free trial
              </p>
              <p className="font-roboto text-[12px] md:text-[14px] text-neutral-300">
                Sign up easily using your email or social accounts like Google
                or Apple. Enjoy a 7-day free trial with full access to all
                premium features.
              </p>
            </div>
            <div className="w-full md:w-[300px]">
              <img
                src="/Frame 2608479 (1).png"
                alt="done"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[80%] max-w-[720px] mx-auto "
        data-aos="zoom-out"
      >
        {/* Clickable video image */}
        {!isVideoPlaying ? (
          <img
            src="/Video.png"
            alt="video_img"
            className="translate-y-[-60px] cursor-pointer w-full h-auto"
            onClick={handleVideoClick}
          />
        ) : (
          // Display video in place of image when clicked
          <iframe
            width="100%"
            height="400"
            src="/-034a-434f-ab20-1f24ac408882.mp4"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </section>
  );
});

export default HowItWorks;