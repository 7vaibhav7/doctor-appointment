import React from 'react'


import Home from '../pages/Home'
import Services from '../pages/Services'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import Doctors from '../pages/Doctors/Doctors'
import Contact from '../pages/Contact'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import ServiceList from '../components/Services/ServiceList'

import {Routes,Route} from 'react-router-dom'



const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path='/'  element ={<Home />  } />
            <Route path='/home'  element ={<Home />  } />
            <Route path='/doctors'  element ={<Doctors />  } />
            <Route path='/doctors/:id'  element ={< DoctorDetails />  } />
            <Route path='/contact'  element ={< Contact/>  } />
            <Route path='/login'  element ={< Login/>  } />
            <Route path='/signup'  element ={< Signup/>  } />
            <Route path='/services'  element ={<ServiceList />  } />
        </Routes>
      
    </div>
  )
}

export default Routers
