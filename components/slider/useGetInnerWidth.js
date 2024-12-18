// import { useSyncExternalStore } from "react";

// const subscribe = (callback) => {
//   window.addEventListener("resize", callback);
//   return () => window.removeEventListener("resize", callback);
// };

// const useGetInnerWidth = () => {
//   return useSyncExternalStore(
//     subscribe,
//     () => window.innerWidth,
//     () => 0
//   );
// };

// export default useGetInnerWidth;

import { useSyncExternalStore } from "react";

const subscribe = (callback) => {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
};

const getSnapshot = () => {
  return typeof window !== "undefined" ? window.innerWidth : 0;
};

const getServerSnapshot = () => 0;

const useGetInnerWidth = () => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useGetInnerWidth;

