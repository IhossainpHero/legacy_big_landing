"use client";

export default function ProductCard({ product, onClick }) {
  const handleClick = (e) => {
    try {
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "ViewContent", {
          content_ids: [product._id || product.id],
          content_name: product.name || product.title,
          value: product.offerPrice || product.price || 0,
          currency: "BDT",
        });
      }
    } catch (e) {
      console.warn("fbq viewcontent error", e);
    }
    if (onClick) onClick(e);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="w-full">
        <img
          src={product.imageURL}
          alt={product.name}
          className="w-full h-auto object-contain rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="text-lg text-gray-700 font-semibold mb-1">
          {product.name}
        </h3>
        <p className="text-gray-500 line-through text-sm">
          ৳{product.regularPrice}
        </p>
        <p className="text-green-600 text-xl font-bold">
          ৳{product.offerPrice}
        </p>
      </div>
    </div>
  );
}
