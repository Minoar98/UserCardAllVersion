import { Bookmark, SquarePen, Trash2 } from "lucide-react";
const SingleMessage = ({
  id,
  name,
  age,
  onClickHandler,
  isFavorite,
  onDeleteIcon,
  onEnableEditMode,
  isEdited,
}) => {
  return (
    <article
      className={`p-3 bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition ${
        isEdited ? "bg-sky-400" : ""
      }`}
    >
      <div className="flex justify-between items-start">
        <div className="space-y-2 pl-3">
          <p className="text-lg  text-white-500">My name is {name}</p>
          <p className="text-lg text-white-500">Age is {age}</p>
        </div>

        <div className="flex flex-col items-end gap-3">
          <button
            onClick={() => !isEdited && onClickHandler(id)}
            disabled={isEdited}
          >
            <Bookmark
              size={25}
              className={`text-amber-600 hover:fill-amber-600 ${
                isFavorite ? "fill-amber-600" : ""
              }`}
            />
          </button>

          <button
            className="text-red-600"
            onClick={() => !isEdited && onDeleteIcon(id)}
            disabled={isEdited}
          >
            <Trash2 size={25} />
          </button>

          <button
            className="text-blue-500"
            onClick={() => onEnableEditMode(id)}
          >
            <SquarePen size={25} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default SingleMessage;
