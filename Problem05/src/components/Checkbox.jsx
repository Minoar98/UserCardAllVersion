const Checkbox = ({ isFavoritesShow, onCheckboxChangeHandler }) => {
  return (
    <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
      <input
        type="checkbox"
        checked={isFavoritesShow}
        onChange={onCheckboxChangeHandler}
        className="h-4 w-4 accent-pink-600 cursor-pointer"
      />
      Filter by favorite list
    </label>
  );
};

export default Checkbox;
