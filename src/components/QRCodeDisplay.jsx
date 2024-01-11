// src/components/QRCodeDisplay.js
import QRCode from "qrcode.react";
import "./QRCodeDisplay.css";

const QRCodeDisplay = ({ qrCodeData, fullData }) => {
  console.log(fullData);
  return (
    <div className="qrcontainer">
      <div className="amount">
        <strong>{fullData.merchantName}</strong>
      </div>
      <div className="qrcontent">
        <QRCode value={qrCodeData} />;
      </div>
      <div className="amount">Amount: {fullData.amount}</div>
    </div>
  );
};

export default QRCodeDisplay;
