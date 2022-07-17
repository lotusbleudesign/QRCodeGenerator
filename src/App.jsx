import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 1,
        color: {
          dark: "#0000ff00",
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);
        console.log(url);
        setQr(url);
      }
    );
  };

  const Clean = () => {
    setUrl("");
    setQr("");
  };

  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter /url to encode"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={GenerateQRCode}>Generate</button>
      <button onClick={Clean}>Clean</button>
      {qr && (
        <>
          <img src={qr} />
          <a href={qr} download="QRCodeByLotusbleudesign.png">
            Download
          </a>
        </>
      )}
      {!qr && <></>}
    </div>
  );
}

export default App;
