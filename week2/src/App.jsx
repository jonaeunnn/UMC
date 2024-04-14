import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./components/Counter";
import Modal from "./components/Modal";

function App() {
  const[open,setOpen]=useState(false);

  const handleModal=()=>{
    setOpen(!open);
  };



  return (
    <>
    <div className="Counter">
    <Counter></Counter>
    </div>
    <div className="Modal">
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button onclick={handleModal}>버튼 열기</button>
      {open&&<Modal handleModal={handleModal}></Modal>}
    </div>
    </>
    
   
  )
}

export default App
