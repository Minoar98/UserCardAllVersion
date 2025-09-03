const SingleMessage = ({ name, age }) => {
  return (
    <article className="p-4 bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition">
      <p className="text-lg font-semibold text-blue-700">My name is {name}</p>
      <p className="text-lg font-semibold  text-blue-700">Age is {age}</p>
    </article>
  );
};

export default SingleMessage;
