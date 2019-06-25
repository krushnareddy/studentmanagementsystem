export function addStudent(student){
    return{
        type:"ADD_STUDENT",
        student
    }
}

export function removeStudent(id){
    return{
        type:"DELETE_STUDENT",
        id
    }
}


