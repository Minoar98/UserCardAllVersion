import SingleMessage from "./SingleMessage";

const Message = ({ users, onClickHandler, onDeleteIcon }) => {
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
            />
          ))}
        </div>
      )}
      {users.length === 0 && (
        <p className="text-center font-bold text-red-700">
          No user is found !!! Would you like to add one?
        </p>
      )}
    </>
  );
};

export default Message;
