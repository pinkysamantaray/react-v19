const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <img
        src={props.image ? props.image : "https://picsum.photos/200"}
        alt={props.name}
      />
      {/*  alt={"Testing Test case"} Add and see the test case failing */}
    </div>
  );
};

export default Pizza;
