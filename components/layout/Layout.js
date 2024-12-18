// import { useEffect, useState } from 'react';
// import BackToTop from '../elements/BackToTop';
// import Footer from './Footer';
// import Header4 from './Header4';
// import PageHead from './PageHead';

// const Layout = ({ children, HeaderStyle }) => {
//     const [searchToggle, setSearchToggled] = useState(false);
//     const [scroll, setScroll] = useState(0)
//     const handleToggle = () => setSearchToggled(!searchToggle);
//     useEffect(() => {
//         document.addEventListener("scroll", () => {
//             const scrollCheck = window.scrollY > 100
//             if (scrollCheck !== scroll) {
//                 setScroll(scrollCheck)
//             }
//         })
//     })

//     const handleOpen = () => {
//         document.body.classList.add("mobile-menu-visible");
//     }

//     const handleRemove = () => {
//         document.body.classList.remove("mobile-menu-visible");
//     }
//     return (
//         <>
//             <PageHead />
//             <div className="page-wrapper" id="top">

//                 {HeaderStyle === "one" && <Header4 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
//                 {HeaderStyle === "four" && <Header4 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}


//                 {/* <Sidebar /> */}

//                 {children}

//                 <Footer />
//             </div>
//             {/* <BackToTop /> */}
            
//             <BackToTop/>
//         </>
//     );
// };

// export default Layout;

import { useEffect, useState } from 'react';
import BackToTop from '../elements/BackToTop';
import Footer from './Footer';
import Header4 from './Header4';
import PageHead from './PageHead';

const Layout = ({ children, HeaderStyle }) => {
    const [searchToggle, setSearchToggled] = useState(false);
    const [scroll, setScroll] = useState(0);

    const handleToggle = () => setSearchToggled(!searchToggle);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100;
            setScroll(scrollCheck);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleOpen = () => {
        document.body.classList.add("mobile-menu-visible");
    };

    const handleRemove = () => {
        document.body.classList.remove("mobile-menu-visible");
    };

    return (
        <>
            <PageHead />
            <div className="page-wrapper" id="top">
                {HeaderStyle === "one" && (
                    <Header4
                        handleOpen={handleOpen}
                        handleRemove={handleRemove}
                        searchToggle={searchToggle}
                        handleToggle={handleToggle}
                        scroll={scroll}
                    />
                )}
                {HeaderStyle === "four" && (
                    <Header4
                        handleOpen={handleOpen}
                        handleRemove={handleRemove}
                        searchToggle={searchToggle}
                        handleToggle={handleToggle}
                        scroll={scroll}
                    />
                )}

                {children}

                <Footer />
            </div>

            <BackToTop />
        </>
    );
};

export default Layout;