import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from "./NavLink.module.css";
import { FC, PropsWithChildren } from "react";

enum Paths {
  meals = "/meals",
  community = "/community"
}

interface NavLinkProps extends PropsWithChildren {
  href: keyof typeof Paths;
}

const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      href={Paths[href]}
      className={
        path.startsWith(Paths[href])  
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
