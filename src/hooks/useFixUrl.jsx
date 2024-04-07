import { useEffect } from "react";

// we need to do this because github pages doesnt support react router
export default function useFixUrl(pageName) {
  useEffect(() => {
    window.history.replaceState({}, "", `/?page=${pageName}`);
    window.scrollTo(0, 0);
  }, [pageName]);
}