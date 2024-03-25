// # lib
import { create } from "zustand";
// import { persist } from "zustand/middleware";

/** 전역상태 토큰 스토어 */
const tokenStore = create(
  // persist(
  (set) => ({
    ACCESS_TOKEN: null,
    setAccessToken: (token) => {
      set({ ACCESS_TOKEN: token });
    },
    resetAccessToken: () => {
      set({ ACCESS_TOKEN: null });
    },
  }),
  {
    // 로컬스토리지 이름
    name: "tokenStore",
  }
);
// );

export default tokenStore;
