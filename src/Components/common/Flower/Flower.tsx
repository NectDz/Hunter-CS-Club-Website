import "./Flower.css";

interface FlowerProps {
  color: string;
}

const Petal = (color: string) => (
  <div className="petal" style={{ backgroundColor: color }} />
);

const Flower: React.FC<FlowerProps> = ({ color }) => {
  return (
    <div className="flower">
      {Petal(color)}
      {Petal(color)}
      {Petal(color)}
      {Petal(color)}
      {Petal(color)}
      {Petal(color)}
    </div>
  );
};

export default Flower;
