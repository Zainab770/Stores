import React, { useState } from "react";
import axios from "axios";
import Home2 from "./Home2";
import img1 from './cover.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";


const Contact = () => {
    const [firstname,setFirstname]= useState('')
    const [lastname,setLastname]= useState('')
    const [email,setEmail]= useState('')
    const [message,setMessage]= useState('')
    const handleregister=async()=>{
        console.log(firstname,lastname,email,message)
        let myapi = await axios.post("http://localhost:9500/create",{
            firstname,lastname,email,message
        })

    }
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
  return (
    <>
 <div style={{
  backgroundImage: `url(${img1})`,
  backgroundAttachment: 'fixed', 
  backgroundSize: 'cover', 
  backgroundPosition: 'center', 
  backgroundBlendMode: 'overlay',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  height:"400px"
}}>
</div>


                <div
  style={{
    width: "100%",
    padding: "30px",
    backgroundColor: "#e6f2e6",
    fontFamily: "Georgia, serif",
    textAlign: "center",
  }}
>
  <h2 style={{ color: "#2e8b57", marginBottom: "10px" }}> Pak Organix Pure 🌿</h2>
  <p style={{ color: "#444", fontSize: "16px", lineHeight: "1.6" }}>
    We believe in purity and nature. At <strong>Pak Organix Pure</strong>, we bring you premium quality organic products,
    straight from the farms of Pakistan. Your trust and satisfaction are our biggest achievements.
    <br />
    Have a question? Just drop us a message below!
  </p>
</div>


      <div
        className="box"style={{ color: "gray",width: "70%",margin: "30px auto",padding: "40px",height: "auto",backgroundColor: "#f9f9f9",borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", fontFamily: "Arial, sans-serif", display: "flex", flexDirection: "column",alignItems: "center",  justifyContent: "center",}}>
        <h1 style={{color:"green"}}>Contact us</h1>
        <div style={{ marginBottom: "20px", width: "100%", maxWidth: "400px" }}>
          First Name: <br /> <input type="text" name="firstname" value={firstname} onChange={(e)=>setFirstname(e.target.value)} placeholder="Enter your first name" style={{width: "100%",padding: "10px", marginTop: "5px", border: "1px solid #ccc", borderRadius: "4px", }} />
        </div>
        <div style={{ marginBottom: "20px", width: "100%", maxWidth: "400px" }}>
          Last Name: <br /> <input type="text" name="lastname" value={lastname} onChange={(e)=>setLastname(e.target.value)} placeholder="Enter your last name" style={{width: "100%", padding: "10px", marginTop: "5px", border: "1px solid #ccc", borderRadius: "4px", }}/>
        </div>
        <div style={{ marginBottom: "20px", width: "100%", maxWidth: "400px" }}>
          Email: <br /> <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" style={{ width: "100%", padding: "10px", marginTop: "5px", border: "1px solid #ccc",  borderRadius: "4px",  }}/>
        </div>
        <div style={{ marginBottom: "20px", width: "100%", maxWidth: "400px" }}>
          Message: <br /><textarea name="message" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Write your message here..." rows="5"style={{width: "100%", padding: "10px", marginTop: "5px", border: "1px solid #ccc",borderRadius: "4px",  resize: "vertical",  }} ></textarea><br></br>
          <div style={{textAlign:"center",width:"100%"}}>
          <button className="btn btn-success" onClick={handleregister} style={{width:"200px",padding:"10px",marginTop:"20px"}}>Register</button>
        </div>
        </div>
      </div>
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
  );
};

export default Contact;
