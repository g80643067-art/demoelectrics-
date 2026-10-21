import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import confetti from 'canvas-confetti';

const StoreContext = createContext();

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

export const StoreProvider = ({ children }) => {
  // Page Navigation State
  const [activePage, setActivePage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [lastPlacedOrder, setLastPlacedOrder] = useState(null);

  // Cart State (Persisted)
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('voltix_cart');
      return saved ? JSON.parse(saved) : [
        // Seed default item so user sees immediate functional cart if desired
        {
          id: "vtx-001",
          name: "Oddawurld Lumina Halo 12W Smart Pendant Bulb",
          category: "lighting",
          price: 39.99,
          originalPrice: 59.99,
          image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
          quantity: 1,
          badge: "Bestseller"
        }
      ];
    } catch {
      return [];
    }
  });

  // Wishlist State (Persisted)
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('voltix_wishlist');
      return saved ? JSON.parse(saved) : ["vtx-001", "vtx-002"];
    } catch {
      return [];
    }
  });

  // Orders State (Persisted)
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('voltix_orders');
      return saved ? JSON.parse(saved) : [
        {
          orderId: "VTX-98241",
          date: "2026-10-18T10:30:00Z",
          status: "In Transit",
          statusStep: 3, // 1: Confirmed, 2: Packed, 3: Shipped, 4: Out for delivery, 5: Delivered
          customer: {
            fullName: "Alex Morgan",
            email: "alex.morgan@voltix.com",
            phone: "+1 (555) 349-8219",
            address: "742 Evergreen Terrace, Sector 4",
            city: "Metropolis",
            state: "CA",
            zipCode: "90210"
          },
          items: [
            {
              id: "vtx-002",
              name: "Oddawurld BlackGlass 8-Module Smart Touch Switchboard",
              price: 64.50,
              quantity: 2,
              image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
            }
          ],
          paymentMethod: "Credit Card",
          subtotal: 129.00,
          shipping: 0,
          discount: 12.90,
          total: 116.10,
          estimatedDelivery: "Oct 24, 2026"
        }
      ];
    } catch {
      return [];
    }
  });

  // Coupon State
  const [appliedCoupon, setAppliedCoupon] = useState({
    code: 'VOLT10',
    discountPercent: 10,
    applied: false
  });

  // Toast Notification
  const [toast, setToast] = useState(null);

  // Sync with LocalStorage
  useEffect(() => {
    localStorage.setItem('voltix_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('voltix_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('voltix_orders', JSON.stringify(orders));
  }, [orders]);

  // Toast Helper
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Cart Actions
  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...prev,
          {
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.image,
            badge: product.badge,
            quantity: quantity
          }
        ];
      }
    });
    showToast(`Added ${quantity} × ${product.name} to cart!`);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
    showToast("Item removed from cart", "info");
  };

  const updateCartQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist Actions
  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast("Removed from Wishlist", "info");
        return prev.filter((id) => id !== productId);
      } else {
        showToast("Saved to your Wishlist!");
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  // Cart Calculations
  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const shippingCost = cartSubtotal > 49 || cartSubtotal === 0 ? 0 : 7.99;
  const couponDiscount = appliedCoupon.applied ? (cartSubtotal * appliedCoupon.discountPercent) / 100 : 0;
  const cartTotal = Math.max(0, cartSubtotal - couponDiscount + (cart.length > 0 ? shippingCost : 0));

  const applyCouponCode = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'VOLT10') {
      setAppliedCoupon({ code: 'VOLT10', discountPercent: 10, applied: true });
      showToast("Coupon VOLT10 applied: 10% OFF!");
      return { success: true, message: "10% discount applied successfully!" };
    } else if (clean === 'POWER20') {
      setAppliedCoupon({ code: 'POWER20', discountPercent: 20, applied: true });
      showToast("Coupon POWER20 applied: 20% OFF!");
      return { success: true, message: "20% discount applied successfully!" };
    } else {
      showToast("Invalid promo code. Try VOLT10", "warning");
      return { success: false, message: "Invalid coupon code. Try VOLT10 or POWER20" };
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon({ code: '', discountPercent: 0, applied: false });
    showToast("Coupon removed", "info");
  };

  // Navigation helpers
  const goToPage = (page, payload = null) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (page === 'product-detail' && payload) {
      setSelectedProductId(payload);
    }
    if (page === 'shop' && payload?.category) {
      setSelectedCategory(payload.category);
    }
    setActivePage(page);
  };

  const viewProduct = (productId) => {
    setSelectedProductId(productId);
    goToPage('product-detail', productId);
  };

  // Order Placement
  const placeOrder = (orderData) => {
    const newId = `VTX-${Math.floor(10000 + Math.random() * 90000)}`;
    const newOrder = {
      orderId: newId,
      date: new Date().toISOString(),
      status: "Processing",
      statusStep: 1, // Order Confirmed
      customer: orderData.customer,
      items: [...cart],
      paymentMethod: orderData.paymentMethod,
      paymentStatus: orderData.paymentMethod === 'cod' ? 'Pending on Delivery' : 'Paid Online (Verified)',
      subtotal: cartSubtotal,
      shipping: shippingCost,
      discount: couponDiscount,
      total: cartTotal,
      estimatedDelivery: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    };

    setOrders((prev) => [newOrder, ...prev]);
    setLastPlacedOrder(newOrder);
    clearCart();
    goToPage('order-success');

    // Confetti celebration
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#43D9FF', '#ffffff', '#102942', '#A6E9F5']
      });
    } catch {
      // safe fallback
    }

    return newOrder;
  };

  return (
    <StoreContext.Provider
      value={{
        activePage,
        goToPage,
        selectedProductId,
        viewProduct,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        setIsSearchOpen,
        quickViewProduct,
        setQuickViewProduct,
        products: PRODUCTS,
        categories: CATEGORIES,
        cart,
        cartItemsCount,
        cartSubtotal,
        shippingCost,
        couponDiscount,
        cartTotal,
        appliedCoupon,
        applyCouponCode,
        removeCoupon,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        wishlist,
        toggleWishlist,
        isInWishlist,
        orders,
        placeOrder,
        lastPlacedOrder,
        toast,
        showToast
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
