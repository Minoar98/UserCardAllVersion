const Input = ({ handleChange, editUser, setEditUser }) => {

  const clickHandler = () => {
    console.log(" Ami click korci");
    // validation
    if (editUser.name.trim().length === 0) {
      alert("Name is required");
      return;
    }

    if (editUser.name.trim().length > 20) {
      alert("Name should be less than 20 characters");
      return;
    }

    const fixedAge = +editUser.age;
    if (fixedAge < 1 || fixedAge > 100) {
      alert("Age should be between 1 and 100");
      return;
    }

    // if (editUsersId) {
    //   console.log("edit:", name, fixedAge);

    //   onEditItem(name,fixedAge);

    //   return;
    // }

    // console.log("Add:", name);
    // console.log("Add:", fixedAge);

    handleChange(editUser.name, fixedAge, editUser.id);

    // clear the input
    setEditUser({ id: null, name: "", age: "" });
  };

  return (
    <div
      className="p-4 border border-gray-600 rounded-lg space-y-4 
                w-96  mx-auto"
    >
      <div>
        <label className="block text-white-600 font-medium mb-1 text-left">
          Name
        </label>
        <input
          type="text"
          placeholder="Please enter your name"
          value={editUser.name}
          onChange={(e) =>
            setEditUser((prev) => ({ ...prev, name: e.target.value }))
          }
          className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
      </div>

      <div>
        <label className="block text-white-600 font-medium mb-1 text-left">
          Age
        </label>
        <input
          type="number"
          placeholder="Please enter your age"
          value={editUser.age}
          onChange={(e) =>
            setEditUser((prev) => ({ ...prev, age: e.target.value }))
          }
          className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
      </div>

      <button
        className=" px-12 bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-medium transition"
        onClick={clickHandler}
      >
        {editUser.id ? "Edit" : "Add"}
      </button>
    </div>
  );
};

export default Input;
