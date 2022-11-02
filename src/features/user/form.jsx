import TextField from "@/ui/text-field";
import withLabel from "@/ui/withLabel";

const LabeledTextField = withLabel(TextField);
export default function UserForm({ name, email, address }) {
  return (
    <>
      <LabeledTextField value={name}>Name</LabeledTextField>
      <LabeledTextField value={email}>Email</LabeledTextField>
      {address && <AddressForm {...address} />}
    </>
  );
}

export function AddressForm({ address1, address2, city, state, zip }) {
  return (
    <>
      <LabeledTextField value={address1}>address 1</LabeledTextField>
      <LabeledTextField value={address2}>address 2</LabeledTextField>
      <LabeledTextField value={city}>city</LabeledTextField>
      <LabeledTextField value={state}>state</LabeledTextField>
      <LabeledTextField value={zip}>zip</LabeledTextField>
    </>
  );
}
