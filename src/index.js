import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import HelloComponent from './component/HelloComponent';
// import StatefullComponent from './container/StatefullComponent';
// import VideoThumbComponent from './component/VideoThumbComponent/VideoThumbComponent';
import Home from './container/Home/Home';

//STATELESS COMPONENT========================================
// //BENTUK FUNCTION BIASA
// function FirstComponent(){
//   return <p>Functional Component Bro</p>
// }

// //BENTUK ARROW FUNCTION
// const FirstComponent = () => {
//   return <p>Functional Component</p>
// }
//END STATELESS COMPONENT====================================

// //STATEFUL COMPONENT=========================================
// class StateFullComponent extends React.Component {
//   render(){
//     return <p>Contoh StateFull Component</p>
//   }
// }
//END STATEFUL COMPONENT=========================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
