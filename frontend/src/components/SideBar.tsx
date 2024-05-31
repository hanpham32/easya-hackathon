import { useEffect, useState, ReactNode } from "react";

interface NavLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  active?: string;
  setActive?: (pathname: string) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href = "", className = "", active = "" }) => {
  const [pathname, setPathname] = useState("/");

  const isActive = pathname === href;
  const activeClass = isActive ? active : "";

  useEffect(() => {
    setPathname(window.location.pathname);
  }, [href]);

  return (
    <a href={href} className={`${activeClass} ${className}`}>
      {children}
    </a>
  );
};

interface TitleProps {
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => (
  <h3 className='pb-3 px-4 font-medium text-gray-800 md:px-8'>
    {children}
  </h3>
);

interface SectionsListProps {
  items: Array<{ name: string; href: string }>;
}

const SectionsList: React.FC<SectionsListProps> = ({ items }) => (
  <div className='text-gray-600 px-4 md:px-8'>
    <ul>
      {items?.map((item, idx) => (
        <li key={idx}>
          <NavLink
            href={item?.href}
            active='text-gray-900 border-indigo-600'
            className='block w-full py-2 px-4 border-l hover:border-indigo-600 hover:text-gray-900 duration-150'>
            {item?.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

const Sidebar: React.FC = () => {
  const lessons = {
    get_started: [
      { name: "Repository Setup", href: "title0" },
    ],
    fundamentals: [
      { name: "Module", href: "title1" },
      { name: "Structs", href: "title2" },
      { name: "Sui Objects", href: "title3" },
      { name: "Reading Object fields", href: "title4" },
    ],
    cargoLessons: [
      { name: "Package protection function", href: "title4" },
      { name: "Programmable Transaction Block", href: "title5" },
    ]
  }

  return (
    <nav className="fixed z-40 top-78 left-0 w-full h-full border-r bg-white space-y-8 overflow-auto sm:w-80">
      <br />
      <div className='text-[0.9rem] space-y-6'>
        <div>
          <Title>
            Get Started
          </Title>
          <SectionsList items={lessons.get_started} />
        </div>
        <div>
          <Title>Fundamental concepts</Title>
          <SectionsList items={lessons.fundamentals} />
        </div>
        <div>
          <Title>Intermediate Move</Title>
          <SectionsList items={lessons.cargoLessons} />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
