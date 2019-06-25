import courses from '../studentData/studentData';

let rootReducer = function(currentState = courses, action){
    switch(action.type){
        case 'ADD_STUDENT':
                return addStudentArray(currentState,action.student);
        case 'DELETE_STUDENT':
                return removeStudentbyid(action.id, currentState);
        default:
            return currentState        
    }
}


function addStudentArray(currentState,student){
    console.log([...currentState,student])
    return [...currentState,student]
    
 }


 function removeStudentbyid(id, state){
    
    return state.filter(state => state.id !== id)
  
}

export default rootReducer;

