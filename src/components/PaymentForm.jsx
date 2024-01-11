// src/components/PaymentForm.js
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import "./PaymentForm.css";

const PaymentForm = ({ generateQRCode }) => {
  const [merchantName, setMerchantName] = useState("");
  const [upiId, setUpiId] = useState("");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    generateQRCode({ merchantName, upiId, amount, notes });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    generateQRCode({ merchantName, upiId, amount, notes });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="label">Merchant Name:</div>
        <input
          type="text"
          value={merchantName}
          onChange={(e) => setMerchantName(e.target.value)}
        />
      </div>
      <div>
        <div className="label">Merchant UPI ID/VPA:</div>
        <input
          type="text"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
        />
      </div>
      <div>
        <div className="label">Amount:</div>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <div className="label">Notes:</div>
        <input
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Generate QR Code</button>
      </div>
    </form>
  );
};

export default PaymentForm;
