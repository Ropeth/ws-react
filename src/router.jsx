import Literacy from "./routes/Literacy.jsx";
import Contact from "./routes/contact.jsx";
import About from "./routes/about";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/literacy", element: <Literacy /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);
