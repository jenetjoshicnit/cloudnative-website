import { useState, useEffect, useRef } from "react"; 
import Link from "next/link";

const MobileMenu = ({ handleRemove }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });
  const [hoverKey, setHoverKey] = useState("");
  const [menuData, setMenuData] = useState(null);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/header-navbar?populate=*`
        );
        const data = await response.json();
        setMenuData(data?.data?.HeaderData?.menu);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchMenuData();
  }, []);

  const handleClick = (e, key) => {
    e.stopPropagation();
    setIsActive({
      status: isActive.key === key ? false : true,
      key: isActive.key === key ? "" : key,
    });
  };

  const handleSubClick = (key) => {
    setHoverKey(key);
  };

  const handleTouchStart = (key) => {
    setHoverKey(key);
  };

  const handleTouchEnd = () => {
    setHoverKey("");
  };

  if (!menuData) return null;

  return (
    <ul className="navigation clearfix">
      {menuData.map((menuItem) => (
        <li
          key={menuItem.id}
          className={menuItem.subMenu.length > 0 ? "dropdown" : ""}
        >
          <Link href={menuItem.link || "#"}>{menuItem.menuItem}</Link>

          {menuItem.subMenu.length > 0 && (
            <ul
              className={isActive.key === menuItem.id ? "d-block" : "d-none"}
            >
              {menuItem.subMenu.map((subItem) => (
                <li
                  key={subItem.id}
                  className={subItem.subChild ? "dropdown" : ""}
                  onMouseEnter={() => handleSubClick(subItem.subServices)}
                  onMouseLeave={() => setHoverKey("")}
                  onTouchStart={() => handleTouchStart(subItem.subServices)}
                  onTouchEnd={handleTouchEnd}
                >
                  <Link href={subItem.link || "#"}>{subItem.subServices}</Link>
                  {subItem.subChild && (
                    <ul
                      className={
                        hoverKey === subItem.subServices
                          ? "d-block"
                          : "d-none"
                      }
                    >
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

          {menuItem.menuItem === "Services" && (
            <div
              ref={dropdownRef}
              className={
                isActive.key === menuItem.id
                  ? "dropdown-btn active"
                  : "dropdown-btn"
              }
              onClick={(e) => handleClick(e, menuItem.id)}
            >
              <i className="fa fa-angle-down"></i>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
