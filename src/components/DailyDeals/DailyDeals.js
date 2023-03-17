import React, { useEffect, useState } from "react";

const DailyDeals = () => {
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        fetch("https://api.hiring.masterkey.tech/api/v1/product/get")
            .then((res) => res.json())
            .then((deal) => setDeals(deal.products));
    }, []);

    return (
        <div className="ml-4">
            {console.log(deals)}
            <h1 className="text-3xl mb-5">Daily Deals</h1>
            <ul>
                {deals.map((deal) => (
                    <li key={deal._id}>
                        <div className="flex justify-between p-2">
                            <div className="flex">
                                <img
                                    className="w-12 rounded-full"
                                    src={deal.picture}
                                    alt=""
                                />
                                <h3 className="text-base font-semibold">
                                    {deal.name}
                                </h3>
                            </div>
                            <h4 className="text-xs text-gray-500">
                                Price: $ {deal.price}
                            </h4>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DailyDeals;
