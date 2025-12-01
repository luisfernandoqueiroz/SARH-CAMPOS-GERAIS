import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'

import { Start } from './pages/Start'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { ShowCustomers } from './pages/ShowCustomers'
import { EditCustomer } from './pages/EditCustomer'
import { RegisterCustomer } from './pages/RegisterCustomer'
import { ChooseCustomer } from './pages/ChooseCustomer'
import { ShowHydrometers } from './pages/ShowHydrometers'
import { RegisterHydrometer } from './pages/RegisterHydrometer'
import { EditHydrometer } from './pages/EditHydrometer'
import { Invoice } from './pages/Invoice'
import { AssociationData } from './pages/AssociationData'
import { HydrometersReadings } from './pages/HydrometersReadings'
import { ReportReadings } from './pages/ReportReadings'
import { ShowEmployees } from './pages/ShowEmployees'
import { RegisterEmployee } from './pages/RegisterEmployee'
import { EditEmployee } from './pages/EditEmployee'
import { Entry } from './pages/Entry'
import { Exit } from './pages/Exit'


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<DefaultLayout />}>
      <Route path="/home/invoice" element={<Invoice />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/show-customers" element={<ShowCustomers />} />
        <Route path="/home/show-customers/edit-customer/:id" element={<EditCustomer />} />
        <Route path="/home/show-customers/register-customer" element={<RegisterCustomer />} />

        <Route path="/home/show-employees" element={<ShowEmployees />} />
        <Route path="/home/show-employees/edit-employee/:id" element={<EditEmployee />} />
        <Route path="/home/show-employees/register-employee" element={<RegisterEmployee />} />

        <Route path="/home/choose-customer" element={<ChooseCustomer />} />

        <Route path="/home/choose-customer/show-hydrometers/:id" element={<ShowHydrometers />} />
        <Route path="/home/choose-customer/show-hydrometers/register-hydrometer" element={<RegisterHydrometer />} />
        <Route path="/home/choose-customer/show-hydrometers/edit-hydrometer" element={<EditHydrometer />} />

        <Route path="/home/hydrometers-readings" element={<HydrometersReadings />} /> 
        <Route path="/home/hydrometers-readings/choose-customer/report-readings/:id" element={<ReportReadings />} /> 
        <Route path="/home/hydrometers-readings/choose-customer/readings/:id" element={<HydrometersReadings />} /> 

        <Route path="/home/association-data" element={<AssociationData />} /> 

        <Route path="/home/entry" element={<Entry />} /> 

        <Route path="/home/exit" element={<Exit />} /> 
      </Route> 
    </Routes>
  )
}