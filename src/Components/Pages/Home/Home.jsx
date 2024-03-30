import About from "../About/About";
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
        </div>
    );
};

export default Home;