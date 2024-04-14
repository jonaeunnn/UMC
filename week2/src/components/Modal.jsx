import React, {useState} from "react";
import "./Modal.css";

const Modal =(props)=>{
   
    
return(
    <>
    <div id="background">
        <div id="container">
            <h1>안녕하세요</h1>
            <p>모달 내용은 어쩌고 저쩌고..</p>
            <button onClick={props.handleModal}>닫기</button>
        </div>
    </div>
    </>
    
);
};

export default Modal; 