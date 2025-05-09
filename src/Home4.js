import React from "react";
import img1 from './organicssss.png'
import Home6 from "./Home6";

const Home4 = () => {
    return (
        <>
            <div className="Overall">
                <h2>Organic Products</h2>

                <img
                    src={img1}alt="Organic"/>
                <p>
                    Organic products are made from natural ingredients without the use of harmful chemicals, pesticides, or synthetic additives. These products include fresh fruits, vegetables, grains, dairy items, and even skincare essentials. Grown using eco-friendly farming methods, they help maintain soil health and protect the environment. Organic foods are known for their better taste, higher nutritional value, and safety for long-term health. Choosing organic is not just a lifestyle, it’s a step toward a healthier you and a greener planet.
                </p>
            </div>
            <Home6/>
        </>
    )
}

export default Home4;
