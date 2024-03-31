import withCounter from "./withCounter";


function HoverCounter(props) {
    const{count, incrementCount} = props;
    
  return (
    <div>
        <button onMouseOver={incrementCount}  >Hover me</button>
        <h2>count is: {count}</h2>
    </div>
  )
}

export default withCounter(HoverCounter,3) ;