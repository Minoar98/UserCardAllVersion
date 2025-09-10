import { Heart, Trash2 } from "lucide-react";
const SingleMessage = ({
  id,
  name,
  age,
  onClickHandler,
  isFavorite,
  onDeleteIcon,
}) => {
  return (
    <article className="p-3 bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition">
      <p className="text-lg font-semibold text-blue-700">My name is {name}</p>
      <p className="text-lg font-semibold  text-blue-700">Age is {age}</p>
      <div className="flex justify-end p-1 cursor-pointer">
        <button onClick={() => onClickHandler(id)}>
          <Heart
            size={32}
            className={`text-red-600 hover:fill-red-600 ${
              isFavorite ? "fill-red-600" : ""
            }`}
          />
        </button>
      </div>
      <div className="flex justify-end p-1 cursor-pointer">
        <button className="text-green-500" onClick={() => onDeleteIcon(id)}>
          <Trash2 size={32} />
        </button>
      </div>
    </article>
  );
};

export default SingleMessage;
