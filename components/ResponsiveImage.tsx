import Image from 'next/image';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function ResponsiveImage({
  src,
  alt,
  className,
  priority = false,
}: ResponsiveImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      quality={75}
      priority={priority}
    />
  );
}
