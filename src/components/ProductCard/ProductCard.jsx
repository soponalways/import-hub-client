import { Link } from "react-router";

const ProductCard = ({ product }) => {
    const { name, image, price, originCountry, rating, quantity, _id } = product;

    return (
        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition duration-300 rounded-2xl overflow-hidden">
            {/* Product Image */}
            <figure className="h-52 w-full overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="object-cover w-full h-full transform hover:scale-105 transition duration-300"
                />
            </figure>

            {/* Card Body */}
            <div className="card-body">
                <h2 className="card-title text-primary">{name}</h2>

                <div className="space-y-1 text-sm">
                    <p>
                        <span className="font-semibold">Price:</span> ${price}
                    </p>
                    <p>
                        <span className="font-semibold">Origin Country:</span>{" "}
                        {originCountry}
                    </p>
                    <p>
                        <span className="font-semibold">Rating:</span> ⭐ {rating}
                    </p>
                    <p>
                        <span className="font-semibold">Available Quantity:</span>{" "}
                        {quantity}
                    </p>
                </div>

                {/* See Details Button */}
                <div className="card-actions justify-end mt-4">
                    <Link
                        to={`/productDetails/${_id || name.replace(/\s+/g, "-").toLowerCase()}`}
                        className="btn btn-primary btn-sm"
                    >
                        See Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
