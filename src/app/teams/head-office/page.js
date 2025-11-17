import TeamCards from "@/components/TeamCard";
import { useEffect, useState } from "react";


export default function Products() {
    const [data, setData] = useState<any>(null);


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch("/data/myData.json"); // directly fetch
                if (!res.ok) throw new Error("Failed to fetch JSON");
                const jsonData = await res.json();
                setData(jsonData);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    console.log(data)
    return (
        <div>
            {
                data.Head_Office.Office.office.map((item) => (
                    <TeamCards key={item.SL} teamdata={item} />
                ))
            }
            <h2 className="text-3xl font-bold mb-4">Our Products</h2>
            <p className="text-gray-700">List your products here.</p>
        </div>
    );
}