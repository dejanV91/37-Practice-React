import React from "react";

const Book = (props) => {
  const { img, title, price } = props;

  const clickHandler = () => {
    alert("cliked on button");
  };
  const complexExample = (title) => {
    console.log(title);
  };

  return (
    <article className="book">
      <img src={img} alt="" />
      <h3
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h3>
      <p style={{ color: "red" }}>${price}</p>
      <button type="button" onClick={clickHandler}>
        click me
      </button>
      <button type="button" onClick={() => complexExample(title)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;
