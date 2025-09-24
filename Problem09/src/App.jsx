import { useState } from "react";
import Input from "./components/Input";
import Message from "./components/Message";
import ClearButton from "./components/ClearButton";

// import data from "../data";
import AllButtons from "./components/AllButtons";
// import data from "./data";

const App = () => {
  const [users, setUser] = useState([]);
  // const [isFavoritesShow, setIsFavoriteShow] = useState(false);
  const [filter, setFilter] = useState("all");
  // const [editUsersId, setEditUserId] = useState(null); // to active edit mode
  // const [title, setTitle] = useState(""); // which value I want to add or edit

  let filterusers = users;
  if (filter === "favorite") {
    filterusers = users.filter((user) => user.isFavorite);
  } else if (filter === "edited") {
    filterusers = users.filter((user) => user.isEdited);
  } else if (filter === "deleted") {
    filterusers = users.filter((user) => user.isDeleted);
  }

  const handleChange = (name, age) => {
    setUser((prevState) => [
      ...prevState,
      {
        id: Date.now().toString(),
        name,
        age,
        isFavorite: false,
        isEdited: false,
        isDeleted: false,
      },
    ]); // Ager kajer sathe kisu add kora
  };

  const clickHandler = (id) => {
    setUser((prevState) => {
      return prevState.map((user) =>
        user.id === id ? { ...user, isFavorite: !user.isFavorite } : user
      );
    });
  };
  const editHandler = (id, newName) => {
    setUser((prevState) =>
      prevState.map((user) =>
        user.id === id ? { ...user, name: newName, isEdited: true } : user
      )
    );
  };

  const deleteIcon = (id) => {
    setUser((prevState) =>
      prevState.map((user) =>
        user.id === id ? { ...user, isDeleted: true } : user
      )
    );
  };

  // const checkboxhandler = () => {
  //   setIsFavoriteShow((prevState) => !prevState);
  // };

  // 1. search to the main state by id
  // const editableItem = users.find((user) => user.id === id);

  const clearHandler = () => {
    console.log("Clear All");
    setUser([]);
  };

  return (
    <main className="min-h-screen w-full bg-gray-800 flex items-center justify-center p-10">
      <article
        className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl 
                mx-auto mt-6
                bg-gray-800 text-white rounded-2xl shadow-lg 
                p-6 text-center space-y-4 border border-gray-700"
      >
        <Input onhandleChange={handleChange} />

        <AllButtons
          onSetFilter={setFilter}
          // onCheckboxhandler={checkboxhandler}
        />
        <Message
          users={filterusers}
          onClickHandler={clickHandler}
          onDeleteIcon={deleteIcon}
          onEditHandler={editHandler}
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
