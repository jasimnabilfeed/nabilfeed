import Image from "next/image";

export default function TeamCards({ teamdata }) {

  return (
    <div className="p-4 border rounded-xl shadow-md flex flex-col items-center">
      <div className="w-32 h-32 relative rounded-full overflow-hidden mb-4 shadow-md">
        <Image
          src={`/image-for-web/${teamdata.NameinSoftware}.jpg`}
          alt={teamdata.NameinSoftware}
          width={150}
          height={150}
        />
      </div>

      <h2 className="text-lg font-semibold">
        {teamdata.NameinSoftware}
      </h2>
      <h3>
        {teamdata["Designation(Ranking)"]}
      </h3>
    </div>
  );
}
