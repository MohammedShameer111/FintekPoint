import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Title from "./components/Title/Title";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Foot1 from "./components/Foot1/Foot1";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Foot2 from "./components/Foot2/Foot2";
import Programs from "./components/Programs/Programs";
import Form from "./pages/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Navbar />
                        <Hero />
                        <div className="container">
                          <Title subTitle="Our PROGRAM" title="What We Offer" />
                          <Programs />
                          {/* <About/>  */}
                          <Title subTitle="Gallery" title="Campus Photos" />
                          <Campus />
                          <Title
                            subTitle="Our COURSES"
                            title="Find a Career that fits your Goal"
                          />
                          <Testimonials />
                          <Title subTitle="Contact US" title="Get in Touch" />
                          {/* <Contact/> */}
                        </div>
                        <Foot1 />
                        <Foot2 />
                      </>
                    }
                  />
                </Routes>
              </>
            }
          ></Route>
      
        </Routes>
        <Routes>
        <Route path="/form" element={<Form/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
