const Checkbox = ({ isFavoritesShow, onCheckboxhandler }) => {
  return (
    <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
      <input
        type="checkbox"
        className="h-4 w-4 accent-pink-600 cursor-pointer"
        checked={isFavoritesShow}
        onChange={onCheckboxhandler}
      />
    </label>
  );
};

export default Checkbox;
