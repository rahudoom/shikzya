import Link from "next/link";
import Image from "next/image";

/**
 * ShikZya brand logo. Renders the supplied square brand lockup
 * (`public/ShikZya_logo.png`). Adjust `height`/`width` per placement.
 */
export default function Logo({
  className = "",
  height = 100,
  onClick,
}: {
  className?: string;
  height?: number;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="ShikZya home"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/ShikZya_logo.png"
        alt="ShikZya"
        width={height}
        height={height}
        priority
        className="h-auto w-auto"
        style={{ height, width: "auto" }}
      />
    </Link>
  );
}
