import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "@/contexts/ThemeProvider.tsx";
import { RouterProvider } from "react-router";
import { router } from "./routes";



createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider>
          <RouterProvider router={router} />
      </ThemeProvider>
  </StrictMode>,
)
