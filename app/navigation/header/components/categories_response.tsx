import { FC } from "react";
import classes from '../style/categories_response.module.scss'
import { useGetCategoriesQuery } from "@/app/redux/future/films/filmsApi";

interface Categories {
    category_id: string;
    category_name: string;
    parent_id: number;
}

const Categories_Response:FC = ()=>{
    const { data, isError, isLoading, isSuccess } = useGetCategoriesQuery({
        username: "TV-95266315",
        password: "524228170964",
    });

    const ProductList =
        data &&
        data?.map((el: Categories) => {
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