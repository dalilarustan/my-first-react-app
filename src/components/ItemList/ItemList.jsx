import Item from "../Item/Item";

const ItemList = ({data=[] })=>{
    return(
        <div>
            {data.map(prod=> <Item key={prod.id} {...prod}/>)}
        </div>
    )
}
export default ItemList