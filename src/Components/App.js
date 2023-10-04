import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const App = () => {
  const [items, setItems] = useState([]); //empty array cause we create list of items. We move this state into the closest common parent component (lifting up state) because we need the pass the data received from the form component into the packing list component. They are siblings components therfore we can't use props (one way data flow). Inside the packing list we pass it as regular props. Inside the form component we pass handleAddItems as props too. Whenever multiple siblings components need access to the same state, we move that piece of state to the closest common parent component (lifting up state)
  // const numItems = items.length; //derived state (calculated from existing state (items array)). This will be always in sync because as soon  the items array is updated the component will rerender and when component re-render it means that the component's function is called again therefir this code will work again
  const handleAddItems = (item) => setItems((items) => [...items, item]); //muatate the original array and and new item
  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id)); //whenever this condition is true the item will end up in the new array. If the item id is equal to the id, that item won't be part of the new array
  };
  const handleToggleItem = (id) => {
    setItems(
      (items) =>
        items.map((item) =>
          item.id === id ? { ...item, packed: !item.packed } : item
        ) //Whenever the item has the same id like the id we passed it then create brand new object based on the current item and set the packed status to the oppposite of packed, for all the other objects return the current item
    );
  };
  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
};
export default App;
