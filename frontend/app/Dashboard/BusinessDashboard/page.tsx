// app/dashboard/page.tsx
export default function DashboardPage() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Business Dashboard</h1>
          <p className="text-center text-gray-600">
            Welcome to your business dashboard! Here, you can manage your business operations, view
            analytics, and more.
          </p>
        </div>
      </div>
    );
  }