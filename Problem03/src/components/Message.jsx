const Message = ({ name, age }) => {
  return (
    <article className="mt-6 space-y-1 text-white">
      <p className="text-lg font-semibold text-red-700">My name is {name}</p>
      <p className="text-lg font-semibold  text-red-700">Age is {age}</p>
    </article>
  );
};

export default Message;
