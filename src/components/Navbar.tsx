import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="p-4 shadow bg-white sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Link href="/">
                        <h1 className="text-xl font-bold">Company</h1>
                    </Link>

                </div>
                <div>
                    <ul className="flex gap-6 font-medium">
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/teams">Our Team</Link></li>
                        <li><Link href="/gallery">Gallery</Link></li>
                        <li><Link href="/careers">Career</Link></li>
                        <li><Link href="/contact-us">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}