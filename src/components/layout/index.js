import { Outlet } from 'react-router-dom';
import NavBar from '../navbar';
import './index.scss';

export default function Layout(){
    return(
        <div className='app'>
            <div className='page'>
                <Outlet/>
            </div>
            <NavBar />
        </div>
    )
}