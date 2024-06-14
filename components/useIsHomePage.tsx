// hooks/useIsHomePage.ts
import { useRouter } from 'next/router';

const useIsHomePage = () => {
  const router = useRouter();
  return router.pathname === '/';
};

export default useIsHomePage;
