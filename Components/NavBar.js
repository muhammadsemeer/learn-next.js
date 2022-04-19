import Image from "next/image";
import Link from "next/link";
import crypto from "crypto"

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/vercel.svg" width={128} height={64} alt="vercel" />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/todo">Todo</Link>
      <Link href={
        "/" + crypto.randomBytes(1).toString("hex")
      }>404</Link>
    </nav>
  );
};

export default NavBar;
