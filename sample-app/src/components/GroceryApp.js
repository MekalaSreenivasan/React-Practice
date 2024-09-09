import { useState } from "react";

export default function GroceryApp() {
    const [items, setItems] = useState([]); // State to hold the list of grocery items
    const [newItem, setNewItem] = useState(''); // State to hold the new item input value
  
    // Function to handle adding a new item to the list
    const handleAddItem = () => {
      if (newItem.trim() === '') return; // Don't add empty items
      if (items.some((item) => item.name.toLowerCase() === newItem.toLowerCase())) return; // Prevent duplicates
  
      setItems([...items, { name: newItem, purchased: false }]); // Add new item to the list with purchased status
      setNewItem(''); // Clear input field after adding item
    };
  
    // Function to handle deleting an item from the list
    const handleDeleteItem = (index) => {
      setItems(items.filter((_, i) => i !== index)); // Remove item by index
    };
  
    // Function to handle marking an item as purchased
    const handleTogglePurchased = (index) => {
      const updatedItems = [...items];
      updatedItems[index].purchased = !updatedItems[index].purchased; // Toggle purchased status
      setItems(updatedItems);
    };
  
    // Handle "Enter" key press to add item
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleAddItem();
      }
    };
  
    return (
      <div style={styles.container}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyDown={handleKeyPress} // Add item on Enter key press
          placeholder="Enter a grocery item"
          style={styles.input}
        />
        <button onClick={handleAddItem} style={styles.addButton}>
          Add
        </button>
        <ul style={styles.list}>
          {items.map((item, index) => (
            <li key={index} style={styles.listItem}>
              <span
                onClick={() => handleTogglePurchased(index)}
                style={{
                  textDecoration: item.purchased ? 'line-through' : 'none', // Cross out purchased items
                  cursor: 'pointer',
                }}
              >
                {item.name}
              </span>
              <button
                onClick={() => handleDeleteItem(index)}
                style={styles.deleteButton}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  
}

// Basic styles for the component
const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    input: {
      padding: '10px',
      marginBottom: '10px',
      width: '200px',
    },
    addButton: {
      padding: '10px 20px',
      marginBottom: '20px',
      cursor: 'pointer',
    },
    list: {
      listStyleType: 'none',
      padding: 0,
    },
    listItem: {
      marginBottom: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '200px',
    },
    deleteButton: {
      padding: '5px 10px',
      cursor: 'pointer',
      backgroundColor: 'red',
      color: 'white',
      border: 'none',
      borderRadius: '3px',
    },
  };