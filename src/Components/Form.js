import { useState } from "react";
const Form = ({ onAddItems }) => {
  //Controlled elements:
  // Step 1: set state for the input field. By default it's an empty string.
  //Step 2: Force the element to take the value from the state.
  // Step 3: In the input add event on Change and as the callback pass the setter function of the input
  //Each time we type in something in the input it will be stored in description (state of this component)
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(1);
  //Inside handleAddItems we depend on the current state, therefor we need to use callback function

  const handleSubmit = (e) => {
    e.preventDefault();
    //If there is no item (no description) return immediately
    if (!description) {
      return;
    }

    const newItem = {
      description: description,
      quantity: amount,
      packed: false,
      id: Date.now(),
    };
    onAddItems(newItem); //Calling the function received form the parent component (app)as props
    //Reset the state (bring back to original state)
    setDescription("");
    setAmount(1);
  };
  const handleInputChange = (e) => {
    setDescription(e.target.value);
  };
  const handleOptionChange = (e) => {
    setAmount(Number(e.target.value));
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 🏝</h3>
      <select value={amount} onChange={handleOptionChange}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={handleInputChange}
      />
      <button>Add</button>
    </form>
  );
};
export default Form;
