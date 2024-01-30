const formattedCount = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default formattedCount;
