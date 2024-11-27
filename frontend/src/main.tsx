import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import { Route } from 'react-router';
import { Routes } from 'react-router';
import { RetrieveData } from './retrieve.tsx';
import { Home } from './home.tsx';

createRoot(document.body).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/:id" element={<RetrieveData />} />
    </Routes>
  </BrowserRouter>
);