import { create } from 'zustand';
import { useState, useEffect } from 'react';

const useStore = create((set) => ({
  data: {},
  addItem: (item) => set((state) => ({ data: { ...state.data, [item.id]: item } })),
  removeItem: (id) => set((state) => ({ data: { ...state.data, [id]: undefined } })),
}));

const LandingPage = () => {
  const { data, addItem } = useStore();
  const [input, setInput] = useState('');

  useEffect(() => {
    // fetch data from database
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const data = await response.json();
      // update the store with the fetched data
      data.forEach((item) => addItem(item));
    };
    fetchData();
  }, [addItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // add the new item to the store
    const newItem = { id: Date.now(), name: input };
    addItem(newItem);
    // clear the input field
    setInput('');
  };

  return (
    <div>
      <h1>Landing Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {Object.values(data).map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LandingPage;
