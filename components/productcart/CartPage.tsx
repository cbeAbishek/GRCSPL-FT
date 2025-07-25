// components/CartPage.tsx
import React from "react";
import {
  ShoppingCart,
  Minus,
  Plus,
  Trash2,
  Package,
} from "lucide-react";

interface CartItem {
  product: any;
  quantity: number;
}

interface CartPageProps {
  cart: CartItem[];
  updateCartQuantity: (params: {
    productCode: string;
    newQuantity: number;
  }) => void;
  removeFromCart: (productCode: string) => void;
  getCartTotal: () => number;
  setCurrentPage: (page: string) => void;
}

const CartPage: React.FC<CartPageProps> = ({
  cart,
  updateCartQuantity,
  removeFromCart,
  getCartTotal,
  setCurrentPage,
}) => {
  // Calculate total weight
  const getTotalWeight = () => {
    return cart.reduce(
      (total, item) => total + (item.product.weight || 0) * item.quantity,
      0
    );
  };

  return (
    <div
      className="p-4 md:p-6"
      onLoad={() => {
      window.scrollTo(0, 0);
      }}
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      {cart.length === 0 ? (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <ShoppingCart className="w-12 h-12 text-gray-400" />
        </div>
        <p className="text-xl text-gray-600 mb-2">Your cart is empty</p>
        <p className="text-gray-500 mb-6">Add some products to get started</p>
        <button
        onClick={() => setCurrentPage("products")}
        className="bg-gradient-to-r from-[#39b54b] to-[#2da03e] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
        >
        Continue Shopping
        </button>
      </div>
      ) : (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
         {/* Order Summary */}
        <div id="cart" className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-fit">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Order Summary
        </h2>
        <div className="space-y-3 mb-6">
          {cart.map((item) => (
          <div
            key={item.product.code}
            className="flex justify-between text-sm"
          >
            <span className="text-gray-600">
            {item.product.name} × {item.quantity}
            </span>
            <span className="font-semibold">
            ₹{(item.product.discountPrice * item.quantity).toFixed(2)}
            </span>
          </div>
          ))}
        </div>
        <div className="border-t border-gray-200 pt-4 mb-4">
          <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">
            ₹{getCartTotal().toFixed(2)}
          </span>
          </div>
          {/* <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <Package className="w-4 h-4 mr-2 text-gray-600" />
            <span className="text-gray-600">Total Weight</span>
          </div>
          <span className="font-semibold">
            {getTotalWeight()}g
          </span>
          </div> */}
        </div>
        <div className="border-t border-gray-200 pt-4 mb-6">
          <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">Total</span>
          <span className="text-2xl font-bold text-[#39b54b]">
            ₹{getCartTotal().toFixed(2)}
          </span>
          </div>
          <div className="text-xs text-gray-500 mt-1">
          (Transport charges will be calculated at checkout)
          </div>
        </div>
        <button
          onClick={() => setCurrentPage("checkout")}
          className="w-full bg-gradient-to-r from-[#39b54b] to-[#2da03e] text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <span>Proceed to Checkout</span>
        </button>
        <button
          onClick={() => {
          const cartDetails = cart.map(item => 
            `${item.product.name} (${item.product.category}) - Qty: ${item.quantity} - ₹${item.product.discountPrice} each`
          ).join('\n');
          
          const message = `Hi! I would like to enquire about the following products:\n\n${cartDetails}\n\nTotal Amount: ₹${getCartTotal().toFixed(2)}\n\nPlease provide more details.`;
          
          const whatsappUrl = `https://api.whatsapp.com/send/?phone=919566372450&text=${encodeURIComponent(message)}`;
          window.open(whatsappUrl, '_blank');
          }}
          className="w-full mt-3 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <img
          src="/WhatsApp.webp"
          alt="WhatsApp Icon"
          className="w-7 h-7"
          />
          <span>Enquire on WhatsApp</span>
        </button>
        </div>
        
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
        {cart.map((item) => (
          <div
          key={item.product.code}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
          >
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            {/* Product Image */}
            <div className="w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center">
            <img
              src={item.product.src}
              alt={item.product.name}
              className="w-full h-full object-cover rounded-xl"
            />
            </div>
            {/* Product Info */}
            <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              {item.product.name}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {item.product.category}
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 line-through text-sm">
              ₹{item.product.mrp}
              </span>
              <span className="text-lg font-bold text-gray-900">
              ₹{item.product.discountPrice}
              </span>
            </div>
            {/* Add weight information */}
            {/* <div className="flex items-center mt-1 text-sm text-gray-600">
              <Package className="w-4 h-4 mr-1" /> 
              Weight: {item.product.weight || 0}g × {item.quantity} = {(item.product.weight || 0) * item.quantity}g
            </div> */}
            </div>
            {/* Quantity Controls */}
            <div className="flex items-center space-x-3">
            <button
              onClick={() =>
              updateCartQuantity({
                productCode: item.product.code,
                newQuantity: item.quantity - 1,
              })
              }
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-lg font-semibold w-8 text-center">
              {item.quantity}
            </span>
            <button
              onClick={() =>
              updateCartQuantity({
                productCode: item.product.code,
                newQuantity: item.quantity + 1,
              })
              }
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
            </div>
            {/* Remove Button */}
            <button
            onClick={() => removeFromCart(item.product.code)}
            className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
            >
            <Trash2 className="w-5 h-5" />
            </button>
          </div>
          </div>
        ))}
        </div>
       
      </div>
      )}
    </div>
  );
};

export default CartPage;