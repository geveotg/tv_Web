import { FC } from "react";
import classes from '../style/categories_response.module.scss'
import { getCategories } from "@/app/datas/navdata";


const Categories_Response:FC = ()=>{
    const ProductList = getCategories.map((el) => {
        return <li key={el.category_id}>{el.category_name}</li>;
    });
    return (
        <div>
            <ul className={classes['ul']}>
                {ProductList}
            </ul>
        </div>
    )
}

export default Categories_Response;