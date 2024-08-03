
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import WhatIsAnIdp from './components/WhatIsAnIdp/WhatIsAnIdp.jsx'
import CountryRequirements from './components/CountryRequirements/CountryRequirements.jsx'
import Pricing from './components/Pricing/Pricing.jsx'
import Faqs from './components/Faqs/Faqs.jsx'
import Contact from './components/Contact/Contact.jsx'
import Step1 from './components/Step1/Step1.jsx'
import Step2 from './components/Step2/Step2.jsx'
import Step3 from './components/Step3/Step3.jsx'
import TakeAPhoto from './components/TakeAPhoto/TakeAPhoto.jsx'
import AgainStep3 from './components/AgainStep3/AgainStep3.jsx'
import Step4 from './components/Step4/Step4.jsx'
import FitYourFace from './components/FitYourFace/FitYourFace.jsx'
import AgainStep4 from './components/AgainStep4/AgainStep4.jsx'
import Step5 from './components/Step5/Step5.jsx'
import Conformation1 from './components/Conformation1/Conformation1.jsx'
import Conformation2 from './components/Conformation2/Conformation2.jsx'





const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/WhatIsAnIdp",
    element: <WhatIsAnIdp></WhatIsAnIdp>
  },
  {
    path: "/CountryRequirements",
    element: <CountryRequirements></CountryRequirements>
  },
  {
    path: "/Pricing",
    element: <Pricing></Pricing>
  },
  {
    path: "/Faqs",
    element: <Faqs></Faqs>
  },
  {
    path: "/Contact",
    element: <Contact></Contact>
  },
  {
    path: "/Step1",
    element: <Step1></Step1>
  },
  {
    path: "/Step2",
    element: <Step2></Step2>
  },
  {
    path: "/Step3",
    element: <Step3></Step3>
  },
  {
    path: "/TakeAPhoto",
    element: <TakeAPhoto></TakeAPhoto>
  },
  {
    path: "/AgainStep3",
    element: <AgainStep3></AgainStep3>
  },
  {
    path: "/Step4",
    element: <Step4></Step4>
  },
  {
    path: "/FitYourFace",
    element: <FitYourFace></FitYourFace>
  },
  {
    path: "/AgainStep4",
    element: <AgainStep4></AgainStep4>
  },
  {
    path: "/Step5",
    element: <Step5></Step5>
  },
  {
    path: "/Conformation1",
    element: <Conformation1></Conformation1>
  },
  {
    path: "/Conformation2",
    element: <Conformation2></Conformation2>
  }
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router = {router}></RouterProvider> 
  </React.StrictMode>,
)
