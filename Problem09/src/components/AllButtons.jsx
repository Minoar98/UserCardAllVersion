const AllButtons = ({ isActive, onSetIsActive }) => {
  console.log("CLicked here:---", isActive);
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      <button
        onClick={() => onSetIsActive("all")}
        className={`${
          isActive === "all" ? "bg-white  text-gray-800 " : "bg-pink-500"
        }border border-pink-600  rounded px-4 py-1`}
      >
        All
      </button>

      <button
        onClick={() => onSetIsActive("favorite")}
        className={`${
          isActive === "favorite" ? "bg-white  text-gray-800 " : "bg-pink-500"
        }border border-pink-600  rounded px-4 py-1`}
      >
        Favorite
      </button>

      <button
        onClick={() => onSetIsActive("edited")}
        className={`${
          isActive === "edited" ? "bg-white  text-gray-800 " : "bg-pink-500"
        }border border-pink-600  rounded px-4 py-1`}
      >
        Edited
      </button>

      <button
        onClick={() => onSetIsActive("deleted")}
        className={`${
          isActive === "deleted" ? "bg-white  text-gray-800 " : "bg-pink-500"
        }border border-pink-600  rounded px-4 py-1`}
      >
        Deleted
      </button>
    </div>
  );
};

export default AllButtons;
