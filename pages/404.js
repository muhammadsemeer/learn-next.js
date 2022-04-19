import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <div className="not-found">
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link href="/">
          <a>Go to Homepage</a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
