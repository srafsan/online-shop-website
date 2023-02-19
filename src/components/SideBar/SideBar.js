import React from "react";

const SideBar = () => {
    return (
        <div className="w-1/4">
            <div className="drawer drawer-mobile">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-primary drawer-button lg:hidden"
                    >
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side shadow-xl">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* Sidebar content here */}
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Explore</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
