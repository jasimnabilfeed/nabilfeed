import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="p-4 shadow bg-white sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Company</h1>
                <ul className="flex gap-6 font-medium">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/team">Our Team</Link></li>
                    <li><Link href="/gallery">Gallery</Link></li>
                    <li><Link href="/mission-vision">Mission & Vision</Link></li>
                    <li><Link href="/career">Career</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    );
}