import Link from "next/link";

export default function Products() {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-4">Our Products</h2>
            <ul className="hidden md:flex gap-6 font-medium">
                <li><Link href="/teams/head-office">Head Office</Link></li>
                <li><Link href="/teams/north-zone">Rajshahi-Rangpur</Link></li>
                <li><Link href="/teams/south-zone">South Bengal</Link></li>
                <li><Link href="/teams/central-zone">Central Zone</Link></li>
                <li><Link href="/teams/east-zone">East Zone</Link></li>
            </ul>
            <p className="text-gray-700">List your products here.</p>
        </div>
    );
}