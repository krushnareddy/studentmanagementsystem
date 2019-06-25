import React from 'react';
import students from '../studentData/studentData'



class StudentList extends React.Component{

    // constructor(props){
    //     super(props);
    // }
   // console.log(students);
    render(){
        console.log(this.props);
        return(
            
            <table id="example" className="table table-striped table-bordered" >
                 <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Position</th>
                <th>Action</th>
                
            </tr>
        </thead>
            <tbody>
            {
                  this.props.students.length > 0 ? (
                     
                     
                    this.props.students.map(student =>
                        <tr key={student.id}>
                            <td>{student.id}</td> 
                            <td>{student.studentName}</td>
                            <td>{student.studentGrade}</td>
                            <td><button type="button" className="btn btn-primary">Update</button>&nbsp;<button type="button" className="btn btn-danger" id={student.id}
                                  key={student.id} onClick={()=>{this.props.removeStudent(student.id)}}>Delete</button></td>
                        </tr>)
                     
                    
                  ): <h1> There are no Courses for Display </h1>
              }
                </tbody>
            </table>
        )
    }
}
export default StudentList;