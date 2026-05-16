import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { QueryProvider } from "./QueryProvider";
import AppRoutes from "./routes/app.routes";

function App() {
  useEffect(() => {
    // const script = document.createElement("script");
    // script.src = "https://js.paystack.co/v1/inline.js";
    // script.async = true;
    // document.body.appendChild(script);

    const flutterScript = document.createElement("script");
    flutterScript.src = "https://checkout.flutterwave.com/v3.js";
    flutterScript.async = true;
    document.body.appendChild(flutterScript);
  }, []);

  return (
    <QueryProvider>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: "10px",
            fontSize: 14,
          },
        }}
      />

      <AppRoutes />
    </QueryProvider>
  );
}

export default App;
