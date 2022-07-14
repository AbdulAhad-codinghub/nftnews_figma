import React from 'react'
import './app.css';
import { Footer,Header,Learnguider,Navbar,Newsletter,Nftguide,Recentarticle,Topstories} from './components';
const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <Newsletter/>
        <Topstories/>
        <Nftguide/>
        <Learnguider/>
        <Recentarticle/>
        <Footer/>
    </div>
  )
}

export default App