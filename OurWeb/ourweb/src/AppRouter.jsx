/* eslint-disable no-unused-vars */
// src/AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import WebApp from './Pages/WebApp.jsx';
import MobileApp from './Pages/MobileApp.jsx';
import SoftwareApp from './Pages/SoftwareApp.jsx';
import AISolution from './Pages/AISolution.jsx';
import MLSolution from './Pages/MLSolution.jsx';
import SaasSolution from './Pages/SaaSSolutions.jsx';
import ManagedServices from './Pages/ManagedServices.jsx';
import EnterpriseSolution from './Pages/EnterpriseSolution.jsx';
import CloudIntegration from './Pages/CloudIntegration.jsx';
import IIoTIOT from './Pages/IIoTIOT.jsx';
import OnDemandService from './Pages/OnDemandServices.jsx';
import TransportationLogistics from './Pages/TransportationLogistics.jsx';

import BankingFinance from './Pages/BankingFinance.jsx';
import RetailECommerce from './Pages/RetailECommerce.jsx';
import TravelHospitality from './Pages/TravelHospitality.jsx';
import Realestate from './Pages/Realestate.jsx';
import Legal from './Pages/Legal.jsx';
import Healthcare from './Pages/Healthcare.jsx';
import EducationeLearning from './Pages/EducationeLearning.jsx';
import MediaEntertainment from './Pages/MediaEntertainment.jsx';
import About from './Pages/About.jsx';
import Leadership from './Pages/Leadership.jsx';
   

/*import SaasSolution from './Pages/SaasSolution.jsx';

import StaffAugmentService from './Pages/StaffAugmentService.jsx';

*/
// Import other pages here as needed

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/webapp" element={<WebApp />} />
                <Route path="/mobileapp" element={<MobileApp />} />
                <Route path="/softwareapp" element={<SoftwareApp />} />
                <Route path="/ai-solution" element={<AISolution />} />
                <Route path="/ml-solution" element={<MLSolution />} />
                <Route path="/saas-development" element={<SaasSolution />} />
                <Route path="/iiot-iot-solution" element={<IIoTIOT />} />
                <Route path="/managed-services" element={<ManagedServices />} />
                <Route path="/cloud-integration" element={<CloudIntegration />}/>
                <Route path="/enterprise-solution" element={<EnterpriseSolution />} />
                  <Route path="/ondemand-service" element={<OnDemandService />} />
                <Route path="/TransportationLogistics" element={<TransportationLogistics />} />
                <Route path="/BankingFinance" element={<BankingFinance />} />
                <Route path="/TravelHospitality" element={<TravelHospitality />} />
                <Route path="/Realestate" element={<Realestate />} />
                <Route path="/Legal" element={<Legal />} />
                <Route path="/Healthcare" element={<Healthcare />} />
                <Route path="/EducationeLearning" element={<EducationeLearning />} />
                <Route path="/MediaEntertainment" element={<MediaEntertainment />} />


                <Route path="/RetailECommerce" element={<RetailECommerce />} />
                <Route path="/About" element={< About />} />
                <Route path="/Leadership" element={< Leadership />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
{/*     <Route path="/cloud-integration" element={<CloudIntegration />} />
              
                <Route path="/staff-augmentation" element={<StaffAugmentService />} />
                <Route path="/enterprise-solution" element={<EnterpriseSolution />} />
               
                    {/* <Route path="/mobileapp" element={<WebApp />} />
                <Route path="/softwareapp" element={<WebApp />} />
                <Route path="/services" element={<WebApp />} />
                <Route path="/about" element={<WebApp />} />
                <Route path="/leadership" element={<WebApp />} />
                /* Add more routes here }*/}