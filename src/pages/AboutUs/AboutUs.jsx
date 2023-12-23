import aboutUsImg from "../../assets/images/aboutUs.jpg";
const AboutUs = () => {
  return (
    <div className="md:flex h-screen items-center pt-20 justify-center gap-10 px-10">
      <div className="w-full">
        <img src={aboutUsImg} alt="" />
      </div>
      <div className="w-full">
        <h1 className="text-4xl font-bold">
          About <span className="text-red-500">Us</span>
        </h1>
        <p className="font-bold mt-5">
          Welcome to DO_IT, where productivity meets simplicity! We are a
          passionate team dedicated to helping you organize your life and
          achieve your goals with ease. At DO_IT, we understand the challenges
          of managing a busy schedule and staying on top of your tasks. That's
          why we've crafted a user-friendly to-do list app that puts you in
          control. Whether you're a student, professional, or anyone striving
          for a more organized life, our app is designed to make task management
          a breeze.
        </p>
        <p className="font-bold mt-3">
          Our mission is to empower individuals to take charge of their time and
          maximize their productivity. We believe that a well-organized to-do
          list is the key to unlocking your full potential and achieving success
          in both personal and professional endeavors.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
