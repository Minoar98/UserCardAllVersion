const Checkbox = ({ isFavoritesShow, onCheckboxhandler }) => {
  return (
    <>
      <input
        type="checkbox"
        className="h-4 w-4 accent-pink-600 cursor-pointer"
        checked={isFavoritesShow}
        onChange={onCheckboxhandler}
      />
      <label className="block gap-2 text-gray-300 cursor-pointer">
        Filter by favourite list
      </label>
    </>
  );
};

export default Checkbox;
