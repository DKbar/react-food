import {CategoryItem} from "./CategoryItem";

export const CategoryList = (props) => {
    const { catalog } = props;

    return <div className='list'>
        {catalog.map(category => <CategoryItem key={category.idCategory} {...category} />)}
    </div>
}