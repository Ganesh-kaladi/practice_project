import {Routes,Route} from 'react-router-dom'
import { Fragment } from 'react';
import { HomePage } from './pages/homepage';
import { Loginpage } from './pages/loginpage';
import { Registerpage } from './pages/registerpage';
import { Dashboardpage } from './pages/dashboard';


function App() {
  return (
   <Fragment>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Loginpage />} />
      <Route path='/register' element={<Registerpage />} />
      <Route path='/dashboard' element={<Dashboardpage />} />
    </Routes>
   </Fragment>
  );
}

export default App;
