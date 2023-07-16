import axios from "axios";
import { createSearchParams } from "react-router-dom"

// getList : 비동기 함수
// export : 이 함수를 모듈 외부에서 사용할 수 있도록 내보내는 역할
// async : 함수 내부에서 비동기 작업을 수행하도록 요청
export const getList = async (queryObj) => {

    // 객체 형태의 queryObj를 URL 쿼리 문자열로 변환
    const queryString = createSearchParams(queryObj).toString();

    // Axios를 사용하여 GET 요청
    // await : 비동기 요청의 응답을 대기, 도착하면 res변수에 저장
    // async와 await은 세트
    const res = await axios.get(`http://localhost:8080/api/board/list?${queryString}`)

    // GET요청의 응답 데이터를 반환 (res.data : 서버에서 받은 응답데이터)
    return res.data
}