import SingleMessage from "./SingleMessage";

const Message = ({
  users,
  onClickHandler,
  onDeleteIcon,
  onEnableEditMode,
  isActive,
}) => {
  console.log("users:--", users);
  return (
    <>
      {users.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {users.map((user, index) => (
            <SingleMessage
              key={index}
              {...user}
              onClickHandler={onClickHandler}
              onDeleteIcon={onDeleteIcon}
              onEnableEditMode={onEnableEditMode}
              // isActive={isActive}
            />
          ))}
        </div>
      )}
      {users.length === 0 && (
        <p className="text-center font-bold text-red-700">
          {isActive === "all" &&
            " No user is found !!! Would you like to add one?"}
          {isActive === "favorite" && "No user is favorite!"}
          {isActive === "edited" && "No user is edited yet!"}
          {isActive === "deleted" && "No user is deleted yet!"}
        </p>
      )}
    </>
  );
};

export default Message;
