import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ellipse from "../../../assets/images/ellipse.png";
import box from "../../../assets/images/icons/box.png";
import calendar from "../../../assets/images/icons/calendar.png";
import statistics from "../../../assets/images/icons/statistics.png";
const Work = () => {
  return (
    <div className="relative container mx-auto lg:py-20 py-10 lg:px-0 px-6">
      <div data-aos="fade-right" data-aos-duration="700" className="absolute lg:left-2/4 md:left-1/2 left-32 lg:top-16 top-8">
        <img className="lg:ms-11 md:ms-8 w-8 lg:w-12" src={ellipse} alt="" />
      </div>
      <SectionTitle
        title="How it works"
        description="Businesses generally promote their brand, products, and services by identifying audience."
      ></SectionTitle>
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:py-16 py-10">
        <div data-aos="fade-down-right" data-aos-duration="700" className="card h-80 shadow-xl border border-gray-300  p-8 rounded-3xl">
          <img className="bg-theme-color-200 p-3 rounded-lg" src={box} alt="" />
          <div className="lg:pt-11 pt-8">
            <h3 className="lg:text-2xl text-xl font-semibold">Choose Packages</h3>
            <p className="lg:pt-3 pt-4 lg:text-lg text-gray-600">
              Businesses generally promote their brand, products, and services
              by identifying audience or users.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="700" className="card h-80 shadow-xl border border-gray-300  p-8 rounded-3xl">
          <img
            className="bg-theme-color-200 p-3 rounded-lg"
            src={calendar}
            alt=""
          />

          <div className="lg:pt-11 pt-8">
            <h3 className="lg:text-2xl text-xl font-semibold">Schedule Appointment</h3>
            <p className="lg:pt-3 pt-4 lg:text-lg text-gray-600">
              When you have important information to pass onto your people, text
              messaging can be a great way to do it.
            </p>
          </div>
        </div>
        <div data-aos="fade-down-left" data-aos-duration="700" className="card h-80 shadow-xl border border-gray-300  p-8 rounded-3xl">
          <img
            className="bg-theme-color-200 p-3 rounded-lg"
            src={statistics}
            alt=""
          />

          <div className="lg:pt-11 pt-8">
            <h3 className="lg:text-2xl text-xl font-semibold">Grow Together</h3>
            <p className="lg:pt-3 pt-4 lg:text-lg text-gray-600">
              Texting can sometimes come across as an impersonal way to
              communicate, it can be highly beneficial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
