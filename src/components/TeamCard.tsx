import Image from "next/image";

// Example usage:
const team = [
  { id: 1, name: "John Doe", role: "Manager", image: "/john.jpg" },
  { id: 2, name: "Sara Ahmed", role: "Sales Executive", image: "/sara.jpg" },
];
{/* <TeamCards members={team} /> */}

export default function TeamCards({ members }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {members.map((member) => (
        <div
          key={member.id}
          className="bg-white shadow-xl rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
        >
          <div className="w-32 h-32 relative rounded-full overflow-hidden mb-4 shadow-md">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold">{member.name}</h2>
          <p className="text-gray-600 mt-1">{member.role}</p>
        </div>
      ))}
    </div>
  );
}
