import Image from 'next/image';

export function Logo() {
  return (
    <div className="relative h-10 w-32">
      <Image
        src="https://res.cloudinary.com/dhrigocvd/image/upload/v1763972114/Gemini_Generated_Image_rw369trw369trw36-removebg-preview_1_utsfjk.png"
        alt="Vrikshakriti Logo"
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
