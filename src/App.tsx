import "./App.css";
import { QueryProvider } from "./QueryProvider";
import AppRoutes from "./routes/app.routes";

function App() {
  return (
    <QueryProvider>
      <AppRoutes />
    </QueryProvider>
  );
}

export default App;
