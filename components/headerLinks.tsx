import Link from "next/link";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

interface LinkProps {
  name: string;
  link: string;
}

interface Props {
  links: LinkProps[];
}

const HeaderLinks: React.FC<Props> = ({ links }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"ghost"} className="block md:hidden">
          <MenuIcon></MenuIcon>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-screen">
        <ul className="flex flex-col items-center">
          {links.map((link, index) => {
            return (
              <Link href={link.link} key={index}>
                <Button variant={"link"}>{link.name}</Button>
              </Link>
            );
          })}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default HeaderLinks;
