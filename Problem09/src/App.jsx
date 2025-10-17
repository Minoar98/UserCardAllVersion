import { useState } from "react";
import Input from "./components/Input";
import Message from "./components/Message";
import ClearButton from "./components/ClearButton";
import AllButtons from "./components/AllButtons";

const App = () => {
  const [users, setUser] = useState([]);
  // const [isFavoritesShow, setIsFavoriteShow] = useState(false);
  const [isActive, setIsActive] = useState("all");
  const [editUser, setEditUser] = useState({
    id: null,
    name: "",
    age: "",
  });

  let filterusers = users;
  if (isActive === "favorite") {
    filterusers = users.filter((user) => user.isFavorite);
  } else if (isActive === "edited") {
    filterusers = users.filter((user) => user.isEdited);
  } else if (isActive === "deleted") {
    filterusers = users.filter((user) => user.isDeleted);
  }

  const handleChange = (name, age, editid) => {
    if (editid) {
      setUser((prevState) =>
        prevState.map((user) =>
          user.id === editid ? { ...user, name, age, isEdited: true } : user
        )
      );
      setEditUser({ id: null, name: "", age: "" });
    } else {
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
      ]);
    }
  };

  // Enable edit mode
  const enableEditMode = (id) => {
    const editableItem = users.find((user) => user.id === id);
    if (!editableItem) return;

    setEditUser({
      id: editableItem.id,
      name: editableItem.name,
      age: editableItem.age,
    });
  };

  const clickHandler = (id) => {
    setUser((prevState) => {
      return prevState.map((user) =>
        user.id === id ? { ...user, isFavorite: !user.isFavorite } : user
      );
    });
  };
  // const editHandler = (id, newName) => {
  //   setUser((prevState) =>
  //     prevState.map((user) =>
  //       user.id === id ? { ...user, name: newName, isEdited: true } : user
  //     )
  //   );
  // };

  const deleteIcon = (id) => {
    setUser((prevState) =>
      prevState.map((user) =>
        user.id === id ? { ...user, isDeleted: true } : user
      )
    );
  };

  // const deleteIcon = (id) => {
  //   setUser((prevState) => prevState.filter((user) => user.id !== id));
  // };

  // const checkboxhandler = () => {
  //   setIsFavoriteShow((prevState) => !prevState);
  // };

  // const enableEditMode = (id) => {
  //   console.log("edit mode on: ", { id });

  //   // 1. search to the main state by id
  //   const editableItem = users.find((user) => user.id === id);

  //   // 3. update the title accordingly
  //   setTitle(editableItem.title);

  //   // 4. update the edit item id accordingly as well to detect that it's a edit mode
  //   setEditUserId(id);
  // };

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
        <Input
          handleChange={handleChange}
          editUser={editUser}
          setEditUser={setEditUser}
        />

        <AllButtons
          isActive={isActive}
          onSetIsActive={setIsActive}
          // onCheckboxhandler={checkboxhandler}
        />
        <Message
          users={filterusers}
          onClickHandler={clickHandler}
          onDeleteIcon={deleteIcon}
          onEnableEditMode={enableEditMode}
          isActive={isActive}
       
        />
        <div className="flex items-center justify-center  mt-4">
          {users.length > 0 && <ClearButton onclearHandler={clearHandler} />}
        </div>
      </article>
    </main>
  );
};

export default App;
