import React from "react";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRecibos from "../routes/AppRecibos";

import { Giros } from "./iu/Form/Categories/Giros";
import NavbarApp from "./iu/Nav/NavbarApp";
import ContainerRecibos from "./iu/Recibos/TablasOFRecibos/ContainerRecibos";
import Form from "./iu/Form/Form";
import { ViewDetailRecibo } from "../routes/ViewDetailRecibo";
import { Login } from "../routes/Login";
import { Registro } from "../routes/Registro";
import { RecoveyPassword } from "../routes/RecoveyPassword";
import { ChangePassword } from "../routes/ChangePassword";
import { UserContextProvider } from "../context/userContext";

export default function App() {
  return (
    <HashRouter>
      <UserContextProvider>
          <NavbarApp />
          <div className="container mt-1 mb-4">
            <Routes>
              <Route path="/" element={<AppRecibos/>} />
              <Route path="/recibos/:type" element={<ContainerRecibos/>}  />
              <Route path="/add-recibo" element={<Form/>} />
              <Route path="/ver-recibo" element={<Giros/>} />
              {/* <Route path='/venezuela'element={<Venezuela/>}/> */}
              <Route path="/view-recibo/:receipt" element={<ViewDetailRecibo />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/recovery-password" element={<RecoveyPassword/>}/>
              <Route path="/change-password/:token" element={<ChangePassword/>}/>
              <Route path="*" element={<p>Not Fount</p>} />
            </Routes>
          </div>
      </UserContextProvider>
    </HashRouter>
  );
}
