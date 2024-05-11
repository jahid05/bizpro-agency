import About from "../About/About";
import GlobalPromotion from "../GlobalPromotion/GlobalPromotion";
import PopularPackages from "../PopularPackages/PopularPackages";
import Work from "../Work/Work";
import HeroSection from "./HeroSection/HeroSection";


const Home = () => {
    return (
        <div className="font-customFont">
            <HeroSection></HeroSection>
            <Work></Work>
            <About></About>
            <PopularPackages></PopularPackages>
            <GlobalPromotion></GlobalPromotion>
        </div>
    );
};

export default Home;