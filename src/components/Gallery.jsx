import { useState } from "react";

export default function GalleryPage() {
  const tabs = ["All", "Images", "Short Videos", "Videos", "Art", "Nature"];

  const galleryData = [
    { id: 1, type: "Images", src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
    { id: 2, type: "Nature", src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
    { id: 3, type: "Art", src: "https://images.unsplash.com/photo-1541963463532-d68292c34b19" },
    { id: 4, type: "Images", src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" },
    { id: 5, type: "Videos", src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c" },
    { id: 6, type: "Nature", src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e" },
    { id: 7, type: "Short Videos", src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e" },
  ];

  const [activeTab, setActiveTab] = useState("All");

  const filteredData =
    activeTab === "All"
      ? galleryData
      : galleryData.filter((item) => item.type === activeTab);

  return (
    <div className="min-h-146 rounded-2xl bg-black text-white p-6">
      <div className="flex gap-4 justify-center mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 pb-3 text-sm md:text-base lg:text-lg font-semibold transition-all rounded-full ${
              activeTab === tab
                ? "text-blue-400 border-b-4 border-blue-500"
                : "text-white hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.src}
              alt="gallery"
              className="w-full h-30 md:h-40 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
