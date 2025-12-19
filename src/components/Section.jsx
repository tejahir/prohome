import { useState } from "react";

export default function BookFlow() {
  const [step, setStep] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    address: "",
  });

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
    <div className="min-h-158 rounded-2xl bg-[#0b1225] border-r border-white/10 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-gray-300 rounded-2xl shadow p-6">

        <div className="flex justify-between mb-6 text-sm font-medium">
          {["Details", "Buy", "Address", "Confirm"].map((label, i) => (
            <div
              key={i}
              onClick={() => setStep(i + 1)}
              className={`flex-1 text-center py-2 rounded-xl mx-1 cursor-pointer transition ${
                step === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
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
                  className="bg-gray-50 rounded-xl shadow hover:shadow-lg cursor-pointer transition p-3"
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
            <h2 className="text-xl font-bold mb-2">{selectedBook.title}</h2>
            <p className="text-gray-600 mb-4">₹{selectedBook.price}</p>

            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 bg-gray-200 rounded-xl"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 bg-gray-200 rounded-xl"
              >
                +
              </button>
            </div>

            <p className="mb-4 font-medium">
              Total: ₹{selectedBook.price * quantity}
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="px-5 py-2 bg-gray-300 rounded-xl"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-5 py-2 bg-blue-600 text-white rounded-xl"
              >
                Continue
              </button>
            </div>
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
                onChange={(e) =>
                  setAddress({ ...address, name: e.target.value })
                }
              />
              <input
                className="w-full p-3 border rounded-xl"
                placeholder="Mobile Number"
                value={address.mobile}
                onChange={(e) =>
                  setAddress({ ...address, mobile: e.target.value })
                }
              />
              <textarea
                className="w-full p-3 border rounded-xl"
                placeholder="Full Address"
                value={address.address}
                onChange={(e) =>
                  setAddress({ ...address, address: e.target.value })
                }
              />
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setStep(2)}
                className="px-5 py-2 bg-gray-300 rounded-xl"
              >
                Back
              </button>
              <button
                onClick={() => setStep(4)}
                className="px-5 py-2 bg-blue-600 text-white rounded-xl"
              >
                Place Order
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Order Placed Successfully 🎉
            </h2>
            <p>Book: {selectedBook.title}</p>
            <p>Quantity: {quantity}</p>
            <p>Total: ₹{selectedBook.price * quantity}</p>
            <p className="mt-3 text-gray-600">
              Will be delivered to {address.name}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
