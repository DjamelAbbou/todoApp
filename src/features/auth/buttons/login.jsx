import { UserIcon } from "@heroicons/react/20/solid";
import PrimaryButton from "@/ui/button/primary";

export default function LoginButton({
  busy,
  setBusy = () => {},
  setUser = () => {},
}) {
  return (
    <PrimaryButton
      busy={busy}
      onClick={() => {
        setBusy(true);

        setTimeout(() => {
          setBusy(false);
          setUser({
            name: "djamel Abbou",
            email: "djamelabbou@outlook.com",
            lastLoggedAt: new Date(),
          });
        }, 5000);
      }}
    >
      <div className="flex flex-row gap-3 items-center">
        <UserIcon className="w-6 h-6" />
        Login
      </div>
    </PrimaryButton>
  );
}
