import { useEffect, useState } from "react";
import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/boardAPI";

const initSate = {
    dtoList : [],
    end : 0,
    start : 0,
    next : false,
    prev : false,
    pageNums : [], // 배열로 해야 반복문 처리가 편리함
    page : 0,
    size : 0,
    requestDTO : null
  }

const ListComponent = ({queryObj}) => {

    const [listData, setListData] = useState(initSate) // 초기값 설정

    // useEffect 사용하여, queryObj의 변화를 감지하고, 그에 따라 getList 함수를 호출
    // queryObj가 변경될 때마다 데이터를 업데이트
    useEffect(() => {

        getList(queryObj).then(data => {

            console.log(data)
            setListData(data)

        })
    },[queryObj]) // 의존성 배열

    console.log(createSearchParams(queryObj),toString)

    return (
        <div>
          <div>ListComponent</div>
          <div>
            <ul>
              {/* dto를 {bno , title , writer , replyCount} 구조분해 할당해서 사용하면 편리함 */}
              {listData.dtoList.map(({bno , title , writer , replyCount}) => <li key={bno}>{bno} - {title} - {writer}</li>)}
            </ul>
          </div>
        </div>
      );
}
 
export default ListComponent;