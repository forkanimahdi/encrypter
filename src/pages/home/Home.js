import React from "react";
import "../../styles/modules/home/_home.sass"
import { FooterComponent } from "../../layouts/Footer";
import { useNavigate } from "react-router-dom";

export const Home = () => {

  let GOTO = useNavigate();


  return (
    <>
      <div className="w-100 choseDiv d-flex align-items-center justify-content-around flex-column text-white ">
        <h1 className="text-center">H3LL0 , Wh4t 4re Y0u D01ng H3ere? </h1>
        <div className=" h-25 w-50 homebtn  d-flex align-items-center justify-content-around ">
          <button onClick={()=>{GOTO("/encrypter/encrypting")}} className="btn btn-indigo rounded-pill border ">Crypting</button>
          <button onClick={()=>{GOTO("/encrypter/decrypting")}} className="btn btn-indigo rounded-pill border ">Decrypting</button>
        </div>
        <FooterComponent />


      </div>

    </>
  );
};
