import {Routes, Route} from 'react-router-dom';
import ContestForm from '../ContestForm/ContestForm';
import ContestPage from '../ContestPage/ContestPage';
import Home from '../Home/Home';
import StudentForm from '../StudentForm/StudentForm';
import StudentPage from '../StudentPage/StudentPage';

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path = '/' exact element = {<Home/>}/>
                <Route path = '/contestForm' element = {<ContestForm/>}/>
                <Route path = '/studentForm' element = {<StudentForm/>}/>
                <Route path = '/allContest' element = {<ContestPage/>}/>
                <Route path = '/allStudent' element = {<StudentPage/>}/>
            </Routes>
        </div>
    )
}

export default AppRoutes;