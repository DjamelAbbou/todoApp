export default function User({ name, email, address, onEdit = () => {} }) {
  return (
    <div onClick={onEdit}>
      <div>{name}</div>
      <div>{email}</div>
      <div>{address ? <Address {...{ address }} /> : ""}</div>
    </div>
  );
}

export function Address({ address1, address2, city, state, zip }) {
  return (
    <div>
      <div>{address1}</div>
      <div>{address2}</div>
      <div>{city}</div>
      <div>{state}</div>
      <div>{zip}</div>
    </div>
  );
}
