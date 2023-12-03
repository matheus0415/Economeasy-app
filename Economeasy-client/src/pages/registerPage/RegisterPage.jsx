import { Formik } from 'formik'
import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


const RegisterPage = () => {

    

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
                        else if (!values.password) {
                            errors.password = 'Campo obrigatorio!';
                        }
                        else if (!values.passwordConfirm) {
                            errors.passwordConfirm = 'Campo obrigatorio!';
                        }
                        else if (values.password != values.passwordConfirm){
                            errors.passwordConfirm = 'As senhas não correspondem!'
                        }
                        return errors;
                    }}
                    
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
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
                            <h1>Registrar</h1>
                            <form onSubmit={handleSubmit}>
                                <div className='textfield'>
                                    <label >Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        placeholder='exemplo@email.com'
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
                                <div className='textfield'>
                                <label >Confirmar Senha</label>
                                    <input
                                        type="password"
                                        name="passwordConfirm"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.passwordConfirm}
                                        placeholder='********'
                                    />
                                    <span>
                                    {errors.passwordConfirm && touched.passwordConfirm && errors.passwordConfirm}
                                    </span>
                                </div>
                                <button className="btn-login" type="submit" disabled={isSubmitting}>
                                    Cadastrar
                                </button>
                            </form>
                            <p>Já possui uma conta? <Link to="/loginPage">Acesse aqui</Link></p>
                        </div>
                    )}
                </Formik>

            </div>
        </div>

    )
}

export default RegisterPage