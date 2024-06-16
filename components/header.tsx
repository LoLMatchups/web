import Link from "next/link";
import { Button } from "./ui/button";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { LogInIcon, LogOutIcon, MenuIcon, UserPlus } from "lucide-react";
import HeaderLinks from "./headerLinks";
import Logo from "./logo";

export default async function Header() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const user = await getUser();

  const headerLinks = [
    { name: "All champions", link: "/champions" },
    { name: "Custom matchup", link: "/" },
  ];

  return (
    <header className="w-full min-h-16 px-4">
      <div className="w-full border-b-[1px] border-[hsl(var(--border))] h-full flex items-center justify-between py-2">
        <HeaderLinks links={headerLinks} />
        <Logo />
        <div className="items-center h-full hidden md:flex">
          {headerLinks.map((link, index) => {
            return (
              <Link href={link.link} key={index}>
                <Button variant={"link"}>{link.name}</Button>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
