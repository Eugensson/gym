import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <Image src="/icons/logo.svg" width={112} height={30} alt="Logo" />
    </Link>
  );
};
