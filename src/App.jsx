import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Puja from "./Components/Puja/Puja";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Cancellation from "./Components/Cancellation-refund-policy/Cancellation";
import TermCondition from "./Components/Terms-and-conditions/Term&Condition";
import PrivacyPolicy from "./Components/Privacy-policy/PrivacyPolicy";
import ReviewsForm from "./Components/Home/reviesForm";
import Signup from "./Components/Login/signup";
import PujaForm from "./Components/Login/pujaForm";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/puja" element={<Puja />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       
        <Route path="/cancellation" element={<Cancellation />} />{" "}
        <Route path="/Term&Condition" element={<TermCondition />} />{" "}
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/reviews-form" element={<ReviewsForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pujaForm" element ={<PujaForm/>}  />
      </Routes>
    </Router>
  );
};

export default App;
