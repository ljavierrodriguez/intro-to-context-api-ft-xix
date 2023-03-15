import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { GlobalUserContext } from '../context/UserContext';

const Home = () => {
    const { user } = useContext(GlobalUserContext);

    const navigate = useNavigate();

    useEffect(() => {
        if(!user?.isAuth){
            navigate('/login');
        }
    }, [])

    useEffect(() => {
        if(!user?.isAuth){
            navigate('/login');
        }
    }, [user])

  return (
    <div>Home</div>
  )
}

export default Home