import React from "react";
import ReactDOMClient from "react-dom/client";
import { Home } from "./screens/Home";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Home />);
