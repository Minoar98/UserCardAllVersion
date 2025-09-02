import { useState } from "react";

const Input = ({ onhandleChange }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const clickHandler = () => {
    // validation
    // 1. name should not be empty
    // 2. age is in between 1 to 100

    if (name.trim().length === 0) {
      alert("name is required");
      return;
    }

    if (name.trim().length > 20) {
      alert("name should be less than 20");
      return;
    }

    const fixedAge = +age;
    if (fixedAge > 0 || fixedAge > 100) {
      alert("age should be 1 to 100");
      return;
    }

    onhandleChange(name, fixedAge);

    // clear the input
    setName("");
    setAge("");
  };

  return (
    <div className="text-green-500 space-y-4 p-4 border rounded-md max-w-md mx-auto">
      <label>Name</label>
      <input
        type="text"
        placeholder="Please enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="text-white-500 border px-3 py-2 w-full"
      />

      <label htmlFor="">Age</label>
      <input
        type="number"
        placeholder="Input your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="text-white-500 border px-3 py-2 w-full"
      />

      <div className="flex gap-2">
        <button
          className="bg-blue-600 text-white px-10 py-2 rounded"
          onClick={clickHandler}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Input;
