

// const ContactUs = () =>{

// return (
//   <div>
//     <h1>Contact Us</h1>
//     <p>
//       Got a technical issue? Want to send feedback about a beta feature? Need
//       details about our Business plan? Let us know.
//     </p>

//     <div className="flex flex-col">
//       <form>
//         <label>email</label>{" "}
//         <input
//           type="text"
//           placeholder="Email Address"
//           className="p-2 my-4 rounded-sm w-3/12 "
//         />
//         <label>Subject</label>{" "}
//         <input type="text" placeholder="Let us know How we can help" />
//         <label>message</label>
//         <textarea></textarea>
//       </form>
//     </div>
//   </div>
// );
// }


// export default ContactUs;


import React, { useState } from "react";
import { db } from "../firebase/firebase"; // Import Firestore configuration
import { collection, addDoc } from "firebase/firestore"; // Firestore functions

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add data to Firestore
      const contactCollection = collection(db, "contact_us");
      await addDoc(contactCollection, formData);
      alert("Your message has been sent successfully!");
      setFormData({ email: "", subject: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error saving contact us form: ", error);
      alert("There was an issue sending your message. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="mb-8">
        Got a technical issue? Want to send feedback about a beta feature? Need
        details about our Business plan? Let us know.
      </p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Let us know how we can help"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here"
            className="w-full p-2 border border-gray-300 rounded-md h-32"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
