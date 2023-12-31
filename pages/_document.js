import { Html, Head, Main, NextScript } from "next/document";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navigation />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
