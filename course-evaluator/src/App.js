import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Home from './components/Home/Home';
import NotFound from './components/Shared/NotFound';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import RetrievePassword from './components/Authentication/RetrievePassword';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Dashboard/Profile/Profile';
import UpdateProfileS from './components/Dashboard/Profile/UpdateProfileS';
import CourseEvaluation from './components/Dashboard/Course/CourseEvaluation';
import ViewSurveyResponses from './components/Dashboard/Course/ViewSurveyResponses';
import StudentList from './components/Dashboard/User/StudentList';
import TeacherList from './components/Dashboard/User/TeacherList';
import SuperAdminList from './components/Dashboard/User/SuperAdminList';
import Statistics from './components/Dashboard/Admin/Statistics';
import AddNewCourse from './components/Dashboard/Form/AddNewCourse';
import AddNewNotice from './components/Dashboard/Form/AddNewNotice';
import AddNewsAndEvents from './components/Dashboard/Form/AddNewsAndEvents';
import CourseList from './components/Dashboard/Course/CourseList';
import NoticeList from './components/Dashboard/Admin/NoticeList';
import CourseEvaluationSurvey from './components/Dashboard/Course/CourseEvaluationSurvey';
import ViewSurveyResponsesData from './components/Dashboard/Course/ViewSurveyResponsesData';
import NewsEventList from './components/Dashboard/Admin/NewsEventList';
import UpdateProfile from './components/Dashboard/Profile/UpdateProfile';
import ParticularUserDetails from './components/Dashboard/User/ParticularUserDetails';
import RequireAuth from './components/Authentication/RequireAuth';

function App() {
  return (
    <div className="App text-secondary">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/retrieve-password' element={<RetrievePassword></RetrievePassword>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<Profile></Profile>}></Route>
          <Route path='update-profile' element={<UpdateProfile></UpdateProfile>}></Route>
          <Route path='update-profile-s' element={<UpdateProfileS></UpdateProfileS>}></Route>
          <Route path='notice-list' element={<NoticeList></NoticeList>}></Route>
          <Route path='news_event-list' element={<NewsEventList></NewsEventList>}></Route>
          <Route path='course-list' element={<CourseList></CourseList>}></Route>
          <Route path='course-evaluation' element={<CourseEvaluation></CourseEvaluation>}></Route>
          <Route path='course-evaluation/:courseSurveyId' element={<CourseEvaluationSurvey></CourseEvaluationSurvey>}></Route>
          <Route path='view-survey-responses' element={<ViewSurveyResponses></ViewSurveyResponses>}></Route>
          <Route path='view-survey-responses/:responseDataId' element={<ViewSurveyResponsesData></ViewSurveyResponsesData>}></Route>
          <Route path='student-list' element={<StudentList></StudentList>}></Route>
          <Route path='student-list/:userDetailsId' element={<ParticularUserDetails></ParticularUserDetails>}></Route>
          <Route path='teacher-list' element={<TeacherList></TeacherList>}></Route>
          <Route path='teacher-list/:userDetailsId' element={<ParticularUserDetails></ParticularUserDetails>}></Route>
          <Route path='super-admin-list' element={<SuperAdminList></SuperAdminList>}></Route>
          <Route path='super-admin-list/:userDetailsId' element={<ParticularUserDetails></ParticularUserDetails>}></Route>
          <Route path='statistics' element={<Statistics></Statistics>}></Route>
          <Route path='add-new-course' element={<AddNewCourse></AddNewCourse>}></Route>
          <Route path='add-new-notice' element={<AddNewNotice></AddNewNotice>}></Route>
          <Route path='add-news-and-events' element={<AddNewsAndEvents></AddNewsAndEvents>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
