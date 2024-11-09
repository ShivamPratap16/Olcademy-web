import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(true); // Assume admin role for demonstration
  const [currentUser, setCurrentUser] = useState('Admin'); // Track who is performing actions
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User-1' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User-2' },
    // Add more user data here as needed
  ]);

  // Simulating data fetch with useEffect (e.g., fetching from a backend)
  useEffect(() => {
    console.log("Fetching users...");
  }, []); // Empty dependency array means this runs only once after initial render

  // Handle deleting a user
  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
      console.log(`${currentUser} deleted user with ID: ${userId}`);
      // Optionally show a success message here
    }
  };

  return (
    <div className="mt-16 text-black"> {/* Adjust top margin here */}
      <div className="bg-white p-6 shadow-md rounded-md h-screen">
        <h2 className="text-xl font-semibold mb-4 font-bold">Latest Users</h2> {/* Title is now bold */}
        <table className="w-full table-auto font-bold"> {/* Table and all its content in bold */}
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Role</th>
              {isAdmin && <th className="border px-4 py-2">Actions</th>} {/* Conditional rendering for admin actions */}
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.role}</td>
                {isAdmin && (
                  <td className="border px-4 py-2">
                    <button
                      className="text-red-500 font-bold"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
