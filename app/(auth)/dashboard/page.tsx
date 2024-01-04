import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className='bg-black text-6xl text-white'>
      This is the Dashboard
      <UserButton afterSignOutUrl="/sign-in" />
    </main>
  );
};
