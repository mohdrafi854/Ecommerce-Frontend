import Sidebar from "../component/Sidebar";
import ProductCard from "../component/listing/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearch } from "../context/SearchContext";
import { useLocation } from "react-router";

const Listing = () => {
  const [category, setCategory] = useState(null);
  const [rating, setRating] = useState(null);
  const [sorting, setSorting] = useState(null);
  const [product, setProduct] = useState([]);
  const { searchQuery } = useSearch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category")

  const fetchProducts = async (selectCategory, selectRating, selectSort) => {
    try {
      let url = `https://ecommerce-backend-delta-five.vercel.app/api/products`;

      const params = new URLSearchParams();
      if (selectCategory) params.append("categoryName", selectCategory);
      if (selectRating) params.append("rating", selectRating);
      if (selectSort) params.append("sort", selectSort);
      if (searchQuery) params.append("search", searchQuery);
      if(selectedCategory) url += `?categoryName=${selectedCategory}`

      if (params.toString()) {
        url += `?${params.toString()}`;
      }

      const response = await axios.get(url);

      setProduct(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchProducts(category, rating, sorting, searchQuery, selectedCategory);
  }, [category, rating, sorting, searchQuery, selectedCategory, fetchProducts]);

  const handleMenCategory = (event) => {
    const { value, checked } = event.target;
    setCategory(checked ? value : null);
  };

  const handleStarRating = (event) => {
    const { value, checked } = event.target;
    setRating(checked ? value : null);
  };

  const handleSorting = (event) => {
    const { value, checked } = event.target;
    setSorting(checked ? value : null);
  };

  const handleResetClear = () => {
    setRating(null);
    setCategory(null);
  };

  return (
    <div className="container-fluid">
      <div className="row listing-bg">
        <Sidebar
          handleMenCategory={handleMenCategory}
          handleRating={handleStarRating}
          handleClear={handleResetClear}
          handleSort={handleSorting}
        />
        <ProductCard product={product} />
      </div>
    </div>
  );
};
export default Listing;
