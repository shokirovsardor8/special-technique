
import {Route, Routes} from 'react-router-dom';
import SignIn from './SignIn';
import Main from './Main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
