import React, { useState } from "react";
import "./Foot1.css";
import { IoLocationOutline } from "react-icons/io5";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { BsEnvelope } from "react-icons/bs";

const Foot1 = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(""); // New Phone Number field
  const [address, setAddress] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    // Clear previous messages
    setError("");
    setResult("");

    // Basic validation
    if (!name || !email || !address || !phone) {
      setError("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^[0-9]{10,15}$/; // Accepts 10-15 digits
    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    setResult("Sending...");

    // Prepare form data for submission
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone); // Add phone number
    formData.append("address", address);
    formData.append("access_key", "34365223-0a22-4d45-bded-567f7980ac6b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setName("");
        setEmail("");
        setPhone(""); // Clear phone number field
        setAddress(""); // Clear input fields
      } else {
        console.error("Error:", data);
        setResult(data.message || "An error occurred.");
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setResult("Failed to submit the form. Please try again.");
    }
  };

  return (
    <section id="newsletter" className="section-m1 section-p1">
      <div className="newstext">
        <h4>ADDRESS :</h4>
        <p>
          On a mission to help the iGen to succeed in the IT industry with risk Free Training.
        </p>
        <ul>
          <li>
            <span className="icon">
              <IoLocationOutline />
            </span>
            <div className="address">
              <strong>USA :</strong>
              <br />
              7330 Gallagher Dr, Suite 137,
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
            <div className="address">
              <strong>INDIA :</strong>
              <br />
              S1, 2nd floor, #3 Arunachalam Road,
              <br />
              Saligramam, Chennai – 600 093
              <div className="address">
                <br />
                218, Nethaji Rd, Manjakuppam, Cuddalore,
                <br />
                Tamil Nadu - 607001
              </div>
            </div>
          </li>
          <li>
            <span style={{ color: "green" }} className="icon">
              <LiaPhoneVolumeSolid />
            </span>
            <div className="address">
              +91 63743 22717 / 99424 44717 / 04142-214717
              <br />
              <a href="mailto:info@fintekpoint.com">info@fintekpoint.com</a>
            </div>
          </li>
        </ul>
        <div className="follow">
          <h4>Follow Us</h4>
          <div className="icon">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="form">
        <form onSubmit={onSubmit}>
          <h2>CONTACT US</h2>
          <div className="form-group">
            <label htmlFor="name"> Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"> Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone"> Phone Number</label>
            <input
              id="phone"
              type="text"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address"> Address</label>
            <textarea
              id="address"
              placeholder="Your Address"
              rows="5"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {result && <p className="form-result">{result}</p>}
      </div>
    </section>
  );
};

export default Foot1;
