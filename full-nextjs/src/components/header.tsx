"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create-post",
    label: "Create post",
  },
];

const Header = () => {
  const pathname = usePathname();

  const { user } = useKindeBrowserClient();

  const authenticatedNavLinks: NavLink[] = [
    ...navLinks,
    ...(user
      ? [
          {
            href: "/yourPosts",
            label: "Your posts",
          },
        ]
      : []),
  ];

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <Image
          src="https://bytegrad.com/course-assets/youtube/example-logo.png"
          alt="website-logo"
          className="w-[35px] h-[35px]"
          width={35}
          height={35}
        />
      </Link>

      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {authenticatedNavLinks.map((link) => (
            <li className="text-black" key={link.href}>
              <Link
                className={`${
                  pathname === link.href ? "text-zinc-700" : "text-zinc-400"
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
