import "./App.css";
import Banner from "./components/Banner/Banner";
import Carousel from "./components/Carousel/Carousel";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";

function App() {
    return (
        <div>
            <NavBar />
            <div className="flex mt-7">
                <SideBar />
                <div className="flex flex-col mb-5">
                    <div className="flex">
                        <Hero />
                        <Banner />
                    </div>
                    <Carousel className="block" />
                </div>
            </div>
        </div>
    );
}

export default App;
