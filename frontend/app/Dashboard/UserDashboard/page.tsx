export default function UserDashboardPage() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">User Dashboard</h1>
          <p className="text-center text-gray-600">
            Welcome to your user dashboard! Here, you can view your profile, manage settings, and more.
          </p>
        </div>
      </div>
    );
  }