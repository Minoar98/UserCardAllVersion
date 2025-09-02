import { useState } from "react";
import Input from "./components/Input";
import Message from "./components/Message";

const App = () => {
  const [user, setUser] = useState({
    name: "Nothing",
    age: "not set",
  });

  const handleChange = (name, age) => {
    setUser({ name, age });
  };

  const clearHandler = () => {
    setUser({
      name: "Nothing",
      age: "not set",
    });
  };

  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <article>
        <Input onhandleChange={handleChange} />
        <Message {...user} />
        <div className="w-full text-center">
          <button
            className="bg-pink-600 text-white px-10 py-2 mt-4 rounded-md"
            onClick={clearHandler}
          >
            Clear
          </button>
        </div>
      </article>
    </main>
  );
};

export default App;
