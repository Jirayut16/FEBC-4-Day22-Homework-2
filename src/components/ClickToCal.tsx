import React from "react";
import { useState } from "react";
import "./ClickToCal.css";

function ClickToCal() {
  const [weight, setweight] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const changeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setweight(Number(event.target.value));
    console.log(weight);
  };

  const changeTheme = () => {
    document.body.classList.toggle("dark-mode");
  };
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = (weight * 2.2 * 30) / 2;
    setResult(result);
    console.log(result);
  };
  return (
    <>
      <div className="Container">
        <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
        <div>
          <form onSubmit={submit}>
            <input
              type="text"
              id="weight"
              name="weight"
              placeholder="ระบุน้ำหนัก (kg.)"
              onChange={changeWeight}
            />
            <button className="cal">คํานวณ</button>
          </form>
        </div>
        <h2>ควรดื่มน้ำ {result.toFixed(2)} มล.ต่อวัน</h2>
      </div>
      <div className="button">
        <button onClick={changeTheme}>Light/Dark mode</button>
      </div>
    </>
  );
}

export default ClickToCal;
