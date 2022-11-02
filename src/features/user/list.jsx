import User from "./";

export default function UserList({ users, setSelectedUser = () => {} }) {
  return users.map((user, index) => (
    <div key={index} className="border borde-red-500">
      <User {...user} onEdit={() => setSelectedUser(user)} />
    </div>
  ));
}
