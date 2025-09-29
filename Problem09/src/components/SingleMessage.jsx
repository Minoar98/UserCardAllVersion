import { FileHeart, SquarePen, Trash2 } from "lucide-react";
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
      <div className="flex justify-between items-start">
        {/* Left side: texts with some left padding */}
        <div className="space-y-2 pl-3">
          <p className="text-lg  text-white-500">My name is {name}</p>
          <p className="text-lg text-white-500">Age is {age}</p>
        </div>

       
        <div className="flex flex-col items-end gap-3">
          <button onClick={() => onClickHandler(id)}>
            <FileHeart
              size={25}
              className={`transition-colors duration-200 cursor-pointer 
                   ${
                     isFavorite
                       ? "text-amber-500"
                       : "text-gray-400 hover:text-amber-400"
                   }`}
            />
          </button>

          <button className="text-red-600" onClick={() => onDeleteIcon(id)}>
            <Trash2 size={25} />
          </button>

          <button className="text-blue-500" onClick={() => onDeleteIcon(id)}>
            <SquarePen size={25} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default SingleMessage;
