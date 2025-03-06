export const registerFormControls = [
  {
    name: "userName",
    label: "Tên đăng nhập",
    placeholder: "Điền tên đăng nhập của bạn",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Điền email của bạn",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Mật khẩu",
    placeholder: "Điền mật khẩu của bạn",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Điền email của bạn",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Mật khẩu",
    placeholder: "Điền mật khẩu của bạn",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Tên",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Nhập tên sản phẩm",
  },
  {
    label: "Mô tả",
    name: "description",
    componentType: "textarea",
    placeholder: "Nhập mô tả sản phẩm",
  },
  {
    label: "Danh mục",
    name: "category",
    componentType: "select",
    options: [
      { id: "men", label: "Nam" },
      { id: "women", label: "Nữ" },
      { id: "kids", label: "Trẻ em" },
      { id: "accessories", label: "Phụ kiện" },
      { id: "footwear", label: "Giày dép" },
    ],
  },
  {
    label: "Nhãn hàng",
    name: "brand",
    componentType: "select",
    options: [
      { id: "nike", label: "Nike" },
      { id: "adidas", label: "Adidas" },
      { id: "puma", label: "Puma" },
      { id: "dior", label: "Dior" },
      { id: "zara", label: "Zara" },
      { id: "chanel", label: "Chanel" },
    ],
  },
  {
    label: "Giá sản phẩm",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Nhập giá sản phẩm",
  },
  {
    label: "Giá khuyến mãi",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Nhập giá khuyến mãi (tuỳ chọn)",
  },
  {
    label: "Tổng số sản phẩm",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Nhập tổng số sản phẩm",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Trang chủ",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Sản phẩm",
    path: "/shop/listing",
  },
  {
    id: "men",
    label: "Nam",
    path: "/shop/listing",
  },
  {
    id: "women",
    label: "Nữ",
    path: "/shop/listing",
  },
  {
    id: "kids",
    label: "Trẻ em",
    path: "/shop/listing",
  },
  {
    id: "footwear",
    label: "Giày dép",
    path: "/shop/listing",
  },
  {
    id: "accessories",
    label: "Phụ kiện",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Tìm kiếm",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  men: "Nam",
  women: "Nữ",
  kids: "Trẻ em",
  accessories: "Phụ kiện",
  footwear: "Giày dép",
};

export const brandOptionsMap = {
  nike: "Nike",
  adidas: "Adidas",
  puma: "Puma",
  dior: "Dior",
  zara: "Zara",
  "chanel": "Chanel",
};

export const filterOptions = {
  category: [
    { id: "men", label: "Nam" },
    { id: "women", label: "Nữ" },
    { id: "kids", label: "Trẻ em" },
    { id: "accessories", label: "Phụ kiện" },
    { id: "footwear", label: "Giày dép" },
  ],
  brand: [
    { id: "nike", label: "Nike" },
    { id: "adidas", label: "Adidas" },
    { id: "puma", label: "Puma" },
    { id: "dior", label: "Dior" },
    { id: "zara", label: "Zara" },
    { id: "chanel", label: "Chanel" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Giá: Thấp đến Cao" },
  { id: "price-hightolow", label: "Giá: Cao đến Thấp" },
  { id: "title-atoz", label: "Tên: A - Z" },
  { id: "title-ztoa", label: "Tên: Z - A" },
];

export const addressFormControls = [
  {
    label: "Địa chỉ",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Nhập địa chỉ",
  },
  {
    label: "Thành phố",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Nhập thành phố",
  },
  {
    label: "Mã bưu điện",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Nhập mã bưu điện",
  },
  {
    label: "Số điện thoại",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Nhập số điện thoại",
  },
  {
    label: "Ghi chú",
    name: "notes",
    componentType: "textarea",
    placeholder: "Nhập ghi chú bổ sung (tuỳ chọn)",
  },
];
