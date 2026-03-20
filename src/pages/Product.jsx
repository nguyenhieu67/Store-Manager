import { useState, useEffect } from "react";
import axios from "axios";

import { tableTitle } from "../data";
import { useCloudinary } from "../hooks/useCloudinary";
import { useFilter } from "../hooks/useFilter";
import Stats from "../components/Stats/Stats";
import Table from "../components/Table";
import Form from "../components/Form";
import { EditIcon, DeleteIcon } from "../components/Icons";
import StatsCard from "../components/Stats/StatsCard";

function Product() {
  const API_URL = "https://store-managerapi.onrender.com/product";

  const productTitle = tableTitle.product;
  const [products, setProducts] = useState([]);
  const { uploadImage, isUploading } = useCloudinary();
  const [loading, setLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState("All product");
  const filteredData = useFilter(
    products,
    "category",
    filterCategory,
    "All product",
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Backend connection error, TheBad:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "Smartphone",
    brand: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
    };
    try {
      const response = await axios.post(API_URL, payload);
      setProducts((prevProducts) => [...prevProducts, response.data]);
      setFormData({
        name: "",
        price: "",
        stock: "",
        category: "Smartphone",
        brand: "",
        imageUrl: "",
      });
    } catch (error) {
      console.error("Error when adding product:", error);
    }
  };

  const handleDelete = async (id) => {
    const productName = products.filter((p) => p._id === id)[0].name;
    try {
      if (confirm(`Are you sure you want to delete ${productName}`)) {
        await axios.delete(`${API_URL}/${id}`);
        setProducts((prev) => prev.filter((p) => p._id !== id));
      }
    } catch (error) {
      console.error("Deletion error:", error);
    }
  };

  return (
    <div className="flex-1 p-7.5">
      <Form
        title="Add new product"
        onSubmit={handleSubmit}
        submitText="Add product"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Information"
            className="rounded border p-2"
            required
          />
          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="rounded border p-2"
            required
          />
          <input
            name="stock"
            type="number"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Inventory"
            className="rounded border p-2"
            required
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="rounded border p-2"
          >
            <option value="Smartphone">Smartphone</option>
            <option value="Laptop">Laptop</option>
            <option value="Tablet">Tablet</option>
            <option value="Accessory">Accessory</option>
          </select>
        </div>
        <div className="mt-4">
          <div className="flex flex-col gap-2 md:w-1/2 lg:w-1/4">
            <span className="font-semibold text-gray-700">Product image:</span>

            <label
              htmlFor="file-upload"
              className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-center text-white shadow transition hover:bg-blue-600"
            >
              {isUploading
                ? "Loading image..."
                : "Select image from your device"}
            </label>

            <input
              id="file-upload"
              type="file"
              onChange={async (e) => {
                const url = await uploadImage(e.target.files[0]);
                if (url) setFormData({ ...formData, imageUrl: url });
              }}
              className="hidden"
              accept="image/*"
            />
            {formData.imageUrl && (
              <div>
                <p className="text-xs text-green-600">
                  ✓ Image uploaded successfully.
                </p>
                <img
                  className="h-50 object-cover"
                  src={`${formData.imageUrl}`}
                  alt={formData.name}
                />
              </div>
            )}
          </div>
        </div>
      </Form>
      <Stats className="grid-cols-3">
        <StatsCard
          title="total product"
          value="1,240"
          borderLeft="border-(--primary-color)"
        />
        <StatsCard
          title="out of stock"
          value="12"
          borderLeft="border-(--primary-color)"
          className="text-[#e74c3c]"
        />
        <StatsCard
          title="categories"
          value="15"
          borderLeft="border-(--primary-color)"
        />
      </Stats>

      <Table
        title="Product catalog"
        maxHeight="max-h-126"
        options={
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="cursor-pointer rounded-md border border-[#eee] p-1 text-sm outline-none"
          >
            <option>All product</option>
            <option>Smartphone</option>
            <option>Laptop</option>
            <option>Tablet</option>
            <option>Accessory</option>
          </select>
        }
        tableTitles={productTitle}
        loading={loading}
        productData={filteredData}
        actions={[
          {
            icon: <EditIcon color="#3498db" />,
            type: "edit",
            bgColor: "bg-[#ebf5fb] hover:bg-[#ebf5fb] hover:opacity-70",
          },
          {
            icon: <DeleteIcon color="#e74c3c" />,
            type: "delete",
            bgColor: "bg-[#fdedec] hover:bg-[#fdedec] hover:opacity-70",
            onClick: (p) => handleDelete(p._id),
          },
        ]}
      />
    </div>
  );
}

export default Product;
