import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";

const contactSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required")
    .test(
      "is-gmail",
      "Email must be a Gmail address",
      (value) => value.endsWith("@gmail.com")
    ),
  subject: yup.string(),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    if (errors[e.target.name]) {
      setErrors({...errors, [e.target.name]: ""});
    }
    setIsSuccess(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    
    try {
      await contactSchema.validate(formData, { abortEarly: false });
      
      const response = await axios.post("http://localhost:4000/api/contact", formData);
      if (response.data) {
        
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSuccess(true);
        setErrors({});
      }
    } catch (error) {
      if (error.name === "ValidationError") {
        const validationErrors = {};
        error.inner.forEach(err => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      } else {
        console.error("Error sending message:", error);
        setErrors({ submit: error.response?.data?.message || "Failed to send message. Please try again later." });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contact_info = [
    { logo: "mail", text: "elabassibasma@gmail.com" },
    { logo: "call-outline", text: "+212 655809645" },
    { logo: "location", text: "BENI MELLAL, MAROC" },
  ];

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-5">
            {errors.submit && (
              <div className="text-red-500 text-sm">{errors.submit}</div>
            )}
            {isSuccess && (
              <div className="text-green-500 text-sm">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="text-black p-2 rounded w-full"
                disabled={isSubmitting}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email Address (must be @gmail.com)"
                value={formData.email}
                onChange={handleChange}
                className="text-black p-2 rounded w-full"
                disabled={isSubmitting}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject (optional)"
                value={formData.subject}
                onChange={handleChange}
                className="text-black p-2 rounded w-full"
                disabled={isSubmitting}
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={10}
                value={formData.message}
                onChange={handleChange}
                className="text-black p-2 rounded w-full"
                disabled={isSubmitting}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button 
              type="submit" 
              className="btn-primary w-fit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div key={i} className="flex flex-row gap-4 items-center flex-wrap text-left">
                <div className="min-w-[3.5rem] min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full text-3xl">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm break-words">{contact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;