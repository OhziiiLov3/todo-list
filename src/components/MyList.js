import React from 'react'
import ListItem from './ListItem';





const MyList = (props) => {
let todoItems = props.theList.map((item, idx)=>{
    return <ListItem task={item} key={idx}/>;
});

  return (
    <div>
<h1>Things I should stop Procrastinatioing:</h1>
<ul>
    {todoItems}
</ul>
    </div>
  )
}

export default MyList;