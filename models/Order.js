import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  products: [{
    productId: mongoose.Schema.Types.ObjectId,
    quantity: Number
  }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Order', orderSchema);
