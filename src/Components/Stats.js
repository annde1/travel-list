const Stats = ({ items }) => {
  //If there are no items in the array no need to perform calculations. Render the message:
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🧰</em>
      </p>
    );
  const numItems = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemsPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${numItems} items on your list, and already packed ${itemsPacked} (${percentage}%)`}
      </em>
    </footer>
  );
};
export default Stats;
