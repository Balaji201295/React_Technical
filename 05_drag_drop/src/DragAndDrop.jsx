import React, { useState } from "react";

const DragAndDropComponent = () => {
  const [items, setItems] = useState([
    { id: 1, content: "Item 1" },
    { id: 2, content: "Item 2" },
    { id: 3, content: "Item 3" },
    { id: 4, content: "Item 4" },
  ]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDrop = (e, newIndex) => {
    const oldIndex = e.dataTransfer.getData("index");
    const newItems = [...items];
    [newItems[oldIndex], newItems[newIndex]] = [
      newItems[newIndex],
      newItems[oldIndex],
    ];
    setItems(newItems);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Drag and Drop Items</h1>
      <div className="flex bg-white w-full">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="bg-blue-900 text-white p-4 m-2 cursor-pointer"
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={(e) => e.preventDefault()}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragAndDropComponent;
