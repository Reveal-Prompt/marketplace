import React, { useState } from "react";
import { ShoppingCart, Trash2, Plus, Minus, Package } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export function CartSidebar() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      title: "Marketing Email Templates",
      price: 29.99,
      quantity: 1,
      image: "/product-1.jpg"
    },
    {
      id: 2,
      title: "Blog Post Generator Prompts",
      price: 19.99,
      quantity: 2,
      image: "/product-2.jpg"
    },
    {
      id: 3,
      title: "Social Media Content Pack",
      price: 39.99,
      quantity: 1,
      image: "/product-3.jpg"
    }
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="relative h-11 w-11 rounded-full bg-white border-2 border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <ShoppingCart className="h-5 w-5 text-indigo-600" />
          {getTotalItems() > 0 && (
            <Badge 
              className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-gradient-to-br from-red-500 to-red-600 text-white font-bold text-xs shadow-lg"
            >
              {getTotalItems()}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md bg-linear-to-b from-slate-50 to-white p-0 shadow-2xl">
        <SheetHeader className="px-6 pt-6 pb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 bg-linear-to-br from-indigo-600 to-indigo-700 rounded-lg">
              <ShoppingCart className="h-6 w-6 text-white" />
            </div>
            <SheetTitle className="text-2xl font-bold text-slate-900">Shopping Cart</SheetTitle>
          </div>
          <SheetDescription className="text-slate-600 text-sm">
            {cartItems.length === 0 
              ? "Add items to get started" 
              : `${getTotalItems()} item${getTotalItems() > 1 ? 's' : ''} ready for checkout`
            }
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col h-[calc(100vh-140px)]">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="p-4 bg-indigo-100 rounded-full mb-4">
                  <Package className="h-8 w-8 text-indigo-600" />
                </div>
                <p className="text-slate-500 font-medium">Your cart is empty</p>
                <p className="text-slate-400 text-sm mt-1">Start shopping to add items</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className="flex gap-3 bg-white p-3.5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-200 group"
                >
                  {/* Product Image */}
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm text-slate-900 line-clamp-2 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-indigo-600 font-bold text-base mb-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-xs text-slate-500 mb-2">
                      ${item.price} each
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-1.5 bg-slate-100 rounded-lg p-1 w-fit">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 text-slate-600 hover:text-slate-900 hover:bg-white rounded-md"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </Button>
                      <span className="w-6 text-center font-semibold text-sm">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 text-slate-600 hover:text-slate-900 hover:bg-white rounded-md"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))
            )}
          </div>

          {/* Cart Summary */}
          {cartItems.length > 0 && (
            <>
              <Separator className="my-0" />
              <div className="px-6 py-4 space-y-3">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>${getTotalPrice()}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                </div>
                <Separator className="my-3" />
                <div className="flex justify-between text-lg font-bold text-slate-900 mb-4">
                  <span>Total:</span>
                  <span className="bg-linear-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">
                    ${getTotalPrice()}
                  </span>
                </div>
                <Button className=" w-full bg-linear-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white py-6 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                  Proceed to Checkout
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 py-6 text-base font-medium rounded-lg"
                >
                  Continue Shopping
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}