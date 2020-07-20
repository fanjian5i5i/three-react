import React from 'react';
// import logo from './logo.svg';
// import Dae from './components/Dae'
import Bighead from "./components/Bighead"
import Map from "./components/Map"
import Navbar from "./components/Navbar"
import './App.css';



function App() {
  return (
<>
<div className="bg-fixed sm:bg-local md:bg-scroll lg:bg-local xl:bg-fixed">
  <Map/>
</div>
<Navbar/>
<div className="max-w-sm rounded overflow-hidden shadow-lg absolute m-8 mt-16 right-0 top-0 bg-white">
<Bighead className="w-full"/>
<div className="px-6 py-4">
  <div className="font-bold text-blue-500 text-xl mb-2">
    Fan Jian
  </div>
  <p className="text-gray-700 text-base">
  When I am not coding, I babysit my kids without getting paid... <span></span>😜
  </p>
</div>
<div className="px-6 py-4">
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Software Engineer</span>
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Bodybuilder</span>
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 ml-20">#Exotic Gamer</span>
</div>
</div>


</>
  );
}

export default App;
