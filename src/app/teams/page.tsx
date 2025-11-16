import Link from "next/link";

export default function Products() {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-4">Our Products</h2>
            <ul className="hidden md:flex gap-6 font-medium">
                <li><Link href="/teams/head-office">Head Office Team</Link></li>
                <li><Link href="/teams/north-zone">Rajshahi-Rangpur Team</Link></li>
                <li><Link href="/teams/south-zone">South Bengal Team</Link></li>
                <li><Link href="/teams/central-zone">Central Zone Team</Link></li>
                <li><Link href="/teams/east-zone">East Zone Team</Link></li>
            </ul>
            <p className="text-gray-700">List your products here.</p>
        </div>
    );
}