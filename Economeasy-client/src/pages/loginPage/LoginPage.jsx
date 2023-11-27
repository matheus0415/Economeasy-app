import React from "react";
import './style.css';

export default props =>
    <>
        <div class="main">
            <div class="title">
                <h1>Economeasy</h1>
            </div>
            <div class="card-login">
                <div class="card">
                    <h1>LOGIN</h1>
                    <div class="textfield">
                        <label for="usuario">Usuário</label>
                        <input type="text" name="usuario" placeholder="Usuário" />
                    </div>
                    <div class="textfield">
                        <label for="senha">Senha</label>
                        <input type="password" name="senha" placeholder="Senha" />
                    </div>
                    <button class="btn-login">Login</button>
                </div>

            </div>
        </div>
    </>