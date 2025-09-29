import { useState } from "react";

const Input = ({ onhandleChange, editUsersId }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const clickHandler = () => {
    console.log(" Ami click korci");
    // validation
    if (name.trim().length === 0) {
      alert("Name is required");
      return;
    }

    if (name.trim().length > 20) {
      alert("Name should be less than 20 characters");
      return;
    }

    const fixedAge = +age;
    if (fixedAge < 1 || fixedAge > 100) {
      alert("Age should be between 1 and 100");
      return;
    }

    // if (editUsersId) {
    //   console.log("edit:", title);

    //   onEditItem(title);

    //   return;
    // }

    // console.log("Add:", title);

    onhandleChange(name, fixedAge, editUsersId);

    // clear the input
    setName("");
    setAge("");
  };

  return (
    <div
      className="p-4 border border-gray-600 rounded-lg space-y-4 
                w-full max-w-4xl mx-auto"
    >
      <div>
        <label className="block text-white-600 font-medium mb-1 text-left">
          Name
        </label>
        <input
          type="text"
          placeholder="Please enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
      </div>

      <div>
        <label className="block text-white-600 font-medium mb-1 text-left">
          Age
        </label>
        <input
          type="number"
          placeholder="Input your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
      </div>

      <button
        className=" px-12 bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-medium transition"
        onClick={clickHandler}
      >
        {editUsersId ? "Edit" : "Add"}
      </button>
    </div>
  );
};

export default Input;
