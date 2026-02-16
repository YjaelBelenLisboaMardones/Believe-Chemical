import './Button.css';

export default function Button({ text, onClick, type = "button" }) {
  return (
    <button className="subscribe-btn" type={type} onClick={onClick}>
      {text}
    </button>
  );
}