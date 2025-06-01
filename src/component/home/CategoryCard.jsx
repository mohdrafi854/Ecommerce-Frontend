import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const getCategory = async () => {
  try {
    const response = await axios.get("https://ecommerce-backend-delta-five.vercel.app/api/categories");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const CategoryCard = () => {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  
  

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data = await getCategory();
        setCategory(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategory();
  }, []);

  let getcategory = category.category;

  const handleCategory = (category) => {
    navigate(`/listing?category=${category}`);
  };

  return (
    <div className="container">
      <div className="category-block">
        {getcategory?.map((cat) => (
          <div
            key={cat._id}
            className="cat-column"
            onClick={() => handleCategory(cat.name)}
          >
            <img src={cat.imageUrl} alt={cat.name} />
            <p
              className="cate-name position-absolute mb-0 top-50 start-50 translate-middle-x bg-white text-center"
              style={{ width: "100%" }}
            >
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategoryCard;
