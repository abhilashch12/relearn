function ItemList({ filtered }) {
  return (
    <ul>
      {filtered.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
export default ItemList;