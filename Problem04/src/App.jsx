import { useState } from "react";
import Input from "./components/Input";
import Message from "./components/Message";
import ClearButton from "./components/ClearButton";

const App = () => {
  const [users, setUser] = useState([]);

  const handleChange = (name, age) => {
    // setUser([{ name, age }]); // replace kora

    setUser((prevState) => [...prevState, { name, age }]); // Ager kajer sathe kisu add kora
  };

  const clearHandler = () => {
    console.log("Clear All");
    setUser([]);
  };

  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <article className="bg-gray-800 text-white rounded-2xl shadow-lg p-6 w-full max-w-md text-center space-y-4 border border-gray-700">
        <Input onhandleChange={handleChange} />
        <Message users={users} />
        <ClearButton onclearHandler={clearHandler} />
      </article>
    </main>
  );
};

export default App;
