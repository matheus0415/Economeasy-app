import { Formik } from 'formik'
import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Axios from 'axios'

const LoginPage = () => {

    const handleClickLogin = (values) => {
        Axios.post("https://localhost:3003/login", {
            email: values.email,
            password: values.password,
        }).then((response) => {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });;
    }


    return (
        <div className='main'>

            <div className='card-login'>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Campo obrigatorio!';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Email inválido!';
                        }
                        return errors;
                    }}
                    
                    onSubmit={handleClickLogin}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <div className='card'>
                            <h1>Login</h1>
                            <form onSubmit={handleSubmit}>
                                <div className='textfield'>
                                    <label >Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        placeholder='example@email.com'
                                        />
                                    <span>
                                    {errors.email && touched.email && errors.email}
                                    </span>
                                </div>
                                <div className='textfield'>
                                <label >Senha</label>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        placeholder='********'
                                    />
                                    <span>
                                    {errors.password && touched.password && errors.password}
                                    </span>
                                </div>
                                <button className="btn-login" type="submit" disabled={isSubmitting}>
                                    Entrar
                                </button>
                            </form>
                            <p>Ainda não possui uma conta? <Link to="/registerPage">Clique aqui para se registrar</Link></p>
                        </div>
                    )}
                </Formik>

            </div>
        </div>

    )
}

export default LoginPage