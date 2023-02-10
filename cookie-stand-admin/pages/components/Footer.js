import Link from 'next/link';

export default function Footer({ places }) {
  return (
    <footer className="">
      <p className="">{places.length} Stores World Wide</p>
      <p>&copy; 2023</p>
      <Link href="/careers" className="">
          <p>
            Careers
          </p>
      </Link>
    </footer>
  );
}

