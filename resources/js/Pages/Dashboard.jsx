import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    const { leaveRequests } = usePage().props;
    console.log(leaveRequests);
    // const {
    //     data,
    // } = leaveRequests;
    // console.log(data);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">
                {auth.user.role === 1 ? "Admin " : "User "}
                Dashboard
            </h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {/* check the user role */}
                            {auth.user.role === 1 ? (
                                <div>
                                    <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                                    <p className="text-gray-500">You are logged in as an administrator.</p>
                                </div>
                            ) : (
                                <div>
                                    <h1 className="text-2xl font-bold">User Dashboard</h1>
                                    <p className="text-gray-500">You are logged in as a user.</p>
                                </div>
                            )}
                        </div>

                        {/* make a table for leave request data */}
                        <div className="p-6 bg-white border-b border-gray-200">
                            <table className="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">ID</th>
                                        {/* <th className="px-4 py-2">Name</th>
                                        <th className="px-4 py-2">Leave Type</th> */}
                                        <th className="px-4 py-2">Start Date</th>
                                        <th className="px-4 py-2">End Date</th>
                                        <th className="px-4 py-2">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* loop the data */}
                                    {leaveRequests.map((leave_request) => (
                                        // <p>test</p>
                                        <tr key={leave_request.id}>
                                                <td className="border px-4 py-2">{leave_request.id}</td>
                                                {/* <td className="border px-4 py-2">{leave_request.user.name}</td>
                                                <td className="border px-4 py-2">{leave_request.leave_type.name}</td> */}
                                                <td className="border px-4 py-2">{leave_request.start_date}</td>
                                                <td className="border px-4 py-2">{leave_request.end_date}</td>
                                                <td className="border px-4 py-2">{leave_request.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
