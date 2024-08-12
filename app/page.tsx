
import { FloatingNav } from '@/components/ui/FloatingNav';
import Hero from '../components/Hero'
import { IconHome, IconUser, IconMessage, IconMoneybag, IconBellDollar, IconServicemark } from '@tabler/icons-react';
export default function Home() {
  return (
    <main className="relative bg-gray-900 flex justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {
            name: "Brandora",
            link: "/",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
          },
          {
            name: "Home",
            link: "/",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
          },
          {
            name: "About Us",
            link: "/about",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
          },
          {
            name: "Services",
            link: "/service",
            icon: (
              <IconServicemark className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
          },
          {
            name: "Works",
            link: "/works",
            icon: (
              <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
          },
          {
            name: "Pricing",
            link: "/pricing",
            icon: (
              <IconBellDollar className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
          },
        ]}  />
        <Hero />
      </div>
    </main>
  );
}
