import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App.tsx";
import {AuthProvider} from "./context/AuthContext.tsx";
import { QueryProvider } from "./lib/react-query/QueryProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <QueryProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryProvider>
  </HashRouter>
);
