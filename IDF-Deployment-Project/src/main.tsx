import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {DeploymentProvider} from "./context/DeploymentContext"

createRoot(document.getElementById('root')!).render(
  <DeploymentProvider>
    <App />
  </DeploymentProvider>,
)
