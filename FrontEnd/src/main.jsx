import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './services/store/Store.js'
import { BrowserRouter } from 'react-router'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { attachAxiosStore } from './services/axiosClient.js'
import { ClerkProvider } from '@clerk/clerk-react'

attachAxiosStore(store);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  console.warn("Missing VITE_CLERK_PUBLISHABLE_KEY in FrontEnd/.env")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>,
)
