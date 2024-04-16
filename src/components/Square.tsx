

type SquareProps = {
  value?: number
  onClick: () => void
}


const Square = ({value, onClick}: SquareProps) => {
  return <button className="grid-item" onClick={onClick}>{value}</button>;

}

export default Square;