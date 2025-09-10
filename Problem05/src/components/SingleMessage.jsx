import { Heart } from "lucide-react";
const SingleMessage = ({ id, name, age, onClickHandler, isFavorite }) => {
  return (
    <article className="p-4 bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition">
      <p className="text-lg font-semibold text-blue-700">My name is {name}</p>
      <p className="text-lg font-semibold  text-blue-700">Age is {age}</p>
      <div className="flex flex-row-reverse  p-2 cursor-pointer">
        <button onClick={() => onClickHandler(id)}>
          <Heart
            size={32}
            className={`text-red-600 hover:fill-red-600 ${
              isFavorite ? "fill-red-600" : ""
            }`}
          />
        </button>
      </div>
    </article>
  );
};

export default SingleMessage;
