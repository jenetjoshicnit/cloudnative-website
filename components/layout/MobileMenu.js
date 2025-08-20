import { useState, useEffect } from "react";
import Link from "next/link";

const MenuItem = ({ item, activeKeys, setActiveKeys }) => {
  const toggleDropdown = (e, key) => {
    e.stopPropagation();
    if (activeKeys.includes(key)) {
      setActiveKeys((prev) => prev.filter((activeKey) => activeKey !== key));
    } else {
      setActiveKeys((prev) => [...prev, key]);
    }
  };

  const isActive = (key) => activeKeys.includes(key);

  return (
    <li className={item.subMenu?.length > 0 || item.subChild ? "dropdown" : ""}>
      <Link href={item.link || "#"}>{item.menuItem || item.subServices || item.childList}</Link>

      {item.subMenu?.length > 0 && (
        <ul className={isActive(item.id) ? "d-block" : "d-none"}>
          {item.subMenu.map((subItem) => (
            <MenuItem
              key={subItem.id}
              item={subItem}
              activeKeys={activeKeys}
              setActiveKeys={setActiveKeys}
            />
          ))}
        </ul>
      )}

      {item.subChild && (
        <ul className={isActive(item.id) ? "d-block" : "d-none"}>
          {item.subChild.map((child) => {
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
                <Link href={route}>
                  {child.childList}
                  {child.subChildList?.length > 0 && (
                    <>
                      <div
                        className={
                          activeKeys.includes(child.id)
                            ? "dropdown-btn active"
                            : "dropdown-btn"
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setActiveKeys(prev =>
                            prev.includes(child.id)
                              ? prev.filter(key => key !== child.id)
                              : [...prev, child.id]
                          );
                        }}
                        style={{ display: "inline-block", marginLeft: "6px" }}
                      >
                        <i
                          className={
                            activeKeys.includes(child.id)
                              ? "fa fa-angle-up"
                              : "fa fa-angle-down"
                          }
                        ></i>
                      </div>
                      {activeKeys.includes(child.id) && (
                        <ul className="sub-submenu" style={{ paddingLeft: "20px" }}>
                          {child.subChildList.map((subItem) => (
                            <li key={subItem.id}>
                              <Link href={subItem.link || "#"}>{subItem.item}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </Link>

                {child.subChildList && child.subChildList.length > 0 && activeKeys.includes(child.id) && (
                  <ul className="sub-submenu" style={{ paddingLeft: "20px" }}>
                    {child.subChildList.map((subItem) => (
                      <li key={subItem.id}>
                        <Link href={subItem.link || "#"}>{subItem.item}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}

      {(item.subMenu?.length > 0 || item.subChild) && (
        <div
          className={
            isActive(item.id) ? "dropdown-btn active" : "dropdown-btn"
          }
          onClick={(e) => toggleDropdown(e, item.id)}
        >
          <i className="fa fa-angle-down"></i>
        </div>
      )}
    </li>
  );
};

const MobileMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const [activeKeys, setActiveKeys] = useState([]);

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

  if (!menuData) return null;

  return (
    <ul className="navigation clearfix">
      {menuData.map((menuItem) => (
        <MenuItem
          key={menuItem.id}
          item={menuItem}
          activeKeys={activeKeys}
          setActiveKeys={setActiveKeys}
        />
      ))}
    </ul>
  );
};

export default MobileMenu;
