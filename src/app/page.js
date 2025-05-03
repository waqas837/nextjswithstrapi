import ClientTabs from "@/components/ClientTabs";

async function getTeamsData() {
  try {
    const res = await fetch("https://strapi-backend.drawsketch.co/api/teams", {
      cache: "no-store",
    });
    const result = await res.json();

    return result.data.map((item) => ({
      name: item.attributes.name,
      expertise: item.attributes.expertise,
    }));
  } catch (error) {
    console.error("Failed to fetch teams:", error);
    return [];
  }
}

export default async function Page() {
  const tabsData = await getTeamsData();

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-2xl font-medium mb-4">Why Choose Us</h2>
        <h1 className="text-4xl font-bold mb-6">
          We Are Different From Others
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          cupiditate accusantium recusandae soluta explicabo hic!
        </p>

        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="relative w-full md:w-1/2 h-96 flex justify-start items-center">
              <div className="w-80 h-80 bg-[#BA8194] bg-opacity-80 rounded-full flex items-center justify-center text-white p-8 z-10 absolute left-0">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-3">Industry Experts</h3>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet adipisicing elit. Quas dolores
                    nam ipsam odit quod fuga numquam hic quo!
                  </p>
                </div>
              </div>

              <div className="w-80 h-80 rounded-full overflow-hidden absolute right-0">
                <img
                  src={"img.webp"}
                  alt="Professional woman using laptop"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <ClientTabs tabsData={tabsData} />
          </div>
        </div>
      </div>
    </>
  );
}
