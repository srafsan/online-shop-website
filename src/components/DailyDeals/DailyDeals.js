import React, { useEffect, useState } from "react";

const DailyDeals = () => {
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        fetch("https://api.hiring.masterkey.tech/api/v1/product/get")
            .then((res) => res.json())
            .then((deal) => setDeals(deal));
    }, []);

    return <div>{console.log(deals)}</div>;
};

export default DailyDeals;
