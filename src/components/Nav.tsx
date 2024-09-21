"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Phishing",
    href: "/scam/phising-scam",
    description:
      "Involve fraudulent emails, messages, or websites that impersonate trusted entities to steal personal information.",
  },
  {
    title: "Spam Messages or Calls",
    href: "/scam/spam-call",
    description:
      "Involve fraudsters impersonating reputable organizations to trick people into sharing personal or financial information or making payments.",
  },
  {
    title: "Malware",
    href: "/scam/tech-support",
    description:
      "Scammers pose as tech support agents from reputable companies, claiming issues with your computer to charge for fake services or install harmful software.",
  },
  {
    title: "Online Shopping Scams",
    href: "/scam/online-shopping",
    description: "Scammers create fake online stores or posts to trick people into buying non-existent or poor-quality products.",
  },
  {
    title: "Viruses",
    href: "/scam/viruses",
    description:
      "A type of malware that corrupts your device.",
  },
  {
    title: "Ransomware",
    href: "/scam/ransomware",
    description:
      "A form of malware that demands money to remove a virus from your device."
  },
]

export default function Nav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cyber Security</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="w-6 h-6" /> */}
                    <div className="mt-4 mb-2 text-xl font-medium">
                    Endpoint Security
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    Endpoints: desktops, laptops, or any mobile device.  
                    Protection is built into these devices to protect users, but this protection alone is not enough.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Application Security">
              Any steps to reduce malware on mobile applications or websites.
              Examples include registration and login and data confirmation.
              </ListItem>
              <ListItem href="/" title="Information Security">
              This refers to steps taken by an individual to protect their own information.
              </ListItem>
              <ListItem href="/" title="Tips for Staying Safe Online">
              Create Strong & Unique Passwords, Enable Two-Factor Authentication (2FA),
              Be Cautious with QR code in public, Use Secure Websites.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cyber Scams</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
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
          <Link href="/video" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Videos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/quizz" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Quiz
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
