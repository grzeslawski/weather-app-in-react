import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.submit}>
      <input
        type="text"
        value={props.value}
        placeholder="wpisz miasto"
        onChange={props.change}
      />
      {/* <button>Wyszukaj miasta</button> */}
    </form>
  );
};

export default Form;
