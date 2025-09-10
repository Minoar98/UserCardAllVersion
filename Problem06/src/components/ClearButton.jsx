const ClearButton = ({ onclearHandler }) => {
  return (
    <div className="w-full text-center flex justify-end ">
      <button
        className="bg-pink-600 text-white px-10 py-2 mt-4 rounded-md"
        onClick={onclearHandler}
      >
        Clear All
      </button>
    </div>
  );
};

export default ClearButton;
