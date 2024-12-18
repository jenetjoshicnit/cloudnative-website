// import { useEffect, useState } from "react";

// function BackToTop() {
//     const [hasScrolled, setHasScrolled] = useState("false");
//     useEffect(() => {
//         window.addEventListener("scroll", onScroll);
//         return () => {
//             window.removeEventListener("scroll", onScroll);
//         };
//     });

//     const onScroll = () => {
//         if (window.scrollY > 100 && !hasScrolled) {
//             setHasScrolled(true);
//         } else if (window.scrollY < 100 && hasScrolled) {
//             setHasScrolled(false);
//         }
//     };

//     return (
//         <>
//             {hasScrolled && (
//                 <a className={`scroll-to-top scroll-to-target ${hasScrolled && "d-block"}`} href="#top"><span class="fa fa-angle-up"></span></a>
//             )}
//         </>
//     );
// }
// export default BackToTop;

import { useEffect, useState } from "react";

function BackToTop() {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const onScroll = () => {
            if (window.scrollY > 100 && !hasScrolled) {
                setHasScrolled(true);
            } else if (window.scrollY <= 100 && hasScrolled) {
                setHasScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [hasScrolled]);

    return (
        <>
            {hasScrolled && (
                <a
                    className="scroll-to-top scroll-to-target d-block"
                    href="#top"
                >
                    <span className="fa fa-angle-up"></span>
                </a>
            )}
        </>
    );
}

export default BackToTop;
