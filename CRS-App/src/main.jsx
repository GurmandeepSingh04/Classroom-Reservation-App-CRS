import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import Context from "./components/UserContext.jsx";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Context>
        <App />
      </Context>
    </QueryClientProvider>
  </React.StrictMode>
);
