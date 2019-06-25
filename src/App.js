import React from 'react';
import './App.css';
import Headers from './studentcomponent/header'
import LeftNav from './studentcomponent/lef-nav'
import {BrowserRouter} from 'react-router-dom'
import AddStudent from './studentcomponent/addStudent'
import StudentList from './studentcomponent/studentList'
import {Route} from 'react-router-dom';
import { WrapperComponent,WrapperComponentadd } from './studentcomponent/wrapperComponent';


function App() {
  return (
    <div>
      <BrowserRouter>
    <Headers />
    <div className="row">
      <div className="col-lg-4">
    <LeftNav />
    </div>
    <div className="col-lg-6">
    <Route path="/add" exact component={WrapperComponentadd}/>
    <Route path="/list" exact component={WrapperComponent}/>
    </div>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
