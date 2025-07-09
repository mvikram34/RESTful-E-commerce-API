import Cart from '../models/Cart.js';

export const getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user._id });
  res.json(cart || { items: [] });
};

export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne({ userId: req.user._id });

  if (!cart) cart = new Cart({ userId: req.user._id, items: [] });
  const existingItem = cart.items.find(item => item.productId.toString() === productId);
  if (existingItem) existingItem.quantity += quantity;
  else cart.items.push({ productId, quantity });
  await cart.save();
  res.json(cart);
};

export const updateCartItem = async (req, res) => {
  const { itemId } = req.params;
  const { quantity } = req.body;
  const cart = await Cart.findOne({ userId: req.user._id });
  const item = cart.items.id(itemId);
  if (item) item.quantity = quantity;
  await cart.save();
  res.json(cart);
};

export const removeCartItem = async (req, res) => {
  const { itemId } = req.params;
  const cart = await Cart.findOne({ userId: req.user._id });
  cart.items.id(itemId).remove();
  await cart.save();
  res.json(cart);
};
