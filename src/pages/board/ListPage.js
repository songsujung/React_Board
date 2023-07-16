import { useSearchParams } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";
import ListComponent from "../../components/board/ListComponent";

const checkNull = (obj) => {

    // 새로운 빈 객체 result를 생성
    const result = {}
  
    // for문으로 obj 객체의 속성들을 하나씩 차례대로 탐색
    // 속성 : 객체에 포함된 변수 또는 값의 이름( 키(key)와 값(value)의 쌍으로 구성 )
    for (const attr in obj) {
      const attrName = attr // 속성의 이름을 attrName에 할당
      const attrValue = obj[attr] // 속성의 값 attrValue에 할당
  
      if( attrValue && attrValue !== 'null'){
        result[attrName] = attrValue // 조건식이 만족하는 경우 속성과 속성값을 result에 저장
      }
    }
  
    return result
  }

const ListPage = () => {

    const [search, setSearch] = useSearchParams()

    // search의 pagef를 찾아서 가져온뒤, page에 담는다. 없으면 1
    const page = search.get("page") || 1

    const size = search.get("size") || 10

    const type = search.get("type")

    const keyword = search.get("keyword")

    const queryObj = checkNull({page, size, type, keyword})

    // 페이지 번호를 누르면 URL이 변경
    const movePage = (num) => {
        console.log("NUM--------" + num)
        
        // queryObj객체의 page속성(값)을 num으로 변경
        queryObj.page = num 

        // queryObj객체를 변경하여 컴포넌트의 상태를 업데이트 
        // {...} <- 전개연산자 : 배열이나 객체를 펼쳐서 개별 요소로 분리하거나, 여러 개의 배열이나 객체를 결합할 때 사용
        setSearch({...queryObj})
    }

    console.log("page: " + page)
    console.log("size: " + size)
    console.log("type: " + type)
    console.log("keyword: " + keyword)

    console.log("queryObj------- ")
    console.log(queryObj)

    console.info(search)

    console.info("List....")

    return ( 
        <div>
            Board List Page <ListComponent queryObj={queryObj} movePage={movePage}></ListComponent>
        </div>
     );
}
 
export default ListPage;