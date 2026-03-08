export const tableTitle = {
  overview: ["Order code", "Customer", "Total Amount", "Status"],
  product: [
    "Image",
    "Product Information",
    "Category",
    "Price",
    "Inventory",
    "Action",
  ],
  order: [
    "Order Code",
    "Customer",
    "Product",
    "Total Amount",
    "Status",
    "Action",
  ],
  client: ["Customer", "Contact", "Rank", "Order", "Total Spending", "Action"],
  report: ["Product", "Sales Volume", "Revenue", "Status"],
};

export const tableData = {
  overview: [
    {
      orderCode: "#1234",
      customer: "Mr Tuấn",
      totalAmount: "500",
      status: "Success",
    },
    {
      orderCode: "#1235",
      customer: "Ms Lan",
      status: "pending",
      totalAmount: "10",
    },
    {
      orderCode: "#1236",
      customer: "Mr Minh Hoàng",
      status: "cancelled",
      totalAmount: "350",
    },
    {
      orderCode: "#1237",
      customer: "Ms Thu Hà",
      status: "progress",
      totalAmount: "900",
    },
    {
      orderCode: "#1238",
      customer: "Mr Quốc Anh",
      status: "Success",
      totalAmount: "1.500",
    },
  ],
  product: [
    {
      image: "https://picsum.photos/50",
      productInformation: "iPhone 15 Pro (SKU: IP15P-01)",
      category: "Smartphone",
      price: "900",
      inventory: "45",
    },
    {
      image: "https://picsum.photos/60",
      productInformation: "AirPods Pro (SKU: AP-02)",
      category: "Accessory",
      price: "500",
      inventory: "3 (Warning)",
    },
  ],

  orderManagement: [
    {
      orderCode: "#ORD-7721",
      customer: "Nguyễn Văn An (0912.345.xxx)",
      product: "iPhone 15 Pro Max (x1)",
      totalAmount: "990",
      status: "progress",
    },
    {
      orderCode: "#ORD-7722",
      customer: "Lê Thị Bình (0988.777.xxx)",
      product: "AirPods Pro (x2), Case (x2)",
      totalAmount: "500",
      status: "completed",
    },
    {
      orderCode: "#ORD-7723",
      customer: "Phạm Minh Cường (0355.123.xxx)",
      product: "Ốp lưng Silicon",
      totalAmount: "250",
      status: "pending",
    },
    {
      orderCode: "#ORD-7724",
      customer: "Hoàng Anh Tuấn (0909.888.xxx)",
      product: "Fast charging 20W",
      totalAmount: "490",
      status: "cancelled",
    },
  ],
  client: [
    {
      customer: "Nguyễn Anh (ID: CUST-001)",
      contact: "anh.nguyen@email.com (0912.345.xxx)",
      rank: "Gold",
      order: "25",
      totalSpending: "450",
    },
    {
      customer: "Trần Lan (ID: CUST-002)",
      contact: "lan.tran@email.com (0988.777.xxx)",
      rank: "Silver",
      order: "12",
      totalSpending: "1800",
    },
    {
      customer: "Vũ Duy (ID: CUST-003)",
      contact: "duy.vu@email.com (0355.999.xxx)",
      rank: "Bronze",
      order: "3",
      totalSpending: "200",
    },
  ],
  report: [
    {
      product: "Iphone 15 Pro Max",
      salesVolume: 45,
      revenue: 1000000,
      status: "In stock",
    },
    {
      product: "AirPods Pro 2",
      salesVolume: 120,
      revenue: 400000,
      status: "Almost sold out",
    },
  ],
};
