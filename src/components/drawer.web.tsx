import { Navigator, Slot } from "expo-router";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import * as React from "react";
import { Link } from "expo-router";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useLinkBuilder } from "@react-navigation/native";

// Updated navigation items to match the restaurant theme
const navItems = [
  {
    title: "Menu",
    href: "/menu",
    description: "Explore our delicious breakfast and brunch options.",
  },
  {
    title: "About Us",
    href: "/about",
    description:
      "Learn more about Bacon's story and our commitment to quality.",
  },
  {
    title: "Specials",
    href: "/specials",
    description: "Check out our daily specials and seasonal offerings.",
  },
  {
    title: "Catering",
    href: "/catering",
    description: "Let us cater your next event with our signature dishes.",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch with us for any inquiries or feedback.",
  },
];

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavigationMenuDemo() {
  const selected = useSelectedName();
  const isCustomers = selected === "customers";

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Bacon's</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">Bacon's</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Savor the flavors of our signature breakfast and brunch.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {/* Update ListItem components with relevant restaurant content */}
              <ListItem href="/our-story" title="Our Story">
                Discover the origins of Bacon's and our culinary journey.
              </ListItem>
              <ListItem href="/menu" title="Menu">
                Browse our delectable menu filled with traditional and
                innovative dishes.
              </ListItem>
              <ListItem href="/specials" title="Specials">
                Check out our daily specials and seasonal promotions.
              </ListItem>
              <ListItem href="/events" title="Events">
                Host your events with us and make your celebrations
                unforgettable.
              </ListItem>
              <ListItem href="/contact" title="Contact">
                Get in touch with us for reservations, feedback, or inquiries.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {navItems.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              selected === "catering" &&
                "bg-accent text-accent-foreground font-bold"
            )}
          >
            <Link href="/catering">Catering</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              selected === "specials" &&
                "bg-accent text-accent-foreground font-bold"
            )}
          >
            <Link href="/specials">Specials</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

function Header() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="items-center gap-4 hidden md:flex">
        <NavigationMenuDemo />
      </div>
      <div className="items-center gap-4 flex md:hidden">
        <SheetTrigger className="text-gray-700 hover:text-gray-900 font-bold">
          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
            Menu
          </span>
        </SheetTrigger>
      </div>
      <div className="flex items-center">
        <Link href="/login">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </nav>
  );
}

export default function RootLayout() {
  return (
    <Navigator>
      <Sheet>
        <Header />

        <DrawerView />
        <Slot />
      </Sheet>
    </Navigator>
  );
}

function DrawerButton({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  const buildLink = useLinkBuilder();
  const href = buildLink(name);
  const selected = useSelectedName() === name;
  return (
    <Link href={href}>
      <SheetClose asChild>
        <Button variant={selected ? "default" : "ghost"}>{children}</Button>
      </SheetClose>
    </Link>
  );
}

function useSelectedName() {
  const { state } = Navigator.useContext();
  return state.routes[state.index].name;
}

function DrawerView() {
  const { state } = Navigator.useContext();
  const name = state.routes[state.index].name;
  return (
    <SheetContent side={"left"}>
      <SheetHeader>
        <SheetTitle>Bacon's Menu</SheetTitle>
        <SheetDescription>
          Select from the options below to navigate.
        </SheetDescription>

        <DrawerButton name="index">Home</DrawerButton>
        <DrawerButton name="menu">Menu</DrawerButton>
        <DrawerButton name="about">About Us</DrawerButton>
        <DrawerButton name="specials">Specials</DrawerButton>
        <DrawerButton name="catering">Catering</DrawerButton>
        <DrawerButton name="contact">Contact</DrawerButton>
      </SheetHeader>
    </SheetContent>
  );
}
