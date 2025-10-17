const AllButtons = ({ isActive, onSetIsActive }) => {
  console.log("CLicked here:---", isActive);
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      <button
        onClick={() => onSetIsActive("all")}
        className={`border border-pink-600 rounded px-4 py-1
          ${
            isActive === "all"
              ? "bg-pink-500 text-white"
              : "bg-white text-gray-800"
          }`}
      >
        All
      </button>

      <button
        onClick={() => onSetIsActive("favorite")}
        className={`border border-pink-600 rounded px-4 py-1
          ${
            isActive === "favorite"
              ? "bg-pink-500 text-white"
              : "bg-white text-gray-800"
          }`}
      >
        Favorite
      </button>

      <button
        onClick={() => onSetIsActive("edited")}
        className={` border-pink-600 rounded px-4 py-1
          ${
            isActive === "edited"
              ? "bg-pink-500 text-white"
              : "bg-white text-gray-800"
          }`}
      >
        Edited
      </button>

      <button
        onClick={() => onSetIsActive("deleted")}
        className={` border-pink-600 rounded px-4 py-1
          ${
            isActive === "deleted"
              ? "bg-pink-500 text-white"
              : "bg-white text-gray-800"
          }`}
      >
        Deleted
      </button>
    </div>
  );
};

export default AllButtons;
