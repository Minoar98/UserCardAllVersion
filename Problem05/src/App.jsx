import { useState } from "react";
import Input from "./components/Input";
import Message from "./components/Message";
import ClearButton from "./components/ClearButton";
import Checkbox from "./components/Checkbox";

const App = () => {
  const [users, setUser] = useState([]);
  const [isFavoritesShow, setIsFavoriteShow] = useState(false);

  let filterUsers = users;
  if (isFavoritesShow) {
    filterUsers = users.filter((user) => user.isFavorite === isFavoritesShow);
  }

  // let filterUsers2 = isFavoritesShow
  //   ? users.filter((user) => user.isFavorite === isFavoritesShow)
  //   : users;

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

  const clearHandler = () => {
    console.log("Clear All");
    setUser([]);
  };

  const checkboxChangeHandler = () => {
    setIsFavoriteShow((prevState) => !prevState);
  };

  return (
    <>
      <main className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <article className="bg-gray-800 text-white rounded-2xl shadow-lg p-6 w-full max-w-md text-center space-y-4 border border-gray-700">
          <Input onhandleChange={handleChange} />
          <Message users={filterUsers} onClickHandler={clickHandler} />
          <div className="flex items-center justify-between mt-4">
            <Checkbox
              isFavoritesShow={isFavoritesShow}
              onCheckboxChangeHandler={checkboxChangeHandler}
            />
            <ClearButton onclearHandler={clearHandler} />
          </div>
        </article>
      </main>
    </>
  );
};

export default App;
