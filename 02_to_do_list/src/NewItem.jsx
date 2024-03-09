import React from "react";
const NewItem = ({
  newTitle,
  handleTitleChange,
  handleSubmit,
  inputError,
  titleExist,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex justify-between items-center bg-white/50 rounded relative mb-4"
    >
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Enter the text"
        value={newTitle}
        onChange={handleTitleChange}
        className="w-full flex-1 py-3 px-4 text-primary"
      />
      <button type="submit" className="bg-primary py-3 px-4 text-white">
        add
      </button>

      <span className="absolute -bottom-6 left-0 text-red-800 mt-2 text-xs">
        {inputError && newTitle === ""
          ? "The input field is empty. Please fill the field."
          : titleExist
          ? "The title already exists. Please choose a different title."
          : ""}
      </span>
    </form>
  );
};
export default NewItem;
