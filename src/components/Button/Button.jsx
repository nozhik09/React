import "./styles.css";
function Button() {
  const sendButton = "Send";
  const getButton = "Get";
  const isGetButton = false;
  const buttonClass = "button-component";
  // 1 var
  // return <button className={buttonClass}>{buttonName}</button>;

  //2var
  // return (
  //   <div>
  //   <h2>Button</h2>
  //   <button className={buttonClass}>
  //     {isGetButton ? getButton : sendButton}
  //   </button>
  //   </div>
  // );

  return (
    <button className={buttonClass}>
      {isGetButton ? getButton : sendButton}
    </button>
  );
}
export default Button;
