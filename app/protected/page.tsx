import AuthButton from "@/components/AuthButton";
import { getAuthenticatedUser, isAuthenticated } from "../products/fetcher";
import ProfileForm from "@/components/post/ProfileForm";

export default async function ProtectedPage() {
  const user = await isAuthenticated();

  return (
    <>
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <div className="w-full">
          <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
              <AuthButton />
            </div>
          </nav>
        </div>
      </div>
      <ProfileForm user={user} />
    </>
  );
}
