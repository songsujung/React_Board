import { useSearchParams } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const ListPage = () => {

    const [search, setSearch] = useSearchParams()

    // search의 pagef를 찾아서 가져온뒤, page에 담는다. 없으면 1
    const page = search.get("page") || 1

    const size = search.get("size") || 10

    const type = search.get("type")

    const keyword = search.get("keyword")

    const queryObj = {page, size, type, keyword}

    console.log("page: " + page)
    console.log("size: " + size)
    console.log("type: " + type)
    console.log("keyword: " + keyword)

    console.log("queryObj------- ")
    console.log(queryObj)

    console.info(search)

    console.info("List....")

    return ( 
        <div></div>
     );
}
 
export default ListPage;