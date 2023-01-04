import Link from "next/link";
import { useRouter } from "next/router";

const NavigationBar = () => {
  const router = useRouter();
  return (
    <nav>
      <Link
        style={{ color: router.pathname === "/" ? "red" : "initial" }}
        href="/"
      >
        Home
      </Link>
      <Link
        style={{ color: router.pathname === "/about" ? "red" : "initial" }}
        href="/about"
      >
        About
      </Link>
    </nav>
  );
};

export default NavigationBar;
