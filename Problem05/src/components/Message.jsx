import SingleMessage from "./SingleMessage";

const Message = ({ users, onClickHandler }) => {
  console.log("users:--", users);
  return (
    <>
      {users.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {users.map((user, index) => (
            <SingleMessage
              key={index}
              {...user}
              onClickHandler={onClickHandler}
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
