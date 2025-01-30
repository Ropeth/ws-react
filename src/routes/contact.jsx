import Footer from "../components/footer";
import Header from "../components/header";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ea79ecef-2236-4db0-8bd8-898073ef7fd1"); //web3forms.com

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      Swal.fire({
        title: "Thank you",
        text: "Message sent successfully",
        icon: "success",
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="root">
      <Header />
      <div id="main">
        <div className="info contact">
          <h1>Contact</h1>
          <p className="bigger">
            Water schools are global and local in their nature and they grow
            with more and more communities coming forward to tell all about a
            traditional or modern innovative method of water retention that has
            regenerated and revitalised their area or region. That they
            themselves have done.
          </p>
          <p>
            <em>
              If you know a successful method of holding water in the ground or
              of a community, in any part of the world, that is using successful
              methods of landscape water retention, please send us an email and
              introduce them to us and us to them.
            </em>
          </p>
        </div>
        <div id="form-messages"></div>
        <form
          id="contact-form"
          //action="send-email.php" method="post"
          onSubmit={onSubmit}
        >
          <div className="elem-group">
            <label for="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              pattern="[A-Z\sa-z]{3,20}"
              required=""
            />
          </div>
          <div className="elem-group">
            <label for="email">Your E-mail:</label>
            <input type="email" id="email" name="email" required="" />
          </div>
          <div className="elem-group">
            <label for="message">Write your message:</label>
            <textarea
              id="message"
              name="message"
              placeholder=""
              required=""
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
