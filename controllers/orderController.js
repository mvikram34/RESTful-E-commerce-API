import Order from '../models/Order.js';
import Cart from '../models/Cart.js';

export const createOrder = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user._id });
  if (!cart || !cart.items.length) return res.status(400).json({ error: 'Cart is empty' });

  const order = await Order.create({
    userId: req.user._id,
    products: cart.items
  });

  cart.items = [];
  await cart.save();
  res.status(201).json(order);
};

export const getUserOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user._id });
  res.json(orders);
};
