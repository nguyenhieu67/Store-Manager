import { useEffect, useState } from "react";
import axios from "axios";

const TestData = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "Laptop",
    brand: "",
    imageUrl: `https://picsum.photos/200`,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock),
      };

      const response = await axios.post(
        "https://store-managerapi.onrender.com/testProduct",
        payload,
      );

      alert("Thêm thành công!");
      setProducts([...products, response.data]);

      setFormData({
        name: "",
        price: "",
        stock: "",
        category: "Laptop",
        brand: "",
        imageUrl: "https://picsum.photos/200",
      });
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm:", error);
    }
  };

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://store-managerapi.onrender.com/testProduct",
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi kết nối Backend rồi TheBad ơi:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      if (confirm("Bạn có chắc muốn xóa không")) {
        await axios.delete(
          `https://store-managerapi.onrender.com/testProduct/${id}`,
        );
        setProducts((prev) => prev.filter((p) => p._id !== id));
      }
    } catch (error) {
      console.error("Lỗi xóa:", error);
    }
  };

  if (loading) return <p>Đang tải dữ liệu từ kho...</p>;

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mb-8 rounded-lg bg-white p-6 shadow-md"
      >
        <h2 className="mb-4 text-xl font-bold">Thêm Sản Phẩm Mới</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tên sản phẩm"
            className="rounded border p-2"
            required
          />
          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            placeholder="Giá bán"
            className="rounded border p-2"
            required
          />
          <input
            name="stock"
            type="number"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Số lượng"
            className="rounded border p-2"
            required
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="rounded border p-2"
          >
            <option value="Laptop">Laptop</option>
            <option value="Smartphone">Smartphone</option>
            <option value="Tablet">Tablet</option>
            <option value="Accessory">Accessory</option>
          </select>
          <input
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Thương hiệu"
            className="rounded border p-2"
          />
        </div>
        <button
          type="submit"
          className="mt-4 rounded bg-green-500 px-6 py-2 text-white transition hover:bg-green-600"
        >
          Lưu Vào Kho
        </button>
      </form>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
        {products.map((item, index) => (
          <div key={index} className="rounded-lg border bg-white p-4 shadow-sm">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="mb-2 h-40 w-full object-cover"
            />
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="font-semibold text-blue-600">{item.price} USD</p>
            <p className="text-sm text-gray-500">Kho: {item.stock}</p>
            <p className="text-xs text-gray-400">
              Nhập ngày: {new Date(item.createdAt).toLocaleDateString("vi-VN")}
            </p>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TestData;
