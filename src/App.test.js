import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#333333"); 
  const [buttonColor, setButtonColor] = useState("#007bff"); 
  const [fontStyle, setFontStyle] = useState("Arial"); 

  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem("userPreferences"));
    if (savedSettings) {
      setBgColor(savedSettings.bgColor);
      setTextColor(savedSettings.textColor);
      setButtonColor(savedSettings.buttonColor);
      setFontStyle(savedSettings.fontStyle);
    }
  }, []);

  useEffect(() => {
    const userPreferences = { bgColor, textColor, buttonColor, fontStyle };
    localStorage.setItem("userPreferences", JSON.stringify(userPreferences));
  }, [bgColor, textColor, buttonColor, fontStyle]);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: fontStyle,
        minHeight: "100vh",
        padding: "20px",
        transition: "all 0.3s ease",
      }}
    >
      <h1>🎨 تصميم تفاعلي حسب مزاجك</h1>
      <p>يمكنك تخصيص مظهر الصفحة باستخدام الخيارات أدناه.</p>

      <div className="controls">
        <div className="control">
          <label>🎨 لون الخلفية:</label>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </div>
        <div className="control">
          <label>🖋 لون النصوص:</label>
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </div>
        <div className="control">
          <label>🔘 لون الأزرار:</label>
          <input
            type="color"
            value={buttonColor}
            onChange={(e) => setButtonColor(e.target.value)}
          />
        </div>
        <div className="control">
          <label>✍ نوع الخط:</label>
          <select
            value={fontStyle}
            onChange={(e) => setFontStyle(e.target.value)}
          >
            <option value="Arial">Arial</option>
            <option value="'Times New Roman', Times, serif">Times New Roman</option>
            <option value="'Courier New', Courier, monospace">Courier New</option>
            <option value="'Comic Sans MS', cursive, sans-serif">Comic Sans</option>
          </select>
        </div>
      </div>

      <button
        style={{
          backgroundColor: buttonColor,
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          marginTop: "20px",
        }}
        onClick={() => alert("هذا زر نموذجي لتجربة الألوان!")}
      >
        جربني!
      </button>
    </div>
  );
};

export default App;
