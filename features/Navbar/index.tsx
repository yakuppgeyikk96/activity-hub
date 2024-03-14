"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu";
import AuthDialog from "../Auth/AuthDialog";

export default function Navbar() {
  return (
    <nav className="border py-4 px-8 flex justify-between">
      <div className="flex items-center gap-4">
        <Link href="/" legacyBehavior passHref>
          <a>
            <strong>ActivityHub</strong>
          </a>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/activities" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Activities
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>
        <AuthDialog />
      </div>
    </nav>
  );
}
