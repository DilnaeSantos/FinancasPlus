// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from './style/GlobalStyle'
import LandingPage from './pages/LandingPage/LandingPage'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import Dashboard from './pages/Dashboard/Dashboard'
import Transacoes from './pages/Transacoes/Transacoes'
import QuemSomos from './pages/QuemSomos/QuemSomos'

const Rotas = () => {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/transacoes/:id' element={<Transacoes />} />
                <Route path='/QuemSomo' element={<QuemSomos />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas