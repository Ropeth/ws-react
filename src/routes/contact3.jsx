import Footer from "../components/footer";
import Header from "../components/header";
import { useForm, ValidationError } from "@formspree/react";
import { toast, Toaster } from "sonner";

export default function Contact() {
  //   Replace 'YOUR_FORM_ID' with the ID from your Formspree dashboard
  const [state, handleSubmit] = useForm("xeedpbpq");
  if (state.succeeded) {
    //   return <p>Thanks for joining!</p>;
    toast.success("Thanks for reaching out!");
  }

  return (
    <div id="root">
      <Header />
      <div id="main" className="symmetrical">
        <div className="info">
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
              <strong>
                If you know a successful method of holding water in the ground
                or of a community, in any part of the world, that is using
                successful methods of landscape water retention, please send us
                an email and introduce them to us and us to them.
              </strong>
            </em>
          </p>
        </div>
        <form onSubmit={handleSubmit} id="contact-form">
          <Toaster richColors />
          <div className="elem-group">
            <label htmlFor="name">Your name:</label>
            <input id="name" type="text" name="name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="elem-group">
            <label htmlFor="email">Your email:</label>
            <input id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="elem-group">
            <label htmlFor="message">Your message:</label>
            <textarea id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
