import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Home2 from "./Home2";
const Personal=()=>{
      const info = [
          {
            icon: <FontAwesomeIcon icon={faPhoneAlt} />,
            title: "WhatsApp Number",
            value: "+92 300 1234567",
          },
          {
            icon: <FontAwesomeIcon icon={faEnvelope} />,
            title: "Email",
            value: "tooba@example.com",
          },
          {
            icon: <FontAwesomeIcon icon={faMapMarkerAlt} />,
            title: "Location",
            value: "Multan, Pakistan",
          },
        ];
    return(
        <>
         <div className="info-section">
      <h2 className="info-heading">Personal Information 💼</h2>
      <div className="info-card-row">
        {info.map((item, index) => (
          <div className="info-card" key={index}>
            <div className="info-icon">{item.icon}</div>
            <h4 className="info-title">{item.title}</h4>
            <p className="info-value">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
      <div style={{
  width: "100%",
  height: "400px",
  margin: "50px auto",
  overflow: "hidden",
}}>
  <iframe
    title="Our Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13295.644768219416!2d73.04788209832554!3d33.68442000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9538e38d509f%3A0xe998a7fd04dcdf4a!2sIslamabad!5e0!3m2!1sen!2s!4v1649305553335!5m2!1sen!2s"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
<Home2/>
        </>
    )
}
export default Personal