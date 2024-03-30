import { Button } from "keep-react";
import btn from "../../../../assets/images/button.png";
import ellipse from "../../../../assets/images/ellipse.png";
import ellipse2 from "../../../../assets/images/ellipse2.png";
import heroImg from "../../../../assets/images/heroImg.png";
import card from "../../../../assets/images/card.png";
import './styles.css'

const HeroSection = () => {
  return (
    <div className="bg-theme-color-200 flex items-center h-screen pt-28">
      <div className="grid md:grid-cols-2 container mx-auto">
        <div className="pt-36">
          <img className="ms-32 w-16" src={ellipse} alt="" />
          <h1 className="text-6xl font-semibold">
            Perfect place for your business promotion <span>✌️</span>
          </h1>
          <p className="py-5 text-xl text-gray-500">
            Businesses generally promote their brand, products, <br /> and
            services by identifying audience.
          </p>
          <div className="py-4 flex items-center gap-2">
            <Button className="bg-black py-4 px-8 text-xl duration-300 hover:text-black hover:bg-theme-color-100">
              Get Started
            </Button>
            <Button className="bg-transparent hover:bg-transparent ">
              <img className="border border-theme-color-100 rounded-full" src={btn} alt="" />
            </Button>
          </div>
          <div className="py-2 px-8">
            <img src={card} alt="" />
          </div>
        </div>
        <div className="flex item-center">
          <div className="absolute right-40">
            <img src={ellipse2} alt="" />
          </div>
          <img className="py-12" src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
