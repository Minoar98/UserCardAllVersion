const Checkbox = () => {
  const [isFavoritesShow, setIsFavoriteShow] = useState(false);

  return (
    <label className="flex items-center gap-2 text-gray-300">
      <input
        type="checkbox"
        checked={isFavoritesShow}
        // onChange={}
        className="bg-pink-600 text-white px-10 py-2 mt-4 rounded-md"
      />
      Filter by favorite list
    </label>
  );
};

export default Checkbox;
