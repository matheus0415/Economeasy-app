import React from "react";
import Main from '../template/Main'

import Logo from '../template/Logo'
import Nav from '../template/Nav'
import Footer from '../template/Footer'

export default props =>
    <>
        <Logo />
        <Nav />
        <Main >

            <div className="display-4">Bem Vindo a Economeasy!</div>
            <hr />
            <p className="mb-0">Seu App de controle financeiro.</p>
        </Main>
        <Footer />
    </>