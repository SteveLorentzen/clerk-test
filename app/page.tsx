import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs';

export default function Home() {
  const thing = auth();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        {thing.userId + 'coward'}
        <UserButton afterSignOutUrl='/' />
      </div>
    </main>
  );
}
