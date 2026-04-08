import { Toaster } from "react-hot-toast";
import "./App.css";
import { QueryProvider } from "./QueryProvider";
import AppRoutes from "./routes/app.routes";

function App() {
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
