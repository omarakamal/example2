
import './App.css'
import {Routes,Route} from 'react-router-dom'
import StudentDetails from './pages/StudentDetails'
import Students from './pages/Students'

function App() {

  return (
    <>
      <Routes>
        <Route path='/students/:id' element={<StudentDetails/>}></Route>
        <Route path='/students' element={<Students/>}></Route>
      </Routes>
    </>
  )
}

export default App
