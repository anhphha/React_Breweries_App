import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { FormData } from "../types/type";
import "../styles/Contact.css";
import Button from "@mui/material/Button";
import { GoogleLogin, GoogleLoginResponse } from "react-google-login";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [googleUser, setGoogleUser] = useState<GoogleLoginResponse | null>(
    null
  );

  const handleGoogleResponse = (response: GoogleLoginResponse | any) => {
    if (response.profileObj) {
      const { name, email } = response.profileObj;
      setFormData({
        ...formData,
        name,
        email,
      });
    }
    setGoogleUser(response);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add logic to submit the form data (e.g., send it to a server)
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <p>
        Feel free to get in touch with us using the contact information below:
      </p>
      <br />
      <address className="contact-address">
        <strong>Email:</strong> contact@example.com
        <br />
        <strong>Phone:</strong> (123) 456-7890
        <br />
        <strong>Address:</strong> 123 Main Street, City, Country
        <br />
      </address>
      <br />
      <h2>Contact Form</h2>
      {submitted ? (
        <p>Thank you for your message!</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <label className="contact-label" htmlFor="name">
              Name:
            </label>
            <br />
            <input
              className="contact-input"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              //   required
            />
          </div>
          <div>
            <label className="contact-label" htmlFor="email">
              Email:
            </label>
            <br />
            <input
              className="contact-input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              //   required
            />
          </div>
          <div>
            <label className="contact-label" htmlFor="message">
              Message:
            </label>
            <br />
            <textarea
              className="contact-input"
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              //   required
            />
          </div>
          <Button
            size="large"
            className="contact-button"
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </form>
      )}
      <br />
      {/* Google Sign-In Button */}
      <GoogleLogin
        clientId="343752711966-722i2ocqlkvritks3v31sqkihrn08mdn.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={handleGoogleResponse}
        onFailure={handleGoogleResponse}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default ContactPage;
