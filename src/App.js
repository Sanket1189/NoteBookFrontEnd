
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoteState from './Context/NoteState';
import FirstPage from './Components/FirstPage';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import ApiState from './Context/ApiState';
import Testing from './Components/Testing';
import SignUpState from './Context/SignUpState';
import NotePage from './Components/NotePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <BrowserRouter>
        <NoteState>
          <ApiState>
            <SignUpState>


              <Routes>
                <Route exact path='/' element={<FirstPage />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<SignUp />} />
                <Route exact path='/testing' element={<Testing />} />
                <Route exact path='/notepage' element={<NotePage />} />


              </Routes>

            </SignUpState>
          </ApiState>
        </NoteState>
      </BrowserRouter>
    </>
  );
}

export default App;
