// import { useState, useEffect, useRef } from "react"; 
// import Link from "next/link";

// const MobileMenu = ({ handleRemove }) => {
//   const [isActive, setIsActive] = useState({
//     status: false,
//     key: "",
//   });
//   const [hoverKey, setHoverKey] = useState("");
//   const [menuData, setMenuData] = useState(null);

//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const fetchMenuData = async () => {
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/api/header-navbar?populate=*`
//         );
//         const data = await response.json();
//         setMenuData(data?.data?.HeaderData?.menu);
//       } catch (error) {
//         console.error("Error fetching menu data:", error);
//       }
//     };

//     fetchMenuData();
//   }, []);

//   const handleClick = (e, key) => {
//     e.stopPropagation();
//     setIsActive({
//       status: isActive.key === key ? false : true,
//       key: isActive.key === key ? "" : key,
//     });
//   };

//   const handleSubClick = (key) => {
//     setHoverKey(key);
//   };

//   if (!menuData) return null;

//   return (
//     <ul className="navigation clearfix">
//       {menuData.map((menuItem) => (
//         <li
//           key={menuItem.id}
//           className={menuItem.subMenu.length > 0 ? "dropdown" : ""}
//         >
//           <Link href={menuItem.link || "#"}>
//             {menuItem.menuItem}
//           </Link>

//           {menuItem.subMenu.length > 0 && (
//             <ul
//               className={isActive.key === menuItem.id ? "d-block" : "d-none"}
//             >
//               {menuItem.subMenu.map((subItem) => (
//                 <li
//                   key={subItem.id}
//                   className={subItem.subChild ? "dropdown" : ""}
//                   onMouseEnter={() => handleSubClick(subItem.subServices)}
//                   onMouseLeave={() => setHoverKey("")}
//                 >
//                   <Link href={subItem.link || "#"}>
//                     {subItem.subServices}
//                   </Link>
//                   {subItem.subChild && (
//                     <ul
//                       className={
//                         hoverKey === subItem.subServices
//                           ? "d-block"
//                           : "d-none"
//                       }
//                     >
//                       {subItem.subChild.map((child) => {
                        
//                         const route = child.link
//                         ? child.link
//                         : `/${child.childList
//                             .toLowerCase()
//                             .replace(/\s+/g, "-")
//                             .replace(/[&]/g, "and")
//                             .replace(/[()]/g, "")
//                             .replace(/[^\w-]+/g, "")}`;
//                         return (
//                           <li key={child.id}>
//                             <Link href={route}>{child.childList}</Link>
//                           </li>
//                         );
//                       })}
//                     </ul>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           )}

//           {menuItem.menuItem === "Services" && (
//             <div
//               ref={dropdownRef}
//               className={
//                 isActive.key === menuItem.id
//                   ? "dropdown-btn active"
//                   : "dropdown-btn"
//               }
//               onClick={(e) => handleClick(e, menuItem.id)}
//             >
//               <i className="fa fa-angle-down"></i>
//             </div>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default MobileMenu;

import { useState, useEffect } from "react";
import Link from "next/link";

const MenuItem = ({ item, activeKeys, setActiveKeys }) => {
  // Helper function to toggle dropdowns
  const toggleDropdown = (e, key) => {
    e.stopPropagation(); // Prevent event propagation to the parent (e.g., sidebar close logic)
    if (activeKeys.includes(key)) {
      // If the key is already active, remove it
      setActiveKeys((prev) => prev.filter((activeKey) => activeKey !== key));
    } else {
      // Add the key to the active list
      setActiveKeys((prev) => [...prev, key]);
    }
  };

  const isActive = (key) => activeKeys.includes(key);

  return (
    <li className={item.subMenu?.length > 0 || item.subChild ? "dropdown" : ""}>
      <Link href={item.link || "#"}>{item.menuItem || item.subServices}</Link>

      {/* Render subMenu dropdown */}
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

      {/* Render subChild dropdown */}
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
                <Link href={route}>{child.childList}</Link>
              </li>
            );
          })}
        </ul>
      )}

      {/* Add a toggle button for items with dropdown */}
      {(item.subMenu?.length > 0 || item.subChild) && (
        <div
          className={
            isActive(item.id) ? "dropdown-btn active" : "dropdown-btn"
          }
          onClick={(e) => toggleDropdown(e, item.id)} // Pass event to stop propagation
        >
          <i className="fa fa-angle-down"></i>
        </div>
      )}
    </li>
  );
};

const MobileMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const [activeKeys, setActiveKeys] = useState([]); // Array to track active dropdowns

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
