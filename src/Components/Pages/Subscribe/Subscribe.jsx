import { Button } from "keep-react";
import ellipse from "../../../assets/images/ellipse.png";
import subImg from "../../../assets/images/subscribeImg.png";
const Subscribe = () => {
  return (
    <div className="bg-theme-color-200 lg:p-12 px-6 pt-12 relative rounded-xl">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="">
          <div className="relative flex flex-col pb-10">
            <div className="absolute lg:-top-4 -top-2 lg:left-20 left-12">
              <img className="lg:w-full w-8" src={ellipse} alt="" />
            </div>
            <h3 className="lg:text-5xl md:text-4xl text-3xl font-semibold">Subscribe newsletter</h3>
            <p className="lg:text-xl md:text-lg text-gray-600 lg:py-4 py-2 text-center">
              Businesses generally promote their brand, products, and services
              by identifying audience. No wonder that promotion strategy is one
              of the most important processes in marketing.
            </p>
          </div>
          <div className="flex justify-between lg:w-[500px] p-2 rounded-md bg-white">
            <input
              className="px-2 w-full bg-transparent border-none outline-none text-[16px]"
              type="text"
              placeholder="Enter email address"
            />
            <Button className="bg-theme-color-300 lg:py-4 py-3 lg:px-8 px-4 lg:text-xl text-sm duration-300 hover:text-black hover:bg-theme-color-100">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="">
          <div className="lg:absolute lg:bottom-0 lg:right-12">
            <img className="" src={subImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
