"use client";

import { useState} from "react";

export default function MenuSample() {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpen() {
    setIsOpen(true)
  }

  function handleClose() {
    setIsOpen(false)
  }

  function handleToggle() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button type="button" onClick={handleOpen}>開くボタン</button>
      <button type="button" onClick={handleClose}>閉じるボタン</button>
      <button type="button" onClick={handleToggle}>開くと閉じるを切り替えるボタン</button>
      <p>{isOpen ? "開いています" : "閉じています"}</p>
    </>
  );
}
