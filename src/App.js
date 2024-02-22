// App.js
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import FeedbackForm from './components/FeedbackForm';

const App = () => {
 return (
    <>
    <Navbar/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/feedbackform" element={<FeedbackForm />} />
          
       </Routes>
    </>
 );
};

export default App;