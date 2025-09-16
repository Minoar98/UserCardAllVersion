import { useState } from "react";
import Input from "./components/Input";
import Message from "./components/Message";
import ClearButton from "./components/ClearButton";
import Checkbox from "./components/Checkbox";
import data from "../data";
// import data from "./data";

const App = () => {
  const [users, setUser] = useState(data);
  const [isFavoritesShow, setIsFavoriteShow] = useState(false);
  // const [editUsersId, setEditUserId] = useState(null); // to active edit mode
  // const [title, setTitle] = useState(""); // which value I want to add or edit

  let filterusers = users;
  if (isFavoritesShow) {
    filterusers = users.filter((user) => user.isFavorite === isFavoritesShow);
  }

  const handleChange = (name, age) => {
    setUser((prevState) => [
      ...prevState,
      { id: Date.now().toString(), name, age, isFavorite: false },
    ]); // Ager kajer sathe kisu add kora
  };

  const clickHandler = (id) => {
    setUser((prevState) => {
      return prevState.map((user) =>
        user.id === id ? { ...user, isFavorite: !user.isFavorite } : user
      );
    });
  };

  const deleteIcon = (id) => {
    setUser((prevState) => prevState.filter((user) => user.id !== id));
  };

  const checkboxhandler = () => {
    setIsFavoriteShow((prevState) => !prevState);
  };

  // 1. search to the main state by id
  // const editableItem = users.find((user) => user.id === id);

  const clearHandler = () => {
    console.log("Clear All");
    setUser([]);
  };

  return (
    <main className="min-h-screen w-full bg-gray-900 flex items-center justify-center p-10">
      <article className="bg-gray-800 text-white rounded-2xl shadow-lg p-6 w-full max-w- text-center space-y-4 border border-gray-700">
        <Input onhandleChange={handleChange} />
        <Message
          users={filterusers}
          onClickHandler={clickHandler}
          onDeleteIcon={deleteIcon}
        />
        <div className="flex items-center justify-between mt-4">
          {/* <Checkbox
            isFavoritesShow={isFavoritesShow}
            onCheckboxhandler={checkboxhandler}
          /> */}
          <ClearButton onclearHandler={clearHandler} />
        </div>
      </article>
    </main>
  );
};

export default App;
