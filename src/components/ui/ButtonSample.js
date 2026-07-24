"use client";

export default function ButtonSample({type, text, ...restProps}) {
  // const {type, text} = props;

  function handleButtonClick() {
    alert("click!");
  }

  const buttonProps = {
    type: type,
    onClick: handleButtonClick,
  }

  return (
    <button type={type} onClick={handleButtonClick} { ...restProps }>{text}</button>
    // <button { ...buttonProps }>{text}</button>
  );
}
