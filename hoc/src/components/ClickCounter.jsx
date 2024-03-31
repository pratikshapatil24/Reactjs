import withCounter from "./withCounter"


function ClickCounter(props) {
    const{count, incrementCount} = props;
 
  return (

    <div>
        <button onClick={incrementCount}>click me</button>
        <h2> Counter is:{count}</h2>
    </div>
  )
}

export default withCounter( ClickCounter,5)