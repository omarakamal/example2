import {useEffect,useState} from 'react'
import axios from 'axios'

function Students() {
    const [students,setStudents] = useState([])
    axios.get('https://omar-class-api.adaptable.app/students')
    .then((res)=>{
        setStudents(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
  return (
    <div>
        {students.map((student)=>{
            return(
                <div key={student.id}>
                    <h1>{student.name}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default Students