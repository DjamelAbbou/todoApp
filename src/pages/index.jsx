// import { getUsers } from "@/api/users";
// import { jsonify } from "@/modules/db";
import { useState } from "react";
import Container from "@/ui/container";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function HomePage({ users = [] }) {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setinputValue] = useState(undefined);
  const [items, setItems] = useState([
    { itemName: "Home", taskNumber: 4 },
    { itemName: "Work", taskNumber: 9 },
    { itemName: "School", taskNumber: 1 },
    { itemName: "Friends", taskNumber: 2 },
  ]);

  return (
    <>
      <Container className="mt-16 text-white text-2xl flex flex-col gap-8 justify-center items-center">
        <div className="w-[300px] h-[500px] bg-gray-900 rounded-lg flex flex-col py-8 px-12">
          {items.map((item) => (
            <TodoItemTwo {...item}>{item.taskNumber}</TodoItemTwo>
          ))}

          <div className="h-5" />

          <div
            onClick={() => console.log("hi")}
            className="cursor-pointer w-full text-lg flex items-center gap-1"
          >
            <GrayBgContainer onClick={() => {}}>
              <PlusIcon className="w-4 h-4" />
            </GrayBgContainer>
            <div
              onClick={() => setShowInput(true)}
              className="relative -top-[8%] w-full flex items-center"
            >
              <div className="flex-grow">Create new list</div>
              <GrayBgContainer className="relative -top-[8%]">
                X
              </GrayBgContainer>
            </div>
          </div>

          {showInput && (
            <div className="left-10 flex-col absolute bg-sky-800 gap-2 z-10 w-[500px] h-[500px] flex justify-center items-center px-8">
              <input
                className="w-full p-3 rounded-md text-black opacity-100"
                value={inputValue}
                onChange={(e) => setinputValue(e.target.value)}
                placeholder="list Name"
              />

              <div
                className="bg-red-500 rounded-md py-2 px-5"
                onClick={() => {
                  setShowInput(false),
                    setItems((prev) => [
                      ...prev,
                      {
                        itemName: inputValue,
                        taskNumber: 0,
                      },
                    ]);
                }}
              >
                Submit
              </div>
            </div>
          )}
          {/*no*/}
        </div>
      </Container>
    </>
  );
}

function TodoItem({ color, itemName }) {
  return (
    <>
      <div className={`border-${color}-700 w-4 h-4 border-[2px] rounded-sm`} />

      <div className="flex-grow">{itemName}</div>
    </>
  );
}

const TodoItemTwo = withGrayContainer(TodoItem);

function withGrayContainer(Component) {
  return function WrappedComponent({ children, className, ...rest }) {
    return (
      <div className="text-xl font-[550] flex items-baseline gap-4 cursor-pointer">
        <Component {...rest} />
        <div
          className={`relative -top-[2px] text-sm text-gray-200 bg-gray-700 w-6 h-5 rounded-[5px] flex items-center justify-center ${
            className ? className : ""
          }`}
        >
          {children}
        </div>
      </div>
    );
  };
}

function GrayBgContainer({ children, className }) {
  return (
    <div
      className={`relative -top-[2px] text-sm text-gray-200 bg-gray-700 w-6 h-5 rounded-[5px] flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}

// export async function getServerSideProps({ ctx }) {
//   const users = await getUsers();

//   return {
//     props: {
//       users: jsonify(users),
//     },
//   };
// }
