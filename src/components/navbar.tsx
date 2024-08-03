'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import dy from '../../public/dy.webp';
import { Button } from './ui/button';

const components = [
  {
    title: 'Nutrition Plans',
    href: '/nutrition-plans',
    description: 'Customized nutrition plans to meet your dietary needs and goals.',
  },
  {
    title: 'Diet Tips',
    href: '/diet-tips',
    description: 'Expert tips and advice on maintaining a healthy diet.',
  },
  {
    title: 'Recipes',
    href: '/recipes',
    description: 'Delicious and healthy recipes for every meal.',
  },
  {
    title: 'Supplements',
    href: '/supplements',
    description: 'Information on dietary supplements and their benefits.',
  },
  {
    title: 'Consultations',
    href: '/consultations',
    description: 'Schedule a consultation with our expert dietitians.',
  },
  {
    title: 'About Us',
    href: '/about',
    description: 'Learn more about our mission and team.',
  },
];

export function Navbar() {
  return (
    <div className="flex justify-between border-b pb-4 list-none">
      {/* //! Mobile Navbar */}
      <div className="flex sm:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="pt-4">Diyetisyen Beyzanur Canel</SheetTitle>

              <NavigationMenu className="flex flex-col justify-start list-none">
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Ana Sayfa</NavigationMenuLink>
                  <ul className="flex flex-col gap-3 justify-start  ">
                    {components.map((component) => (
                      <ListItem key={component.title} title={component.title} href={component.href}></ListItem>
                    ))}
                  </ul>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/faq" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Sık Sorulanlar</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenu>
              <SheetDescription></SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      {/* //! MENU */}

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="hidden sm:flex">
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Ana Sayfa</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Diyetisyen Beyzanur Canel</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted  no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Image src={dy} alt={'Beslenme ve diyet uzmanı'} />
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/services" title="Online Rezervasyon">
                  Online olarak rezervasyon yapabilirsiniz.
                </ListItem>
                <ListItem href="/services/nutrition-plans" title="Sosyal Medya">
                  Sosyal medyada bizi takip edin.
                </ListItem>
                <ListItem href="/services/consultations" title="İletişim">
                  Bizimle iletişime geçin.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <div className="hidden sm:flex">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/faq" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Sık Sorulanlar</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
      <div>
        <Button>Login</Button>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
