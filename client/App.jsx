import React from 'react'
import Landing from './components/Landing.jsx'
import Footer from './widgets/Footer.jsx'
import Navigation from './widgets/Navbar.jsx'
import EmailList from './components/EmailList.jsx'


const App = () => (
  <>
    <Navigation />
    <Landing />
    <EmailList />
    <Footer />
  </>
);

export default App;