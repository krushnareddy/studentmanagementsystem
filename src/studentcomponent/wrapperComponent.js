import {connect} from 'react-redux';
import StudentList from './studentList';
import {bindActionCreators} from 'redux';
import AddStudent from './addStudent'
import {addStudent} from '../redux/actions';
import {removeStudent} from '../redux/actions';


function mapStateToProps(state){
    return {
      students:state
    }
  }
  
  function addDispatchToProps(dispatch){
    return bindActionCreators({addStudent}, dispatch)
  }

  function deleteStudentBYID(dispatch){
    return bindActionCreators({removeStudent}, dispatch)
  }  
  
  export const WrapperComponent = connect(mapStateToProps,deleteStudentBYID)(StudentList)
  export const WrapperComponentadd = connect(mapStateToProps,addDispatchToProps)(AddStudent)
  //export const WrapperComponentdelete = connect(mapStateToProps,n)(StudentList)
