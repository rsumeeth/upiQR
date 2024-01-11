// src/App.js
import React, { useState } from "react";
import PaymentForm from "./components/PaymentForm";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import QRCodeDisplay from "./components/QRCodeDisplay.jsx";
import "./App.css";
function App() {
  const [qrCodeData, setQRCodeData] = useState("");
  const [qrCodeAllData, setQRCodeDataAllData] = useState({});

  const generateQRCode = ({ merchantName, upiId, amount, notes }) => {
    const qrCodeString = `upi://pay?pa=${upiId}&pn=${merchantName}&mc=&tid=&tr=${Date.now()}&tn=${notes}&am=${amount}&cu=INR`;
    setQRCodeData(qrCodeString);
    setQRCodeDataAllData({ merchantName, upiId, amount, notes });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>UPI QR Code</h1>
      </div>
      <div className="inputandqr">
        <div className="upiform">
          <PaymentForm generateQRCode={generateQRCode} />
        </div>

        <div className="qrcode">
          {qrCodeData && (
            <QRCodeDisplay qrCodeData={qrCodeData} fullData={qrCodeAllData} />
          )}
        </div>
      </div>
      <div className="notice">
        <strong>
          Note: If you enter invalid UPI ID, A dummy link will be generated,
          please make sure to enter valid UPI ID.
        </strong>
      </div>
    </div>
  );
}

export default App;
