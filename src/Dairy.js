import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const Dairy = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 30;
  const navigate = useNavigate();
  const addToCart = async (productId) => {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (!user) {
      alert('Please login or register first');
      navigate("/login");
      return;
    }
  
    try {
      await axios.post(`http://localhost:9500/cart/${productId}`, {
        userId: user._id
      });
      alert('Product added to cart!');
    } catch (error) {
      console.error('Error adding to cart', error);
      alert('Failed to add to cart');
    }
  };
  useEffect(() => {
     const fetchProducts = async () => {
       try {
         const response = await fetch("http://localhost:9500/fruitfetch"); 
         if (!response.ok) {
           throw new Error("Failed to fetch products");
         }
         const data = await response.json();
         const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
         const wishlistIds = wishlistItems.map((item) => item._id);
   
         const updatedData = data
           .filter((item) => item.category === "Dairy Products")
           .map((item) => ({
             ...item,
             wishlist: wishlistIds.includes(item._id),
           }));
   
         setProducts(updatedData);
         setLoading(false);
       } catch (err) {
         setError(err.message);
         setLoading(false);
       }
     };
   
     fetchProducts();
   }, []);
   
  const handleWishlist = async (id, category) => {
    const updatedProducts = products.map((item) => {
      if (item._id === id) {
        return { ...item, wishlist: !item.wishlist };
      }
      return item;
    });

    setProducts(updatedProducts);
    const wishlistItems = updatedProducts.filter((item) => item.wishlist);
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    window.dispatchEvent(new Event("wishlistUpdated"));
    const itemToUpdate = updatedProducts.find(item => item._id === id);
    try {
      const response = await fetch(`http://localhost:9500/updateWishlist/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ wishlist: itemToUpdate.wishlist, category }), 
      });
  
      if (!response.ok) {
        throw new Error("Failed to update wishlist on server");
      }
  
      const data = await response.json();
      console.log("Wishlist updated on server:", data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesSubcategory = !selectedSubcategory || product.subcategory === selectedSubcategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "priceLow") {
      return parseFloat(a.price) - parseFloat(b.price);
    } else if (sortOrder === "priceHigh") {
      return parseFloat(b.price) - parseFloat(a.price);
    } else if (sortOrder === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    return 0;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
     <div className="shop">
             <Link to="/fruitveg"><button type="button" className="btn btn-outline-success">Fruits & Veges</button></Link>   
             <Link to="/dairyproducts"><button type="button" className="btn btn-outline-success">Dairy Products</button></Link>   
             <Link to="/grainpulses"><button type="button" className="btn btn-outline-success">Grains & Pulses</button></Link>   
             <Link to="/herbspices"><button type="button" className="btn btn-outline-success">Herbs & Spices</button></Link>   
             <Link to="/beverages"><button type="button" className="btn btn-outline-success">Beverages</button></Link>   
             <Link to="/Oilnut"><button type="button" className="btn btn-outline-success">Oils & Nuts</button></Link>   
             <Link to="/skinproducts"><button type="button" className="btn btn-outline-success">Skincare Products</button></Link>
           </div>
      <h1 style={{ marginTop: "30px", color: "black", textAlign: "center", fontStyle: "italic" }}>
        Organic Dairy Products
      </h1>

      <header style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", borderBottom: "1px solid #ccc", marginTop: "30px" }}>
        <button 
        className="category-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          style={{ backgroundColor: "white", border: "1px solid #ccc", padding: "5px 10px", cursor: "pointer" }}
        >
          ☰ Categories
        </button>

        <form className="header-form" style={{ display: "flex", gap: "10px", alignItems: "center" }} onSubmit={(e) => e.preventDefault()}>
          <input 
            type="search" 
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            style={{ padding: "5px", width: "200px", border: "1px solid #ccc", borderRadius: "5px" }}
          />
          <select 
            style={{ padding: "5px", border: "1px solid #ccc", borderRadius: "5px", width:"200px" }}
            value={sortOrder} 
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </form>
      </header>

      <div style={{ display: "flex" }}>
        {isMenuOpen && (
          <aside style={{ width: "280px", backgroundColor: "#fefefe", padding: "40px 30px", border: "2px solid green", boxShadow: "2px 0 8px rgba(0, 0, 0, 0.05)", height: "auto" }}>
            <h4 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>SubCategories</h4>
            <ul style={{ paddingLeft: "20px", margin: 0, listStyleType: "disc" }}>
              {[
                "Organic Specialty Dairy Products", "Organic Cream", "Organic Butter & Ghee",
                "Organic Cheese Products", "Organic Yogurt Products", "Organic Milk Products",
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: "10px", color: "#333" }}>
                  <a
                    href="#"
                    onClick={() => { setSelectedSubcategory(item); setCurrentPage(1); }}
                    style={{ textDecoration: "none", color: "#333", transition: "color 0.2s" }}
                    onMouseEnter={(e) => { e.target.style.color = "green"; }}
                    onMouseLeave={(e) => { e.target.style.color = "#333"; }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}

        <main style={{ flexGrow: 1, padding: "20px" }}>
          {loading ? (
            <p>Loading products...</p>
          ) : error ? (
            <p style={{ color: "red" }}>{error}</p>
          ) : sortedProducts.length === 0 ? (
            <p>No products found for the selected filters.</p>
          ) : (
            <>
              <div className="products-grid" style={{ display: "grid", gridTemplateColumns: isMenuOpen ? "repeat(3, 1fr)" : "repeat(4, 1fr)", gap: "20px" }}>
                {currentProducts.map((product) => (
                  <div key={product._id} className="product-card">
                    <div className="images-container" style={{ position: "relative" }}>
                      <img src={product.image} alt={product.title} className="product-image" />
                      <div
                        onClick={() => handleWishlist(product._id)}
                        style={{
                          position: "absolute",
                          top: "0",
                          right: "0",
                          cursor: "pointer",
                          fontSize: "20px",
                          padding: "5px",
                          Color: product.wishlist ? "red" : "white",
                          backgroundColor:"green",
                          height:"30px",
                          color:"white",
                          width:"40px",
                        }}
                      >
                        <FontAwesomeIcon icon={product.wishlist ? faHeartSolid : faHeartOutline} />
                      </div>

                      <div
                        onClick={() => addToCart(product._id)}
                        style={{
                          position: "absolute",
                          top: "35px",
                          right: "0",
                          color: "white",
                          width: "40px",
                          height: "30px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          cursor: "pointer",
                          fontSize: "20px",
                          backgroundColor:"green",
                        }}
                      >
                        <FontAwesomeIcon icon={faCartShopping} />
                      </div>
                    </div>

                    <h5>{product.title}</h5>
                    <p style={{ color: "black" }}>Price: {product.price}</p>
                    <Link to={`/dairy/${product._id}`}>
                      <button style={{ marginLeft: "10px" }}>See Details</button>
                    </Link>
                  </div>
                ))}
              </div>

              <div className="pagination-buttons" style={{ marginTop: "30px", display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #ccc",
                      backgroundColor: currentPage === index + 1 ? "#32cb74" : "white",
                      color: currentPage === index + 1 ? "white" : "black",
                      borderRadius: "5px",
                      cursor: "pointer"
                    }}
                  >
{index + 1}
</button>
))}
</div>
</>
)}
</main>
</div>
</>
);
};
export default Dairy;
