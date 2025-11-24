import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="https://res.cloudinary.com/dhrigocvd/image/upload/v1763971951/logo_for_website_jv4hg6.png"
      alt="Vrikshakriti Logo"
      width={40}
      height={40}
      className="h-10 w-10"
    />
  );
}
