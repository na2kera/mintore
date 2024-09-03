import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { isAuthenticated } from "../products/fetcher";

export default async function ProtectedPage() {
  await isAuthenticated();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <AuthButton />
          </div>
        </nav>
      </div>
    </div>
  );
}
