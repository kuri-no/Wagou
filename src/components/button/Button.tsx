import Link from 'next/link';

type ButtonProps = {
  href: string;
  text: string;
};

export default function Button({ href, text }: ButtonProps) {
  return (
    <Link href={href} className="button">
      {text}
    </Link>
  );
}
