import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";

const MyExports = () => {
    const axios = useAxios(); 
    const { user } = useAuth();
    const [myExports, setMyExports] = useState([]);

    useEffect(() => {
        if (user?.email) {
            axios
                .get(`/myExports?email=${user.email}`)
                .then((res) => setMyExports(res.data))
                .catch((err) => console.error(err));
        }
    }, [user, axios]);

    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "This product will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        });

        if (confirm.isConfirmed) {
            try {
                await axios.delete(`/deleteExports?id=${id}`);
                setMyExports(myExports.filter((item) => item._id !== id));
                Swal.fire("Deleted!", "Your product has been removed.", "success");
            } catch (error) {
                Swal.fire("Error!", "Failed to delete the product.", "error");
                console.log(error);
            }
        }
    };

    const handleUpdate = (item) => {
        Swal.fire({
            title: "Update Product Info",
            html: `
        <input id="name" class="swal2-input" placeholder="Product Name" value="${item.name}" />
        <input id="image" class="swal2-input" placeholder="Image URL" value="${item.image}" />
        <input id="price" class="swal2-input" placeholder="Price" value="${item.price}" />
        <input id="originCountry" class="swal2-input" placeholder="Origin Country" value="${item.originCountry}" />
        <input id="rating" class="swal2-input" placeholder="Rating" value="${item.rating}" />
        <input id="quantity" class="swal2-input" placeholder="Available Quantity" value="${item.quantity}" />
      `,
            showCancelButton: true,
            confirmButtonText: "Submit",
            preConfirm: () => {
                return {
                    name: document.getElementById("name").value,
                    image: document.getElementById("image").value,
                    price: document.getElementById("price").value,
                    originCountry: document.getElementById("originCountry").value,
                    rating: document.getElementById("rating").value,
                    quantity: document.getElementById("quantity").value,
                };
            },
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const updated = result.value;
                    await axios.put(`/updateExports?id=${item._id}`, updated);
                    setMyExports((prev) =>
                        prev.map((prod) =>
                            prod._id === item._id ? { ...prod, ...updated } : prod
                        )
                    );
                    Swal.fire("Updated!", "Product details have been updated.", "success");
                } catch (error) {
                    Swal.fire("Error!", "Failed to update product.", "error");
                    console.log(error);
                }
            }
        });
    };

    return (
        <div className="py-12 px-4 md:px-10 bg-base-100 min-h-screen">
            {/* Title Section */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-primary mb-2">My Exported Products</h2>
                <p className="text-base-content/70 max-w-xl mx-auto">
                    Manage all your export products — update details or delete items easily.
                </p>
            </div>

            {/* No Data Message */}
            {myExports.length === 0 ? (
                <div className="text-center text-lg font-medium text-base-content/70 mt-20">
                    You haven't added any export products yet. Please export a product. 
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full bg-base-200 rounded-lg md:rounded-xl lg:rounded-2xl shadow">
                        {/* Table Head */}
                        <thead className="bg-base-300 text-base font-semibold">
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price ($)</th>
                                <th>Origin Country</th>
                                <th>Rating</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myExports.map((item) => (
                                <tr key={item._id} className="hover">
                                    <td>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.originCountry}</td>
                                    <td>{item.rating}</td>
                                    <td>{item.quantity}</td>
                                    <td className="flex gap-2">
                                        <button
                                            onClick={() => handleUpdate(item)}
                                            className="btn btn-sm btn-primary"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn btn-sm btn-error"
                                        >
                                            Delete
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

export default MyExports;
