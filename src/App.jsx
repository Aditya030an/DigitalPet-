// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./Component/navbar.jsx";
// import Home from "./Component/Home";
// import Footer from "./Component/Footer.jsx";
// import Contact from "./Component/Contact.jsx";
// import Testimonial from "./Component/testimonial.jsx";
// import { FeedbackProvider } from "./context/FeedbackContext";
// import Landingpage from "./Component/Landingpage.jsx";
// import BookConsultation from "./Component/BookConsultations.jsx";
// import Before from "./Component/Before.jsx";
// import Terms from "./Component/Terms.jsx";
// import Privacy from "./Component/privacy.jsx";
// import Confirmation from "./Component/success.jsx";
// import PaymentFailed from "./Component/fail.jsx";
// import Rateus from "./Component/Rateus.jsx";
// import Services from "./Component/Services.jsx";
// import Blogs from "./Component/Blogs.jsx";
// import BlogDetails from "./Component/BlogDetails.jsx";
// import ProtectedRoute from "./Component/ProtectedRoute.jsx";
// import Login from "./Component/Login.jsx";
// import Signup from "./Component/Signup.jsx";
// function App() {
//   return (
//     <FeedbackProvider>
//       <Router>
//         <div>
//           <Navbar />

//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />

//             <Route
//               path="/"
//               element={
//                 <ProtectedRoute>
//                   <Home />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/Contact"
//               element={
//                 <ProtectedRoute>
//                   <Contact />{" "}
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/Testimonial"
//               element={
//                 <ProtectedRoute>
//                   <Testimonial />{" "}
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/Landingpage"
//               element={
//                 <ProtectedRoute>
//                   {" "}
//                   <Landingpage />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/Before"
//               element={
//                 <ProtectedRoute>
//                   <Before />{" "}
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/BookConsultation"
//               element={
//                 <ProtectedRoute>
//                   <BookConsultation />{" "}
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/Terms"
//               element={
//                 <ProtectedRoute>
//                   <Terms />{" "}
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/Privacy"
//               element={
//                 <ProtectedRoute>
//                   {" "}
//                   <Privacy />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/payment-success"
//               element={
//                 <ProtectedRoute>
//                   <Confirmation />{" "}
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/payment-fail"
//               element={
//                 <ProtectedRoute>
//                   {" "}
//                   <PaymentFailed />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/Services"
//               element={
//                 <ProtectedRoute>
//                   <Services />{" "}
//                 </ProtectedRoute>
//               }
//             />
//             {/* <Route path="/Blogs" element={<Blogs />} /> */}
//             <Route
//               path="/Blogs"
//               element={
//                 <ProtectedRoute>
//                   <Blogs />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/blogs/:id"
//               element={
//                 <ProtectedRoute>
//                   <BlogDetails />
//                 </ProtectedRoute>
//               }
//             />
//           </Routes>

//           <Footer />
//         </div>
//       </Router>
//     </FeedbackProvider>
//   );
// }

// export default App;






import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Component/navbar.jsx";
import Footer from "./Component/Footer.jsx";

import Home from "./Component/Home.jsx";
import Landingpage from "./Component/Landingpage.jsx";
import Services from "./Component/Services.jsx";
import Blogs from "./Component/Blogs.jsx";
import BlogDetails from "./Component/BlogDetails.jsx";
import Contact from "./Component/Contact.jsx";
import Testimonial from "./Component/testimonial.jsx";
import Terms from "./Component/Terms.jsx";
import Privacy from "./Component/privacy.jsx";

import Login from "./Component/Login.jsx";
import Signup from "./Component/Signup.jsx";

import BookConsultation from "./Component/BookConsultations.jsx";
import Confirmation from "./Component/success.jsx";
import PaymentFailed from "./Component/fail.jsx";
import Before from "./Component/Before.jsx";
import Rateus from "./Component/Rateus.jsx";

import ProtectedRoute from "./Component/ProtectedRoute.jsx";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Navbar />

        <Routes>
          {/* ================= PUBLIC ROUTES ================= */}
          <Route path="/" element={<Home />} />
          <Route path="/Landingpage" element={<Landingpage />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Privacy" element={<Privacy />} />

          {/* ================= AUTH ROUTES ================= */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* ================= PROTECTED ROUTES (OWNER / ADMIN) ================= */}
          <Route
            path="/BookConsultation"
            element={
              <ProtectedRoute>
                <BookConsultation />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Before"
            element={
              <ProtectedRoute>
                <Before />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Rateus"
            element={
              <ProtectedRoute>
                <Rateus />
              </ProtectedRoute>
            }
          />

          <Route
            path="/payment-success"
            element={
              <ProtectedRoute>
                <Confirmation />
              </ProtectedRoute>
            }
          />

          <Route
            path="/payment-fail"
            element={
              <ProtectedRoute>
                <PaymentFailed />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Footer />
      </Router>
    </FeedbackProvider>
  );
}

export default App;