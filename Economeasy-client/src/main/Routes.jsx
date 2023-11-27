import { Navigate, Routes, Route } from 'react-router-dom'

import Home  from '../components/home/Home'
import ContactRegister from "../components/user/ContactRegister";
import LoginPage from '../pages/loginPage/LoginPage'

export default function RoutesApp () {
    return (
        <Routes>
            <Route path='/' element={<LoginPage/>} />
            <Route path='home' element={<Home/>} />
            <Route path='/contact' element={<ContactRegister/>} />
            <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
    )
        
} 
