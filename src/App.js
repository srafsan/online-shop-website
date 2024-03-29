import "./App.css";
import AdsCard from "./components/AdsCard/AdsCard";
import Banner from "./components/Banner/Banner";
import Carousel from "./components/Carousel/Carousel";
import DailyDeals from "./components/DailyDeals/DailyDeals";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";

function App() {
    return (
        <div className="h-full">
            <NavBar />
            <div className="flex mt-7">
                <SideBar />
                <div className="flex flex-col">
                    <div className="flex mb-20">
                        <Hero />
                        <Banner />
                    </div>
                    <div className="grid grid-cols-5 ">
                        <div className="col-span-4">
                            <Carousel />
                            <div className="my-10">
                                <h1 className="text-green-500 text-2xl font-semibold">
                                    Explore The Popular Categories
                                    <span className="text-black text-lg ml-4 font-normal">
                                        See all
                                    </span>
                                </h1>
                            </div>
                            <div className="flex space-x-16">
                                <AdsCard />
                                <AdsCard />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <DailyDeals />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
