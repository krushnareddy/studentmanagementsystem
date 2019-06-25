import React from 'react';

class AddStudent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
          id:'',
          studentName:'',
          studentGrade:'',         
          invalidstudentName:'',
          invalidGrade:'',
          invalidDuration:''
        }
        this.handleCourseNameChange = this.handleCourseNameChange.bind(this);
        this.handleCourseGradeChange = this.handleCourseGradeChange.bind(this);       
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleCourseNameChange(event){
        console.log(event.target.value);
        let studentName = event.target.value;
        this.setState({
            studentName:event.target.value
        })
        if(studentName.length < 8 ){
          this.setState({
            invalidstudentName:'Name Should be 4 - 8 Digits'
          })
        }else{
          this.setState({
            invalidstudentName:''
          })
        }
      }

      handleCourseGradeChange(event){
        console.log(event.target.value);
        let studentGrade = event.target.value;
        this.setState({
            studentGrade:event.target.value
        })
        if(studentGrade === ''){
          this.setState({
            invalidGrade:'Please Select Grade'
          })
        }else{
          this.setState({
            invalidGrade:''
          })
        }
      }

      handleSubmit(event){
        event.preventDefault();
        console.log(this.props);
        const student = {};
         
          student.id = this.props.students.length + 1;
          student.studentName = event.target.studentName.value;
          student.studentGrade = event.target.studentGrade.value;
         
    
          this.props.addStudent(student);
        
         
    }
    render(){
        return(
            <div>
                 <form onSubmit={(event)=> this.handleSubmit(event)}>
                  <div className="form-group">
                    <label className="control-label col-sm-2" >Student Name:</label>
                    <div className="col-sm-8">
                      <input type="text" 
                        className="form-control" 
                        id="courseName" 
                        placeholder="Enter Student Name" 
                        name="studentName"
                        onChange={(event)=> this.handleCourseNameChange(event)}/>
                    </div>
                  </div>  
                  <div>
                            { this.state.invalidstudentName ? (<span className="alert alert-danger">{this.state.invalidstudentName}</span>)
                                                           :''
                            }
                            
                        </div>         
                  <div className="form-group">
                        <label className="control-label col-sm-2" >Student Grade:</label>
                        <div className="col-sm-8">          
                          <select className="from-group custom-select" name="studentGrade" onClick={(event)=> this.handleCourseGradeChange(event)}>
                              <option value="">Select Grade</option>  
                              <option value="A">A</option>
                              <option value="B">B</option>
                              <option value="C">C</option>
                          </select>
                        </div>
                    </div>
                    <div>
                            { this.state.invalidGrade ? (<span className="alert alert-danger">{this.state.invalidGrade}</span>)
                                                           :''
                            }
                            
                        </div>     
                  
                    
                  <div className="form-group">        
                    <div className="col-sm-offset-2 col-sm-8">
                      <button type="submit" id="add_products"  className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </form>
            </div>
        );
    }


}
export default AddStudent;
