import React,{useState} from 'react'
import Card from './Card'
import Menu from './cardapi';
import "./style.css"
import Filter from './Filter';
const newlist =[
    ...new Set(
        Menu.map((curelem)=>{
          return curelem.category;
        })
      ),
      "All",
];
function Nature() {
    const [menudata,setmenudata]=useState(Menu);
    const [menulist,setmenulist]=useState(newlist);
    console.log(menudata)
    console.log(newlist)

    const filteritem=(catagory)=>{
        if(catagory==="All"){
            setmenudata(Menu);
            return;
          }
        const updatedlist= Menu.filter((curelem)=>{
            return curelem.category===catagory;
          })
          setmenudata(updatedlist)
    }
  return (
    <div>
        <Filter filteritem={filteritem} menulist={menulist}/>
      <Card menudata={menudata}/>
    </div>
  )
}

export default Nature
