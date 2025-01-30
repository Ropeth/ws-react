import Contact from "./routes/contact.jsx";
import About from "./routes/about.jsx";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: ":slug", element: <App /> },
]);
