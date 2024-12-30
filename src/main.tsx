import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./routes/index.tsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <Theme>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </Theme>
);
