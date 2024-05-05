"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";
import { fetchUserProfile } from "@/redux/features/userProfile/userProfileSlice";
import { useSession, signIn, signOut } from "next-auth/react";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuList } from "./menu";
import { useAppSelector } from "@/redux/hooks";
import {
  selectAvatar,
  selectBio,
} from "@/redux/features/userProfile/userProfileSlice";
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import Image from "next/image";

type MenuItem = {
  name: string;
  path: string;
  active: boolean;
};

export default function NavbarComponent() {
  const { data: session } = useSession();
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, []);

  const count = useAppSelector((state) => state.counter.value);
  const avatar = useAppSelector(selectAvatar);
  const bio = useAppSelector(selectBio);
  const pathname = usePathname();
  const [menu, setMenu] = useState<MenuItem[]>(MenuList);

  return (
    <Navbar fluid rounded className="w-full max-w-[1200px] mx-auto">
      <NavbarBrand as={Link} href="">
        <img
          src="mylogo.png"
          className="mr-3s h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          {bio} {count}
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {menu.map((item, index) => (
          <NavbarLink
            key={index}
            as={Link}
            href={item.path}
            active={item.path === pathname}
          >
            {item.name}
          </NavbarLink>
        ))}
      </NavbarCollapse>
      {session ? (
        <>
		{/* <div className="flex items-center justify-end gap-3">
		
			<Button onPress={()=>signOut()}>
				Log out
			</Button>
          <div className="w-8 h-8 relative ">
            <Image
              src={session.user?.image as string}
              fill
              alt=""
              className="object-cover rounded-full"
            />
          </div>
		  </div> */}
		  <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar	
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src={session.user?.image as string}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem onClick={()=>signOut()} key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </>
      ) : (
        <>
          <Button onPress={() => router.push('/login')} color="primary">
            login Account
          </Button>
        </>
      )}
    </Navbar>
  );
}
