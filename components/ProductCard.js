"use client";

export default function ProductCard({ product, onClick }) {
  // details কে লাইনের মতো ভাগ করে রাখি
  const detailLines = product.details ? product.details.split("\n") : [];

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      <div className="relative w-full h-64">
        <img
          src={product.imageURL}
          alt={product.name}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl text-gray-400 font-semibold mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 line-through">৳{product.regularPrice}</p>
        <p className="text-green-600 text-2xl font-bold">
          ৳{product.offerPrice}
        </p>

        {/* Details line by line with icons */}
        <div className="mt-2 text-gray-700 space-y-1">
          {detailLines.map((line, index) => (
            <p key={index} className="flex items-start gap-2">
              <span>
                {line.slice(0, 2) === "🧵" ||
                line.slice(0, 2) === "✂️" ||
                line.slice(0, 2) === "🌿" ||
                line.slice(0, 2) === "🎨" ||
                line.slice(0, 2) === "👌"
                  ? ""
                  : "•"}
              </span>
              <span>{line}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
