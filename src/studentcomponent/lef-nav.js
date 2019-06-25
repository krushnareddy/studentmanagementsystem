import React from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import AddStudent from './addStudent';


class LeftNav extends React.Component{

    render(){
        return(
            <div>
              
<nav className="col-md-6 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
          &nbsp;
            <ul className="nav flex-column">
              <li className="nav-item" style={{ paddingBottom: '12px'}}>
              <NavLink  activeStyle={{color:'green'}} exact to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  &nbsp;Dashboard <span className="sr-only">(current)</span>
              </NavLink>
              </li>
            
              <li className="nav-item"  style={{ paddingBottom: '12px'}}>
              <NavLink  activeStyle={{color:'green'}} exact to="/add">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  &nbsp;Add Students
                  </NavLink>
              </li>
              <li className="nav-item"  style={{ paddingBottom: '12px'}}>
              <NavLink  activeStyle={{color:'green'}} exact to="/list">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                  &nbsp;List Student
               </NavLink>
              </li>
             
            </ul>        
            
          </div>
         
        </nav>
        {/* <div className="row">
             <Route path="/add" exact component={AddStudent}/>
        </div> */}
        </div>
        )
    }
}

export default LeftNav;