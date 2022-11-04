// import { getUsers } from "@/api/users";
// import { jsonify } from "@/modules/db";
import Container from "@/ui/container";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function HomePage({ users = [] }) {
  return (
    <>
      <Container className="mt-16 text-white text-2xl flex flex-col gap-8 justify-center items-center">
        <div className="w-[300px] h-[500px] bg-gray-900 rounded-lg flex flex-col py-8 px-12">
          <TodoItem color="pink" itemName="home" taskNumber={4} />
          <TodoItem color="sky" itemName="work" taskNumber={3} />
          <TodoItem color="purple" itemName="school" taskNumber={8} />

          <div className="h-5" />

          <div
            onClick={() => console.log("hi")}
            className="cursor-pointer w-full text-lg flex items-center gap-1"
          >
            <GrayBgContainer>
              <PlusIcon className="w-4 h-4" />
            </GrayBgContainer>
            <div className="relative -top-[8%] w-full flex items-center">
              <div className="flex-grow">Create new list</div>
              <GrayBgContainer className="relative -top-[8%]">
                X
              </GrayBgContainer>
            </div>
          </div>

          {/*no*/}
        </div>
      </Container>
    </>
  );
}

function TodoItem({ color, itemName, taskNumber }) {
  return (
    <div className="text-xl font-[550] flex items-baseline gap-4 cursor-pointer">
      <div className={`border-${color}-700 w-4 h-4 border-[2px] rounded-sm`} />

      <div className="flex-grow">{itemName}</div>
      <GrayBgContainer>{taskNumber}</GrayBgContainer>
    </div>
  );
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
