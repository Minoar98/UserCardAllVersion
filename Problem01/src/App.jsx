import { useState } from "react";

function App() {
  const [myinfo, setMyinfo] = useState({ name: "nothing", age: "not set" });
  console.log(myinfo);

  const showMyInfo = () => {
    setMyinfo({ name: "Minoar", age: 20 });
  };

  const removeMyInfo = () => {
    setMyinfo({ name: "Nothing", age: "not set" });
  };

  return (
    <>
      <main className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <article className="bg-gray-800 text-white rounded-2xl shadow-lg p-6 w-full max-w-md text-center space-y-4 border border-gray-700">
          <div className="flex justify-center gap-4">
            <button
              onClick={showMyInfo}
              className="px-4 py-2 border border-white rounded-lg hover:bg-gray-700 transition"
            >
              show my info
            </button>
            <button
              onClick={removeMyInfo}
              className="px-4 py-2 border border-white rounded-lg hover:bg-gray-700 transition"
            >
              remove my info
            </button>
          </div>

          <div className="mt-6 space-y-1">
            <p className="text-lg">My name is {myinfo.name}</p>
            <p className="text-lg">Age is {myinfo.age}</p>
          </div>
        </article>
      </main>
    </>
  );
}

export default App;
