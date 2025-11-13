import { useState } from "react";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const AddExports = () => {
    const {user} = useAuth(); 
    const axios = useAxios(); 
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        price: "",
        originCountry: "",
        rating: "",
        quantity: "",
    });

    const [loading, setLoading] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // console.log("Export Product Data:", formData);

            const exportedData = {
                ...formData, 
                exporter: user?.email, 
            }

            const { data: responseFromServer } = await axios.post('/addExport', exportedData); 
            // console.log(responseFromServer);
            if(responseFromServer.success) {
                toast.success("Product added successfully!");
                setFormData({
                    name: "",
                    image: "",
                    price: "",
                    originCountry: "",
                    rating: "",
                    quantity: "",
                });
            } else {
                toast.error("Product export failed")
            }

        } catch (error) {
            toast.error("Failed to add product. Try again!");
            console.log(error)
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4 py-10">
            {/* Title Section */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-primary">Add Export Product</h1>
                <p className="text-sm md:text-base text-base-content/70 mt-2">
                    Fill out the form below to add a new export product for other countries.
                </p>
            </div>

            {/* Form Card */}
            <div className="w-full max-w-lg bg-base-100 p-8 rounded-2xl shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Product Name */}
                    <div>
                        <label className="label">
                            <span className="label-text font-medium">Product Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter product name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Product Image URL */}
                    <div>
                        <label className="label">
                            <span className="label-text font-medium">Product Image URL</span>
                        </label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="Enter image URL"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="label">
                            <span className="label-text font-medium">Price ($)</span>
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="Enter price"
                            className="input input-bordered w-full"
                            required
                            min="0"
                        />
                    </div>

                    {/* Origin Country */}
                    <div>
                        <label className="label">
                            <span className="label-text font-medium">Origin Country</span>
                        </label>
                        <input
                            type="text"
                            name="originCountry"
                            value={formData.originCountry}
                            onChange={handleChange}
                            placeholder="Enter country of origin"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="label">
                            <span className="label-text font-medium">Rating (1–5)</span>
                        </label>
                        <input
                            type="number"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            placeholder="Enter rating"
                            className="input input-bordered w-full"
                            required
                            min="1"
                            max="5"
                        />
                    </div>

                    {/* Available Quantity */}
                    <div>
                        <label className="label">
                            <span className="label-text font-medium">Available Quantity</span>
                        </label>
                        <input
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            placeholder="Enter available quantity"
                            className="input input-bordered w-full"
                            required
                            min="1"
                        />
                    </div>

                    {/* Add Product Button */}
                    <button
                        type="submit"
                        className="btn btn-outline btn-primary hover:btn-primary w-full"
                        disabled={loading}
                    >
                        {loading ? "Adding Product..." : "Add Export"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddExports;
