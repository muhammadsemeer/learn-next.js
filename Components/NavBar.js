import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/vercel.svg" width={128} height={64} alt="vercel" />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/test">Test</Link>
    </nav>
  );
};

export default NavBar;
