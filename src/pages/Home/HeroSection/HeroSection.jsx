const HeroSection = () => {
  return (
    <div className="bg-[url('./assets/images/bgImg.jpg')]  bg-cover bg-no-repeat bg-top  h-screen">
      <div className="bg-black md:bg-opacity-30 bg-opacity-50 h-screen ">
        <div className="flex justify-center items-center text-[#fff8f8] h-screen">
          <div className="md:w-full pt-10 px-10">
            <h1 className="text-4xl font-bold ">
              Achieve More with <span className="text-red-500">DO_IT</span>{" "}
            </h1>
            <h2 className="mt-4 font-bold text-xl">
              Your Ultimate Productivity Hub for <br /> Organized Living
            </h2>
            <p className="mt-5 font-bold">
              Simplify your day with DO_IT, your all-in-one solution for
              effortless task management and goal achievement. Streamline your
              life, boost productivity, and turn aspirations into reality. Our
              intuitive design ensures a user-friendly experience, while
              seamless collaboration features keep you connected with your tasks
              anytime, anywhere. Stay motivated with progress insights and
              timely reminders. It's time to take control – start your journey
              with DO_IT today!
            </p>
          </div>
          <div className="md:w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
