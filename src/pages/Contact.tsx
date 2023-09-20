import React, { useState, ChangeEvent, FormEvent } from "react";
import { FormData } from "../types/type";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

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
    <div>
      <h1>Contact Us</h1>
      <p>
        Feel free to get in touch with us using the contact information below:
      </p>
      <address>
        <strong>Email:</strong> contact@example.com
        <br />
        <strong>Phone:</strong> (123) 456-7890
        <br />
        <strong>Address:</strong> 123 Main Street, City, Country
        <br />
      </address>

      <h2>Contact Form</h2>
      {submitted ? (
        <p>Thank you for your message!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              //   required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              //   required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              //   required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactPage;
