// import { getUsers } from "@/api/users";
// import { jsonify } from "@/modules/db";
import Container from "@/ui/container";
import Head from "next/head";

export default function HomePage({ users = [] }) {
  return (
    <>
      <Container className="mt-16 text-white text-2xl flex flex-col gap-8 justify-center items-center">
        <div className="w-[300px] h-[500px] bg-gray-900 rounded-lg flex flex-col py-8 px-12">
          <TodoItem />
        </div>
      </Container>
    </>
  );
}

function TodoItem({ items }) {
  return (
    <div className="text-xl font-[550] flex items-baseline gap-4 cursor-pointer">
      <div className="w-4 h-4 border-[2px] border-red-500 rounded-sm"></div>

      <div className="flex-grow">Home</div>

      <div className=" relative -top-[2px] text-sm text-gray-200 bg-gray-700 w-6 h-5 rounded-[5px] flex items-center justify-center">
        12
      </div>
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
