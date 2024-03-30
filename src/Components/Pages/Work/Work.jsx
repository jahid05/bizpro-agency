import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ellipse from "../../../assets/images/ellipse.png";
import box from "../../../assets/images/icons/box.png";
import calendar from "../../../assets/images/icons/calendar.png";
import statistics from "../../../assets/images/icons/statistics.png";
const Work = () => {
  return (
    <div className="relative container mx-auto py-20">
      <div className="absolute left-2/4 top-16">
        <img className="ms-11" src={ellipse} alt="" />
      </div>
      <SectionTitle
        title="How it works"
        description="Businesses generally promote their brand, products, and services by identifying audience."
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-28">
        <div className="card h-80 shadow-xl border  p-8 rounded-3xl">
          <img className="bg-theme-color-200 p-3 rounded-lg" src={box} alt="" />

          <div className="pt-11">
            <h3 className="text-2xl font-semibold">Choose Packages</h3>
            <p className="pt-3 text-lg text-gray-600">
              Businesses generally promote their brand, products, and services
              by identifying audience or users.
            </p>
          </div>
        </div>
        <div className="card h-80 shadow-xl border  p-8 rounded-3xl">
          <img
            className="bg-theme-color-200 p-3 rounded-lg"
            src={calendar}
            alt=""
          />

          <div className="pt-11">
            <h3 className="text-2xl font-semibold">Schedule Appointment</h3>
            <p className="pt-3 text-lg text-gray-600">
              When you have important information to pass onto your people, text
              messaging can be a great way to do it.
            </p>
          </div>
        </div>
        <div className="card h-80 shadow-xl border  p-8 rounded-3xl">
          <img
            className="bg-theme-color-200 p-3 rounded-lg"
            src={statistics}
            alt=""
          />

          <div className="pt-11">
            <h3 className="text-2xl font-semibold">Grow Together</h3>
            <p className="pt-3 text-lg text-gray-600">
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
