import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";

const MyImports = () => {
    const { user } = useAuth();
    const axios = useAxios(); 
    const [imports, setImports] = useState([]);

    useEffect(() => {
        if (user?.email) {
            axios
                .get(`/imports?email=${user.email}`)
                .then((res) => setImports(res.data))
                .catch((err) => console.error(err));
        }
    }, [user]);

    const handleRemove = async (id) => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "This imported product will be removed from your list!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!",
        });

        if (confirm.isConfirmed) {
            try {
                await axios.delete(`/imports/${id}`);
                setImports(imports.filter((item) => item._id !== id));
                Swal.fire("Removed!", "Product has been removed successfully.", "success");
            } catch (error) {
                console.log(error);
                Swal.fire("Error!", "Failed to remove product.", "error");
            }
        }
    };

    return (
        <div className="py-12 px-4 md:px-10 bg-base-100 min-h-screen">
            {/* Title Section */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-primary mb-2">My Imported Products</h2>
                <p className="text-base-content/70 max-w-xl mx-auto">
                    View all products you have imported and manage them easily.
                </p>
            </div>

            {/* No Data Message */}
            {imports.length === 0 ? (
                <div className="text-center text-lg font-medium text-base-content/70 mt-20">
                    You haven't imported any products yet.
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full bg-base-200 rounded-lg shadow">
                        {/* Table Head */}
                        <thead className="bg-base-300 text-base font-semibold">
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price ($)</th>
                                <th>Rating</th>
                                <th>Origin Country</th>
                                <th>Imported Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {imports.map((item) => (
                                <tr key={item._id} className="hover">
                                    <td>
                                        <img
                                            src={item.image}
                                            alt={item.productName}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                    </td>
                                    <td>{item.productName}</td>
                                    <td>{item.price}</td>
                                    <td>{item.rating}</td>
                                    <td>{item.originCountry}</td>
                                    <td>{item.quantity}</td>
                                    <td className="flex gap-2">
                                        <Link to={`/productDetails/${item.productId}`}>
                                            <button className="btn btn-sm btn-info">See Details</button>
                                        </Link>
                                        <button
                                            onClick={() => handleRemove(item._id)}
                                            className="btn btn-sm btn-error"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyImports;
