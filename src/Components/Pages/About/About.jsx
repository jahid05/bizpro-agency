import ellipse from "../../../assets/images/ellipse.png";
import safe from "../../../assets/images/icons/safe.png";
import team from "../../../assets/images/icons/team.png";
import aboutImg from "../../../assets/images/aboutImg.png";
import aboutEllipse from "../../../assets/images/aboutEllipse.png";

const About = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <div className="absolute top-0 left-16">
            <img className="" src={ellipse} alt="" />
          </div>
          <h3 className="text-5xl py-4 font-semibold">About us</h3>
          <p className="text-xl text-gray-600 py-4">
            No wonder that promotion strategy is one of the most important
            processes in marketing. In fact, it supports your marketing voices
            to reach your target audience, creates interest, and helps you to
            engage with them.
          </p>
          <div className="">
            <div className="flex items-center gap-4 p-2">
              <div className="w-16">
                <img
                  className="bg-theme-color-200 p-3 rounded-lg"
                  src={safe}
                  alt=""
                />
              </div>
              <div className="">
                <h3 className="text-2xl font-semibold">Safe and secured</h3>
                <p className="text-lg text-gray-600">
                  Safe and secured promotion strategy is one of the most
                  important processes in marketing.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-2">
              <div className="w-16">
                <img
                  className="bg-theme-color-200 p-3 rounded-lg"
                  src={team}
                  alt=""
                />
              </div>
              <div className="">
                <h3 className="text-2xl font-semibold">Highly expert team</h3>
                <p className="text-lg text-gray-600">
                  We supports your marketing voices to reach your target
                  audience, creates interest.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -bottom-28 left-8">
            <img src={aboutEllipse} alt="" />
          </div>
          <div className="flex justify-end">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
