'use client'
import { useAuth } from '@clerk/nextjs'
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton
} from '@clerk/nextjs'

export default function Home() {

  const { isLoaded, userId, sessionId, getToken } = useAuth()

  return (
    <>
      <div>
        hi
        Hello, {userId ? userId : 'No user'}
        <br />
        { userId && sessionId ? <SignOutButton /> : <SignInButton />}
      </div>
    </>
  );
}
