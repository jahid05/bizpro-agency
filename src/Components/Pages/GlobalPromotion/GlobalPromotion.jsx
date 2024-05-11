import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ellipse from "../../../assets/images/ellipse.png";
import groupImg from "../../../assets/images/globalPromotion.png";
import map from "../../../assets/images/globalMap.png";
import Subscribe from "../Subscribe/Subscribe";

const GlobalPromotion = () => {
  return (
    <div className="container mx-auto lg:py-28 py-16 px-6 lg:px-0">
      <div className="relative lg:text-center">
        <div className="absolute left-1/2 -top-4">
          <img src={ellipse} alt="" />
        </div>
        <SectionTitle title="Global Promotion"></SectionTitle>
        <p className="lg:text-lg text-gray-500">
          Businesses generally promote their brand, products, and services by
          identifying audience. No wonder <br /> that promotion strategy is one
          of the most important processes in marketing.
        </p>
      </div>
      <div className="flex justify-center relative lg:py-16 py-8">
        <img className="z-10" src={groupImg} alt="" />
        <div className="absolute z-0">
          <img src={map} alt="" />
        </div>
      </div>
      <Subscribe></Subscribe>
    </div>
  );
};

export default GlobalPromotion;
