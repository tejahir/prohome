import { useState } from "react";

export default function BookFlow() {
  const [step, setStep] = useState(1);
  const [quantity, setQuantity] = useState(1);

  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    address: "",
  });

  const [error, setError] = useState("");

  const books = [
    {
      id: 1,
      title: "Complete React Guide",
      author: "John Doe",
      price: 499,
      description:
        "This book covers React from basics to advanced concepts with real projects.",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    },
    {
      id: 2,
      title: "JavaScript Mastery",
      author: "Alex Smith",
      price: 399,
      description: "Deep dive into modern JavaScript concepts.",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    },
    {
      id: 3,
      title: "HTML & CSS Design",
      author: "Emily Clark",
      price: 299,
      description: "Build beautiful and responsive websites.",
      image:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    },
    {
      id: 4,
      title: "Node.js Backend",
      author: "Michael Lee",
      price: 449,
      description: "Create scalable backend apps with Node.js.",
      image:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    },
  ];

  const [selectedBook, setSelectedBook] = useState(books[0]);

  return (
    <div className="min-w-298 rounded-2xl h-146 bg-[#0b1225] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-gray-300 rounded-2xl shadow p-6">

        <div className="flex justify-between mb-6 text-sm font-medium">
          {["Details", "Buy", "Address", "Confirm"].map((label, i) => (
            <div
              key={i}
              onClick={() => setStep(i + 1)}
              className={`flex-1 text-center py-2 rounded-xl mx-1 cursor-pointer ${
                step === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {label}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Books Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {books.map((book) => (
                <div
                  key={book.id}
                  onClick={() => {
                    setSelectedBook(book);
                    setQuantity(1);
                    setStep(2);
                  }}
                  className="bg-gray-50 rounded-xl shadow cursor-pointer p-3"
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-40 w-full object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold text-sm">{book.title}</h3>
                  <p className="text-xs text-gray-500">{book.author}</p>
                  <p className="font-bold mt-2">₹{book.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold">{selectedBook.title}</h2>
            <p className="mb-4">₹{selectedBook.price}</p>

            <div className="flex gap-4 mb-6">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            <button
              onClick={() => setStep(3)}
              className="bg-blue-600 text-white px-5 py-2 rounded-xl"
            >
              Continue
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Delivery Address</h2>

            <div className="space-y-4">
              <input
                className="w-full p-3 border rounded-xl"
                placeholder="Full Name"
                value={address.name}
                onChange={(e) => {
                  setAddress({ ...address, name: e.target.value });
                  setError("");
                }}
              />

              <input
                className="w-full p-3 border rounded-xl"
                placeholder="Mobile Number"
                value={address.mobile}
                onChange={(e) => {
                  setAddress({ ...address, mobile: e.target.value });
                  setError("");
                }}
              />

              <textarea
                className="w-full p-3 border rounded-xl"
                placeholder="Full Address"
                value={address.address}
                onChange={(e) => {
                  setAddress({ ...address, address: e.target.value });
                  setError("");
                }}
              />
            </div>

            {error && (
              <p className="text-red-600 mt-3 text-sm font-medium">
                {error}
              </p>
            )}

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setStep(2)}
                className="bg-gray-300 px-5 py-2 rounded-xl"
              >
                Back
              </button>

              <button
                onClick={() => {
                  if (!address.name.trim()) {
                    setError("⚠️ Full Name");
                    return;
                  }

                  if (!address.mobile.trim()) {
                    setError("⚠️ Mobile Number");
                    return;
                  }

                  if (address.mobile.length !== 10) {
                    setError("⚠️ Mobile Number 10 digit");
                    return;
                  }

                  if (!address.address.trim()) {
                    setError("⚠️ Full Address");
                    return;
                  }

                  setError("");
                  setStep(4);
                }}
                className="bg-blue-600 text-white px-5 py-2 rounded-xl"
              >
                Place Order
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600">
              Order Placed Successfully 🎉
            </h2>
            <p>Will be delivered to {address.name}</p>
          </div>
        )}
      </div>
    </div>
  );
}
