import React, { useEffect } from "react";

const MyComponent = () => {
  useEffect(() => {
    // Check if the code is running in the browser (client-side)
    if (typeof document !== "undefined") {
      // Access the document object safely
      document.title = "New Page Title";
    }
  }, []);

  return <div>{/* Your component's content */}</div>;
};

export default MyComponent;
