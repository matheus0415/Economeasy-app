import { Navigate, Routes, Route } from 'react-router-dom'

import Home  from '../components/home/Home'
import LoginPage from '../pages/loginPage/LoginPage'
import RegisterPage from '../pages/registerPage/RegisterPage';

export default function RoutesApp () {
    return (
        <Routes>
            <Route path='/' element={<RegisterPage/>} />
            <Route path='/loginPage' element={<LoginPage/>} />
            <Route path='/registerPage' element={<RegisterPage/>} />
            <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
    )
        
} 
