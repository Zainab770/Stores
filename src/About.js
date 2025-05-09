import React from "react";
import Home2 from "./Home2";
const About = () => {
  return (
    <>
      <div className="about" style={{ fontFamily: "'Arial', sans-serif", lineHeight: "1.8", marginTop: "20px", textAlign: "center" }}>
        <h1 className="heading" style={{ fontSize: "2.5rem", color: "green", marginBottom: "20px" }}>
          Welcome to Pak Organix
        </h1>
        <p style={{ color: "#333", fontStyle: "italic", fontSize: "1.2rem", textAlign: "justify", padding: "0 20px" }}>
          Welcome to <strong>Pak Organix Pure</strong>, Pakistan’s premier destination for the finest organic products. We are a national Pakistani brand dedicated to bringing you products that not only support your health but also promote a sustainable and eco-friendly lifestyle. Our journey began with a vision to make organic living accessible to everyone in Pakistan, empowering individuals to make healthier choices while supporting the well-being of our planet.
        </p>

        <p style={{ color: "#333", fontStyle: "italic", fontSize: "1.2rem", textAlign: "justify", padding: "0 20px" }}>
          At Pak Organix Pure, we believe that what you consume and use should be as pure and natural as possible. That’s why we work tirelessly to bring you a wide range of organic products, from fresh and locally sourced produce to all-natural skincare, pantry essentials, and beyond. Every product we offer is carefully selected to ensure it’s free from harmful chemicals, pesticides, and artificial additives. We are committed to helping you make informed, responsible choices that are not only good for your health but also good for the environment.
        </p>

        <p style={{ color: "#333", fontStyle: "italic", fontSize: "1.2rem", textAlign: "justify", padding: "0 20px" }}>
          Our organic products are sourced directly from local farmers who use sustainable farming methods, ensuring that you receive the highest quality products while supporting the community and contributing to a healthier planet. We strive to create a positive impact on the environment by promoting sustainable farming practices that help preserve Pakistan’s natural resources for future generations.
        </p>

        <p style={{ color: "#333", fontStyle: "italic", fontSize: "1.2rem", textAlign: "justify", padding: "0 20px" }}>
          In addition to providing premium organic products, we are passionate about raising awareness on the importance of organic living. We believe that small changes in the way we live can lead to big improvements in our health and the environment. Whether you’re looking to switch to organic foods, skincare, or other eco-friendly alternatives, Pak Organix Pure is here to make your journey to a healthier, more sustainable lifestyle simple and accessible.
        </p>

        <p style={{ color: "#333", fontStyle: "italic", fontSize: "1.2rem", textAlign: "justify", padding: "0 20px" }}>
          Join us in our mission to create a cleaner, greener Pakistan, where organic living becomes the norm, not the exception. Every product you purchase from us is a step towards a better future for you, your family, and our planet. Experience the goodness of nature with Pak Organix Pure, and let's make healthier choices together for a brighter tomorrow.
        </p>
      </div>
      <Home2/>
    </>
  );
}

export default About;
