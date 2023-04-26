import './Buttons.css'
export default function Buttons({toggleImgBack,toggleImgNext}) {
  return (
    <div className="button-container">
      <button onClick={() => toggleImgNext()}>Next Picture</button>
      <button onClick={() => toggleImgBack()}>Previous Picture</button>
    </div>
  );
}
