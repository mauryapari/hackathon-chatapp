"use client";

import { useEffect, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useUser } from "@clerk/clerk-react";
import { useAuth } from "@clerk/nextjs";

export default function () {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  console.log(`Is authenticated: ${isSignedIn}`);
  console.log(`User: ${user?.id}`);

  const [userId, setUserId] = useState<Id<"users"> | null>(null);
  const storeUser = useMutation(api.users.store);

  // Call the `storeUser` mutation function to store
  // the current user in the `users` table and return the `Id` value.
  useEffect(() => {
    if (!isSignedIn) return;

    async function createUser() {
      const userId = await storeUser({
        clerk_user_id: user?.id as string,
      });
      setUserId(userId);
    }
    createUser();

    return () => setUserId(null);
  }, [isSignedIn, storeUser]);

  return userId;
}
