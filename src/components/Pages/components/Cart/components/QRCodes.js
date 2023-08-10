import React from "react";
import QRCode from "react-qr-code";
import qrcodeImage from "../../../../../commons/assets/qrcode.jpg";

function QRCodes(props) {
  //TOdO: muon cusom thi tu vao day chinh
  return (
    <div style={{marginLeft: '28px', marginTop: '12px'}}>
      <img src={qrcodeImage} alt="QR Code" style={{ width: '200px', height: '200px' }} />
      {/* <QRCode
        title="transformQRCode"
        value={"123456"}
        bgColor="#0F1824"
        fgColor="#666"
        size={200}
      /> */}
    </div>
  );
}
export default QRCodes;
