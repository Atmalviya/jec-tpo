'use client';

import * as React from 'react';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { UserButton, useUser } from '@clerk/nextjs';

const companiesMenuItems = [
  {
    title: 'Company A',
    href: '/companies/a',
    description: 'Information about Company A.',
  },
  {
    title: 'Company B',
    href: '/companies/b',
    description: 'Information about Company B.',
  },
];

const studentsMenuItems = [
  {
    title: 'Student Resources',
    href: '/students/resources',
    description: 'Guides and resources for students.',
  },
  {
    title: 'Student Portal',
    href: '/students/portal',
    description: 'Access the student portal here.',
  },
];

export function CompaniesMenu() {
  return (
    <NavigationMenu className="hidden md:block lg:block bg-transparen" >
      <NavigationMenuList >
        <NavigationMenuItem >
          <NavigationMenuTrigger>
            Companies
            </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4 md:grid-cols-1">
              {companiesMenuItems.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function StudentsMenu() {
  const { user, isSignedIn } = useUser();
  return (
    <NavigationMenu className="hidden md:block lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Students</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4 md:grid-cols-1">
              {studentsMenuItems.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
              { isSignedIn ?
                (<ListItem key="Dashboard" title="Dashboard" href='/dashboard'>
                  Go to your dashboard.
                </ListItem>)
                :
                (
                  <ListItem key="Sign-in/Sign-up" title="Sign-in / Sign-up" href='/sign-in'>
                    To access the student portal.
                  </ListItem>
                )
                }
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline transition-colors hover:bg-accent hover:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium">{title}</div>
          <p className="text-sm text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = 'ListItem';