import Image from "next/image";
import { auth } from "../lib/auth";
import { ReactElement } from "react";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div>
      <Image
        src={`${session?.user?.image ? session?.user?.image : ""}`}
        width={24}
        height={24}
        alt="User Avatar"
      />
    </div>
  );
}
