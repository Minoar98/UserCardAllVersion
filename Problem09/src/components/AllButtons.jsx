const AllButtons = ({ onSetFilter }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      <button
        onClick={() => onSetFilter("all")}
        className="border border-pink-600 bg-pink-500 rounded px-4 py-1"
      >
        All
      </button>

      <button
        onClick={() => onSetFilter("favorite")}
        className="border border-blue-600 bg-blue-500 rounded px-4 py-1"
      >
        Favorite
      </button>

      <button
        onClick={() => onSetFilter("edited")}
        className="border border-green-600 bg-green-500 rounded px-4 py-1"
      >
        Edited
      </button>

      <button
        onClick={() => onSetFilter("deleted")}
        className="border border-red-600 bg-red-500 text-white rounded px-4 py-1"
      >
        Deleted
      </button>
    </div>
  );
};

export default AllButtons;
