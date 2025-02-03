// "use client";

// import { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const validateField = (name, value) => {
//     let error = "";
//     switch (name) {
//       case "name":
//         if (value.trim().length < 3) {
//           error = "Name must be at least 3 characters long";
//         } else if (!/^[a-zA-Z\s]+$/.test(value)) {
//           error = "Name should only contain alphabets and spaces";
//         }
//         break;
//       case "email":
//         if (!/\S+@\S+\.\S+/.test(value)) {
//           error = "Invalid email address";
//         }
//         break;
//       case "message":
//         if (value.trim().length < 8) {
//           error = "Message must be at least 8 characters long";
//         }
//         break;
//       default:
//         break;
//     }
//     return error;
//   };

//   const validateForm = () => {
//     const newErrors = Object.keys(formData).reduce((acc, field) => {
//       const error = validateField(field, formData[field]);
//       if (error) acc[field] = error;
//       return acc;
//     }, {});
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = ({ target: { name, value } }) => {
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     setLoading(true);
//     setSubmitStatus(null);

//     try {
//       const response = await fetch("https://formsubmit.co/bdb16b2f630732a1851c8955480c2460", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData), // Send the form data as JSON
//       });

//       if (!response.ok) throw new Error("Failed to send message");

//       setSubmitStatus("success");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       setSubmitStatus("error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderField = (label, name, type = "text", isTextarea = false) => (
//     <div className="flex flex-col mb-4">
//       <label htmlFor={name} className="text-sm font-medium text-gray-300 mb-1">
//         {label}
//       </label>
//       {isTextarea ? (
//         <textarea
//           id={name}
//           name={name}
//           value={formData[name]}
//           onChange={handleChange}
//           rows="5"
//           className={`px-3 py-2 w-full bg-gray-800 text-gray-200 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
//             errors[name] ? "border-red-500" : "border-gray-600"
//           }`}
//         />
//       ) : (
//         <input
//           type={type}
//           id={name}
//           name={name}
//           value={formData[name]}
//           onChange={handleChange}
//           className={`px-3 py-2 w-full bg-gray-800 text-gray-200 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
//             errors[name] ? "border-red-500" : "border-gray-600"
//           }`}
//         />
//       )}
//       {errors[name] && <p className="mt-1 text-sm text-red-500">{errors[name]}</p>}
//     </div>
//   );

//   return (
//     <div id="contact" className="w-full mx-auto pt-16 p-32 bg-gray-900 text-gray-100">
//       <div className="grid grid-cols-5 gap-8">
//         <div className="col-span-3">
//           <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

//           {submitStatus === "success" && (
//             <div className="mb-4 p-3 text-sm text-green-300 bg-gray-800 border border-green-500 rounded">
//               Thank you! Your message has been sent successfully.
//             </div>
//           )}
//           {submitStatus === "error" && (
//             <div className="mb-4 p-3 text-sm text-red-300 bg-gray-800 border border-red-500 rounded">
//               Sorry, there was an error sending your message. Please try again.
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             {renderField("Name", "name")}
//             {renderField("Email Address", "email", "email")}
//             {renderField("Message", "message", "text", true)}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;




// "use client";

// import { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const validateField = (name, value) => {
//     let error = "";
//     switch (name) {
//       case "name":
//         if (value.trim().length < 3) {
//           error = "Name must be at least 3 characters long";
//         } else if (!/^[a-zA-Z\s]+$/.test(value)) {
//           error = "Name should only contain alphabets and spaces";
//         }
//         break;
//       case "email":
//         if (!/\S+@\S+\.\S+/.test(value)) {
//           error = "Invalid email address";
//         }
//         break;
//       case "message":
//         if (value.trim().length < 8) {
//           error = "Message must be at least 8 characters long";
//         }
//         break;
//       default:
//         break;
//     }
//     return error;
//   };

//   const validateForm = () => {
//     const newErrors = Object.keys(formData).reduce((acc, field) => {
//       const error = validateField(field, formData[field]);
//       if (error) acc[field] = error;
//       return acc;
//     }, {});
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = ({ target: { name, value } }) => {
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     setLoading(true);
//     setSubmitStatus(null);

//     try {
//       const response = await fetch("https://formsubmit.co/bdb16b2f630732a1851c8955480c2460", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) throw new Error("Failed to send message");

//       setSubmitStatus("success");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       setSubmitStatus("error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderField = (label, name, type = "text", isTextarea = false) => (
//     <div className="flex flex-col mb-4">
//       <label htmlFor={name} className="text-sm font-medium text-gray-300 mb-1">
//         {label}
//       </label>
//       {isTextarea ? (
//         <textarea
//           id={name}
//           name={name}
//           value={formData[name]}
//           onChange={handleChange}
//           rows="5"
//           className={`px-3 py-2 w-full bg-gray-800 text-gray-200 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
//             errors[name] ? "border-red-500" : "border-gray-600"
//           }`}
//         />
//       ) : (
//         <input
//           type={type}
//           id={name}
//           name={name}
//           value={formData[name]}
//           onChange={handleChange}
//           className={`px-3 py-2 w-full bg-gray-800 text-gray-200 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
//             errors[name] ? "border-red-500" : "border-gray-600"
//           }`}
//         />
//       )}
//       {errors[name] && <p className="mt-1 text-sm text-red-500">{errors[name]}</p>}
//     </div>
//   );

//   return (
//     <div id="contact" className="w-full mx-auto pt-16 p-8 bg-gray-900 text-gray-100">
//       <div className="flex flex-col md:flex-row justify-between gap-8">
//         <div className="flex-1">
//           <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

//           {submitStatus === "success" && (
//             <div className="mb-4 p-3 text-sm text-green-300 bg-gray-800 border border-green-500 rounded">
//               Thank you! Your message has been sent successfully.
//             </div>
//           )}
//           {submitStatus === "error" && (
//             <div className="mb-4 p-3 text-sm text-red-300 bg-gray-800 border border-red-500 rounded">
//               Sorry, there was an error sending your message. Please try again.
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             {renderField("Name", "name")}
//             {renderField("Email Address", "email", "email")}
//             {renderField("Message", "message", "text", true)}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;




"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (value.trim().length < 3) {
          error = "Name must be at least 3 characters long";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "Name should only contain alphabets and spaces";
        }
        break;
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Invalid email address";
        }
        break;
      case "message":
        if (value.trim().length < 8) {
          error = "Message must be at least 8 characters long";
        }
        break;
      default:
        break;
    }
    return error;
  };

  const validateForm = () => {
    const newErrors = Object.keys(formData).reduce((acc, field) => {
      const error = validateField(field, formData[field]);
      if (error) acc[field] = error;
      return acc;
    }, {});
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formsubmit.co/bdb16b2f630732a1851c8955480c2460", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const renderField = (label, name, type = "text", isTextarea = false) => (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          rows="5"
          className={`px-3 py-2 w-full bg-gray-800 text-gray-200 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
            errors[name] ? "border-red-500" : "border-gray-600"
          }`}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className={`px-3 py-2 w-full bg-gray-800 text-gray-200 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
            errors[name] ? "border-red-500" : "border-gray-600"
          }`}
        />
      )}
      {errors[name] && <p className="mt-1 text-sm text-red-500">{errors[name]}</p>}
    </div>
  );

  return (
    <div id="contact" className="w-full mx-auto border-none pt-16 pb-12 px-4 md:px-16 bg-gray-900 text-gray-100">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Get in Touch</h2>

          {submitStatus === "success" && (
            <div className="mb-4 p-3 text-sm text-green-300 bg-gray-800 border border-green-500 rounded">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="mb-4 p-3 text-sm text-red-300 bg-gray-800 border border-red-500 rounded">
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {renderField("Name", "name")}
            {renderField("Email Address", "email", "email")}
            {renderField("Message", "message", "text", true)}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
