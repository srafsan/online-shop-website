import React from "react";

const Hero = () => {
    return (
        <div className="mr-6">
            <div className="hero w-full bg-base-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://static.morningchalkup.com/2023/02/762ffa968a2f4ab48b9a915cebe58b85-1.jpg"
                        className="max-w-sm rounded-lg shadow-2xl"
                        alt="Avatar"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
