import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory enquiry store (can be connected to a DB or notification service)
const enquiries = [];

// API Endpoints
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'Vijaya Lakshmi Electricals API',
    uptime: process.uptime()
  });
});

app.get('/api/store-info', (req, res) => {
  res.status(200).json({
    name: 'Vijaya Lakshmi Electricals',
    tagline: 'Wholesale & Retail Showroom',
    address: 'D.No: 1-1, Opp. Mudu Ammavari Temple, Main Road, Sangivalasa, Thagarapuvalasa, Visakhapatnam - 531162',
    contacts: [
      { name: 'Ch. Vikram', phone: '9441160851', role: 'Store Partner / Sales' },
      { name: 'Ch. Jagdish', phone: '7296856740', role: 'Store Partner / Contractor Sales' }
    ],
    gstin: '37AKWPV2528C1ZP',
    timings: 'Monday - Sunday: 8:00 AM – 9:00 PM'
  });
});

app.post('/api/enquiries', (req, res) => {
  const { name, phone, email, category, requirement, quantity } = req.body;

  if (!phone || !phone.trim()) {
    return res.status(400).json({
      success: false,
      error: 'Phone number is required to request a quote.'
    });
  }

  const newEnquiry = {
    id: `VLE-${Date.now()}`,
    name: (name || 'Valued Customer').trim(),
    phone: phone.trim(),
    email: (email || '').trim(),
    category: category || 'General Enquiry',
    requirement: (requirement || '').trim(),
    quantity: (quantity || '1').trim(),
    receivedAt: new Date().toISOString()
  };

  enquiries.unshift(newEnquiry);
  console.log(`[New Customer Enquiry] ${newEnquiry.id} from ${newEnquiry.name} (${newEnquiry.phone}): ${newEnquiry.category}`);

  res.status(201).json({
    success: true,
    message: 'Thank you! Your quote request has been received. Ch. Vikram & Ch. Jagdish will contact you shortly.',
    enquiry: newEnquiry
  });
});

app.get('/api/enquiries', (req, res) => {
  // Returns recent enquiries for demo/admin view
  res.status(200).json({
    success: true,
    count: enquiries.length,
    enquiries: enquiries.slice(0, 50)
  });
});

// Serve frontend static build
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// SPA fallback: Route all non-API requests to index.html (Express 5 compatible)
app.use((req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`⚡ Vijaya Lakshmi Electricals Production Server Running`);
  console.log(`🌐 Local URL: http://localhost:${PORT}`);
  console.log(`🩺 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📦 Serving static files from: ${distPath}`);
  console.log(`=======================================================`);
});
