import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import api from "./api/items";

const App = () => {
  const [items, setItems] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [inputError, setInputError] = useState(false);
  const [titleExist, setTitleExist] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  // fetch items
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await api.get("/items");
        console.log(response.data);
        setItems(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchItems();
  }, []);

  // Your event handler for handling title changes
  const handleTitleChange = (event) => {
    const updatedTitle = event.target.value;

    // Reset error states when the user starts typing a new title
    if (titleExist) {
      setTitleExist(false);
    }

    setNewTitle(updatedTitle);
  };
  // update and add new items
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newTitle === "") {
      setInputError(true);
      setTitleExist(false); // Reset titleExist state
      return;
    }

    // Check if the new title already exists in items (case-insensitive)
    if (
      items.some((item) => item.title.toLowerCase() === newTitle.toLowerCase())
    ) {
      setTitleExist(true);
      setInputError(false); // Reset inputError state
      return;
    }

    try {
      if (editItemId !== null) {
        const updatedItem = { title: newTitle };
        await api.put(`/items/${editItemId}`, updatedItem);
        const updatedItems = items.map((item) =>
          item.id === editItemId ? { ...item, ...updatedItem } : item
        );
        setItems(updatedItems);
        setEditItemId(null);
      } else {
        const newId = items.length
          ? parseInt(items[items.length - 1].id) + 1
          : 1;
        const allItems = { id: newId.toString(), title: newTitle };

        const response = await api.post("/items", allItems);
        setItems([...items, response.data]);
      }
      setNewTitle("");
      setInputError(false);
    } catch (err) {
      console.error(`Error ${editItemId ? "updating" : "creating"} user:`, err);
    }
  };

  // edit item
  const handleEdit = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    setNewTitle(itemToEdit.title);
    setEditItemId(id);
  };

  // delete items
  const handleDelete = async (id) => {
    try {
      await api.delete(`/items/${id}`);
      const updatedItems = items.filter((item) => item.id !== id);
      setItems(updatedItems);
    } catch (err) {
      console.log("Error deleting items:", err.message);
    }
  };

  return (
    <div className="w-full max-w-[500px] mx-auto flex flex-col justify-center items-center gap-4">
      <h1 className="font-caveat text-6xl font-semibold underline underline-offset-8 mb-4">
        to do list
      </h1>

      <NewItem
        newTitle={newTitle}
        handleTitleChange={handleTitleChange}
        handleSubmit={handleSubmit}
        inputError={inputError}
        titleExist={titleExist}
      />
      <ItemList
        items={items}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};
export default App;
