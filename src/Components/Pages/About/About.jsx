import ellipse from "../../../assets/images/ellipse.png";
import safe from "../../../assets/images/icons/safe.png";
import team from "../../../assets/images/icons/team.png";
import aboutImg from "../../../assets/images/aboutImg.png";
import aboutEllipse from "../../../assets/images/aboutEllipse.png";

const About = () => {
  return (
    <div className="container mx-auto lg:py-20 py-10 lg:px-0 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <div className="absolute lg:-top-4 -top-4 lg:left-14 left-8">
            <img className="w-10 lg:w-full" src={ellipse} alt="" />
          </div>
          <h3 className="lg:text-5xl md:text-4xl text-3xl font-semibold">About us</h3>
          <p className="lg:text-xl md:text-lg text-gray-600 lg:py-4 py-2">
            No wonder that promotion strategy is one of the most important
            processes in marketing. In fact, it supports your marketing voices
            to reach your target audience, creates interest, and helps you to
            engage with them.
          </p>
          <div className="">
            <div className="flex items-center gap-4 p-2">
              <div className="w-16">
                <img
                  className="bg-theme-color-200 lg:p-3 p-1 w-full rounded-lg"
                  src={safe}
                  alt=""
                />
              </div>
              <div className="">
                <h3 className="lg:text-2xl text-xl font-semibold">Safe and secured</h3>
                <p className="lg:text-lg text-gray-600">
                  Safe and secured promotion strategy is one of the most
                  important processes in marketing.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-2">
              <div className="w-16">
                <img
                  className="bg-theme-color-200 lg:p-3 p-1 w-full rounded-lg"
                  src={team}
                  alt=""
                />
              </div>
              <div className="">
                <h3 className="lg:text-2xl text-xl font-semibold">Highly expert team</h3>
                <p className="lg:text-lg text-gray-600">
                  We supports your marketing voices to reach your target
                  audience, creates interest.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute lg:-bottom-24 md:-bottom-6 -bottom-14 lg:left-8 md:-left-10 -left-4">
            <img className="w-44 md:w-56 lg:w-72" src={aboutEllipse} alt="" />
          </div>
          <div className="flex justify-end">
            <img className="w-80 lg:w-[600px]" src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
