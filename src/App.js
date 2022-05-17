
import Main from './pages/Main';
import {Route, Routes} from 'react-router-dom';
import { ToastContainer } from 'react-bootstrap';
import SignIn from './SignIn';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
