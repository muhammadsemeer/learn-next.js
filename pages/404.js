import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NotFound = () => {
  const router = useRouter();

  const [count, setCount] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    const routerInterval = setInterval(() => {
      router.push("/");
    }, 10 * 1000);

    return () => {
      clearInterval(intervalId);
      clearInterval(routerInterval);
    };
  }, [router]);

  return (
    <div>
      <div className="not-found">
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>The page you are looking for does not exist.</p>
        <p>
          You can go back to the&nbsp;
          <Link href="/">
            <a>home page</a>
          </Link>
          &nbsp;or wait for <strong>{count}</strong> seconds.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
