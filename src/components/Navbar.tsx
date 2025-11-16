export default function Navbar() {
return (
<nav className="p-4 shadow bg-white sticky top-0 z-50">
<div className="container mx-auto flex justify-between items-center">
<h1 className="text-xl font-bold">Company</h1>
<ul className="flex gap-6 font-medium">
<li><a href="/">Home</a></li>
<li><a href="/products">Products</a></li>
<li><a href="/team">Our Team</a></li>
<li><a href="/gallery">Gallery</a></li>
<li><a href="/mission-vision">Mission & Vision</a></li>
<li><a href="/career">Career</a></li>
<li><a href="/contact">Contact Us</a></li>
</ul>
</div>
</nav>
);
}