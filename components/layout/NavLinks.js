import Link from "next/link";
import React, { useState, useEffect } from "react";

const NavLinks = ({ extraClassName }) => {
  const [navbarData, setNavbarData] = useState(null);
  const [dropdowns, setDropdowns] = useState({});

  const toggleDropdown = (id) => {
    setDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/header-navbar?populate=*`
        );
        const data = await res.json();
        setNavbarData(data?.data?.HeaderData?.menu);
      } catch (error) {
        console.error("Error fetching navbar data:", error);
      }
    };

    fetchNavbar();
  }, []);

  if (!navbarData) return <></>;

  return (
    <ul className={`navigation ${extraClassName}`}>
      {navbarData.map((menuItem) => (
        <li
          key={menuItem.id}
          className={menuItem.subMenu.length > 0 ? "dropdown" : ""}
        >
          <Link href={menuItem.link || "#"}>{menuItem.menuItem}</Link>

          {menuItem.subMenu.length > 0 && (
            <ul 
            className={`sub-menu ${dropdowns[menuItem.id] ? "open" : ""}`}
            onMouseEnter={() => toggleDropdown(menuItem.id)}
            onMouseLeave={() => toggleDropdown(menuItem.id)}
          >
              {menuItem.subMenu.map((subItem) => (
                <li
                  key={subItem.id}
                  className="dropdown"
                  onMouseEnter={() => toggleDropdown(subItem.id)}
                  onMouseLeave={() => toggleDropdown(subItem.id)}
                >
                  <Link href={subItem.link || "#"}>
                    {subItem.subServices}
                  </Link>

                  {subItem.subChild && (
                    <ul className="sub-dropdown">
                      {subItem.subChild.map((child) => {
                        const route = child.link
                        ? child.link
                        : `/${child.childList
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .replace(/[&]/g, "and")
                            .replace(/[()]/g, "")
                            .replace(/[^\w-]+/g, "")}`;
                        return (
                          <li key={child.id}>
                            <Link href={route}>{child.childList}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;

