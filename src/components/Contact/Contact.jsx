import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import { IoLocationOutline } from "react-icons/io5";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "34365223-0a22-4d45-bded-567f7980ac6b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
    
      event.target.reset();
      
    } else {
      console.error("Error:", data);
      setResult(data.message);
    }
    
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="Message Icon" />
        </h3>
        <p>
          On a mission to help the iGen to succeed in the IT industry with risk-free training.
        </p>
        <ul>
          <li>
            <span className="icon">
              <IoLocationOutline />
            </span>
            <div>
              <strong>Address :</strong>
              <br />
              USA: 7330 Gallagher Dr, Suite 137,
              <br />
              Edina, MN - 55435
              <br />
              <strong>Phone :</strong> +1 763 777 1075
            </div>
          </li>
          <li>
            <span className="icon">
              <IoLocationOutline />
            </span>
            <div>
              <strong>INDIA :</strong>
              <br />
              S1, 2nd floor, #3 Arunachalam Road,
              <br />
              Saligramam, Chennai – 600 093
              <div>
              218, Nethaji Rd, Manjakuppam, Cuddalore,
              <br />
              Tamil Nadu - 607001
            </div>
            </div>
          </li>

          <li>
            <span style={{color:"green"}} className="icon">
              <LiaPhoneVolumeSolid />
            </span>
            <div>
              +91 63743 22717 / 99424 44717 / 04142-214717
              <br />
              <a href="mailto:info@fintekpoint.com">info@fintekpoint.com</a>
            </div>
          </li>
        </ul>
      </div>

      {/* Enhanced Form Design */}
      <div className="contact-col form-section">
        <h2>Contact Us</h2>
        <p>We would love to hear from you! Please fill out the form below.</p>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn">
            Submit Now <img src={white_arrow} alt="Arrow Icon" />
          </button>
        </form>
        <span className="form-result">{result}</span>
      </div>
    </div>
  );
};

export default Contact;
