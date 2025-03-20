import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import TrackOrder from './components/TrackOrder/TrackOrder.jsx';
import RequestQuote from './components/RequestQuote/RequestQuote.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import Contact from './components/Contact/Contact.jsx';
import SignIn from './components/Auth/LoginForm.jsx';
import SignUp from './components/Auth/SignupForm.jsx';
import Map from './components/Map.jsx';
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="trackorder" element={<TrackOrder />} />
      <Route path="requestquote" element={<RequestQuote />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="map/:timeslot/:index" element={<Map />} /> {/* ✅ Updated route to match URL pattern */}
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider> {/* Wrap your app with ThemeProvider */}
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);