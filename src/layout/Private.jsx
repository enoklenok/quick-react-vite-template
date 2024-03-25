// # lib
import { Outlet, Navigate } from "react-router-dom";

// # layout
import { Layout } from "@layout";

// # store
import { tokenStore } from "@store";

/** 엑세스 토큰이 없다면 로그인 페이지로 안내 */
const Private = () => {
  // 엑세스 토큰 여부에 따른 페이지 이동
  const { ACCESS_TOKEN } = tokenStore();
  return ACCESS_TOKEN ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" />
  );
};

export default Private;
