import { useEffect, useState } from "react";

export default function Gallery() {
  const [imageUrls, setImageUrls] = useState([]);

  // Load JSON file when the component mounts
  useEffect(() => {
    fetch("/displayUrl.json") // Make sure the file is in the `public` folder of your React project
      .then((response) => response.json())
      .then((data) => setImageUrls(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">
        Gallery
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        Take a look at our salon and some of our happy customers!
      </p>
      <div className="grid grid-cols-4 gap-4">
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className="w-48 h-48 bg-gray-300 flex items-center justify-center"
          >
            <img
              src={url} // Dynamically load the image URL
              alt={`Gallery Image ${index + 1}`}
              className="object-cover w-full h-full"
              onError={(e) => {
                // Handle broken images by setting a placeholder
                e.target.src =
                  "https://via.placeholder.com/150?text=Image+Not+Found";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
