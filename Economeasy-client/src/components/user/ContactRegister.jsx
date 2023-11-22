import React, { Component } from "react";
import axios from 'axios';
import Main from "../template/Main";


const headerProps = {
    icon: 'user',
    title: 'Contato',
    subtitle: 'Fale conosco.'

}

const baseUrl = 'http://localhost:3001/api/services'
const initialState = {
    person: { name: '', email: '', phone: '', content: '' },
    list: []
}

export default class ContactRegister extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ person: initialState.person })
    }

    save(event) {
        event.preventDefault();
        if (this.validateForm()) {
            const person = this.state.person
            const method = person.id ? 'put' : 'post'
            const url = person.id ? `${baseUrl}/${person.id}` : baseUrl
            console.log(url)
            axios[method](url, person)
                .then(resp => {
                    this.setState({ person: initialState.person })
                })
            alert('Obrigado! Entraremos em contato em breve!')
        }
    }

    updateField(event) {
        const person = { ...this.state.person }
        person[event.target.name] = event.target.value
        this.setState({ person })

        const errorMessage = event.target.nextElementSibling
        if (errorMessage && errorMessage.classList && errorMessage.classList.contains('error-message')) {
            if (!event.target.validity.valid) {
                errorMessage.style.display = 'block'
            } else {
                errorMessage.style.display = 'none'
            }
        }
    }

    validateFormName(name) {
        
        if (name === '') {
            const errorMessage = document.querySelector('input[name="name"] + .error-message')
            errorMessage.style.display = 'block'
            return errorMessage;
        }
        return null
    }

    validateFormEmail(email) {
        
        if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
            const errorMessage = document.querySelector('input[name="email"] + .error-message')
            errorMessage.style.display = 'block'
            return false;
        }
        return null
    }

    validateFormPhone(phone) {
        
        if (!/^[0-9]{10,11}$/.test(phone)) {
            const errorMessage = document.querySelector('input[name="phone"] + .error-message')
            errorMessage.style.display = 'block'
            return false;
        }
        return null
    }

    validateForm() {
        const { name, email, phone } = this.state.person;
        
        if(this.validateFormName(name) != null) {
            alert(`Erro no campo Nome!`)
            return false;
        }
        if(this.validateFormEmail(email) != null) {
            alert(`Erro no campo E-mail!`)
            return false;
        }
        if(this.validateFormPhone(phone) != null) {
            alert(`Erro no campo Telefone!`)
            return false;
        }
        return true;
    }

    


    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome*:</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.person.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                            <span className="error-message" style={{ display: 'none', color: 'red' }}>
                                Por favor, preencha o campo obrigatório.
                            </span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail*:</label>
                            <input type="email" className="form-control" required maxlength="50" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                title="Insira um endereço de e-mail válido"
                                name="email"
                                value={this.state.person.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o e-mail..." />
                            <span className="error-message" style={{ display: 'none', color: 'red' }}>
                                Por favor, insira um endereço de e-mail válido.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Telefone*:</label>
                            <input type="tel" pattern="[0-9]{10,11}" className="form-control" required
                                name="phone"
                                value={this.state.person.phone}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o telefone..." />
                            <span className="error-message" style={{ display: 'none', color: 'red' }}>
                                Por favor, insira um número de telefone válido (somente números, com DDD).
                            </span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Mensagem:</label>
                            <textarea type="text" className="form-control" rows="5" maxlength="250"
                                name="content"
                                value={this.state.person.content}
                                onChange={e => this.updateField(e)}
                                placeholder="Deixe sua mensagem..." />
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ms-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(person) {
        this.setState({ person })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}