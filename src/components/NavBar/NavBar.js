import React from "react";

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">
                        MK Sounds
                    </a>
                    <a className="ml-48 btn btn-ghost normal-case text-xl">
                        <p>Headphone</p>
                    </a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="w-10 h-10 rounded-md bg-green-500"></div>
                    <div className="w-10 h-10 rounded-md bg-green-500"></div>
                    <div className="w-10 h-10 rounded-md bg-green-500"></div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
