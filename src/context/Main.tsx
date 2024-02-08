import { Routes, Route } from 'react-router-dom'

import { Sidebar } from '../components/Navigation.tsx'
import Profile from './Profile.tsx'

import '../assets/css/Main.css'

export default function Main() {
    return(
        <main className={`flex w-full h-fit font-JetBrains bg-background`}>
            <Sidebar/>
            <Routes>
                <Route path='/' element={<Profile />}/>
            </Routes>
        </main>
    )
}