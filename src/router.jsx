import Contact from "./routes/contact.jsx";
import About from "./routes/about.jsx";
import Home from "./routes/home.jsx";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: ":slug", element: <App /> },
]);
