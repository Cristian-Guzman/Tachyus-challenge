import { Dashboard } from 'Components/Dashboard';
import { Home } from 'Components/index';
import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/grid/:type" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
