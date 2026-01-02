import React from "react";

export default function Documentation() {
  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "install", title: "Installation" },
    { id: "usage", title: "Usage" },
    { id: "components", title: "Components" },
    { id: "faq", title: "FAQ" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <aside className="w-64 bg-white border-r hidden md:block">
        <div className="p-5 font-bold text-xl border-b">
          Docs
        </div>
        <nav className="p-4 space-y-3">
          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block text-gray-700 hover:text-blue-600"
            >
              {item.title}
            </a>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-6 md:p-10">
        
        <section id="intro" className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Introduction</h1>
          <p className="text-gray-700">
            This documentation helps you understand how to use our React
            components with Tailwind CSS efficiently.
          </p>
        </section>

        <section id="install" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <pre className="bg-black text-green-400 p-4 rounded-lg overflow-x-auto">
            <code>
              npm install react tailwindcss
            </code>
          </pre>
        </section>

        <section id="usage" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Usage</h2>
          <p className="text-gray-700 mb-3">
            Import the component and use it inside your app:
          </p>
          <pre className="bg-black text-blue-400 p-4 rounded-lg overflow-x-auto">
            <code>
{`import Documentation from "./Documentation";

function App() {
  return <Documentation />;
}`}
            </code>
          </pre>
        </section>

        <section id="components" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Components</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Sidebar Navigation</li>
            <li>Section Layout</li>
            <li>Code Blocks</li>
            <li>Responsive Design</li>
          </ul>
        </section>

        <section id="faq">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <p className="text-gray-700">
            <strong>Q:</strong> Is Tailwind required?<br />
            <strong>A:</strong> Yes, this layout uses Tailwind utility classes.
          </p>
        </section>

      </main>
    </div>
  );
}
