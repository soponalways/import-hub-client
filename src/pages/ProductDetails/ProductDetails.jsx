import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";

const ProductDetails = () => {
    const axios = useAxios(); 
    const { id } = useParams();
    const { user } = useAuth();
    const [product, setProduct] = useState(null);
    console.log(product);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`/productDetails/${id}`)
            .then((res) => setProduct(res.data))
            .finally(() => setLoading(false));
    }, []);

    const handleImport = () => {
        Swal.fire({
            title: "Import Product",
            html: `
        <input id="quantity" type="number" placeholder="Enter quantity" class="swal2-input" min="1" />
        <p style="font-size:14px; color:gray;">Available: ${product.quantity}</p>
      `,
            showCancelButton: true,
            confirmButtonText: "Submit",
            didOpen: () => {
                const quantityInput = Swal.getPopup().querySelector("#quantity");
                const confirmBtn = Swal.getConfirmButton();

                quantityInput.addEventListener("input", () => {
                    const enteredQty = parseInt(quantityInput.value);
                    confirmBtn.disabled = enteredQty > product.quantity || enteredQty <= 0;
                });
            },
            preConfirm: () => {
                const quantity = parseInt(document.getElementById("quantity").value);
                if (!quantity || quantity <= 0) {
                    Swal.showValidationMessage("Please enter a valid quantity!");
                }
                return { quantity };
            },
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { quantity } = result.value;

                try {
                    await axios.post("/imports", {
                        importerEmail: user.email,
                        productId: product._id,
                        productName: product.name,
                        image: product.image,
                        quantity,
                        price: product.price,
                        originCountry: product.originCountry,
                        rating: product.rating,
                    });

                    // Update UI instantly
                    setProduct({ ...product, quantity: product.quantity - quantity });

                    Swal.fire(
                        "Success!",
                        `You have successfully imported ${quantity} items.`,
                        "success"
                    );
                } catch (error) {
                    console.log(error);
                    Swal.fire("Error!", "Failed to import product.", "error");
                }
            }
        });
    };

    if (loading)
        return (
            <div className="flex justify-center items-center h-[80vh]">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );

    if (!product)
        return (
            <div className="text-center py-20 text-lg font-semibold text-base-content/70">
                Product not found.
            </div>
        );

    return (
        <div className="py-12 px-4 md:px-10 bg-base-100 min-h-screen">
            {/* Title */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-primary mb-2">Product Details</h2>
                <p className="text-base-content/70 max-w-xl mx-auto">
                    View complete information about this export product and import directly.
                </p>
            </div>

            {/* Product Details Card */}
            <div className="max-w-4xl mx-auto bg-base-200 rounded-xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md"
                />
                <div className="flex-1 space-y-3">
                    <h3 className="text-2xl font-semibold text-primary">{product.name}</h3>
                    <p className="text-lg font-medium">
                        Price: <span className="text-base-content">${product.price}</span>
                    </p>
                    <p className="text-lg">
                        Origin Country: <span className="text-base-content">{product.originCountry}</span>
                    </p>
                    <p className="text-lg">
                        Rating: <span className="text-yellow-500 font-medium">{product.rating}⭐</span>
                    </p>
                    <p className="text-lg">
                        Available Quantity:{" "}
                        <span className="text-base-content font-medium">{product.quantity}</span>
                    </p>

                    <button
                        onClick={handleImport}
                        disabled={product.quantity <= 0}
                        className="btn btn-primary w-full md:w-auto mt-4"
                    >
                        {product.quantity > 0 ? "Import Now" : "Out of Stock"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
