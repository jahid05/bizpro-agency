import { Button,} from "keep-react";
import btn from "../../../../assets/images/button.png";
import ellipse from "../../../../assets/images/ellipse.png";
import ellipse2 from "../../../../assets/images/ellipse2.png";
import heroImg from "../../../../assets/images/heroImg.png";
import card from "../../../../assets/images/card.png";
import './styles.css'
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-theme-color-200 flex items-center py-6 lg:py-0">
      <div className="grid md:grid-cols-2 container mx-auto px-6 lg:px-0 gap-y-10">
        <div data-aos="fade-right" data-aos-duration="700" className="lg:pt-36">
          <img className="lg:ms-32 ms-4 lg:w-16" src={ellipse} alt="" />
          <h1 className="lg:text-6xl text-3xl font-semibold">
            Perfect place for your business promotion <span>✌️</span>
          </h1>
          <p className="lg:py-5 py-2 lg:text-xl text-gray-500">
            Businesses generally promote their brand, products, <br /> and
            services by identifying audience.
          </p>
          <div className="lg:py-4 flex items-center gap-2">
            <Button className="bg-theme-color-300 lg:py-4 py-3 lg:px-8 px-4 lg:text-xl text-sm duration-300 hover:text-black hover:bg-theme-color-100">
              Get Started
            </Button>
            <Link to="https://youtu.be/VCPGMjCW0is?si=xzgFNNg-Yk4ZTCt-" className="bg-transparent hover:bg-transparent ">
              <img className="border border-theme-color-100 rounded-full w-10 md:w-10 lg:w-14" src={btn} alt="" />
            </Link>
          </div>
          <div className="lg:py-2 lg:px-8 w-52 lg:w-full">
            <img src={card} alt="" />
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="700" className="flex item-center relative lg:pt-24">
          <div className="absolute lg:right-0 right-0 lg:top-36 md:top-6 -top-10">
            <img className="w-16 md:w-20 lg:w-36" src={ellipse2} alt="" />
          </div>
          <img className="md:py-14 " src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
