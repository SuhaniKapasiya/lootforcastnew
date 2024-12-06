// utils/useColorForStore.js
const useColorForStore = () => {
  const getColorForStore = (storeName) => {
    switch (storeName) {
      case "Myntra":
        return "text-[#F13AB1]";
      case "Flipkart":
        return "text-[#047BD5]";
      case "Amazon":
        return "text-[#FF9900]";
      case "Ajio":
        return "text-[#496379]";
      // Add more cases for other stores as needed
      default:
        return "text-gray-800";
    }
  };

  return { getColorForStore };
};

export default useColorForStore;
