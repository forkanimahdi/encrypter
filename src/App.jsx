import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import { Crypting } from "./pages/crypting/CryptingPage";
import { Decrypting } from "./pages/Decrypting/DecryptingPage";

export const App = () => {

  const alphabetics = [];
  for (let i = 97; i <= 122; i++) {
    alphabetics.push(String.fromCharCode(i));
  }
  return (
    <>
      <Routes>
        <Route path="/encrypter/*" element={<Error />} />
        <Route path="/encrypter" element={<Home />} />
        <Route path="/encrypter/encrypting" element={<Crypting alphabetics={alphabetics} />} />
        <Route path="/encrypter/decrypting" element={<Decrypting alphabetics={alphabetics} />} />
      </Routes>
    </>
  );
};
