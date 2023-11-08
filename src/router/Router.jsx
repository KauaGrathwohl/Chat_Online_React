import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../login/Login";
import Chat from "../chat/Chat";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )

}


export default Router