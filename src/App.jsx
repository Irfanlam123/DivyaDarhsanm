import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Puja from "./Components/Puja/Puja";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Participate from "./Components/Home/Components/participate";
import Cancellation from "./Components/Cancellation-refund-policy/Cancellation";
import TermCondition from "./Components/Terms-and-conditions/Term&Condition";
import PrivacyPolicy from "./Components/Privacy-policy/PrivacyPolicy";
import ReviewsForm from "./Components/Home/reviesForm";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/puja" element={<Puja />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:id" element={<Participate />} />
        <Route path="/cancellation" element={<Cancellation />} />{" "}
        <Route path="/Term&Condition" element={<TermCondition />} />{" "}
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/reviews-form" element={<ReviewsForm />} />
      </Routes>
    </Router>
  );
};

export default App;
