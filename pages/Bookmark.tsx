// // components/LoginForm.js
// import { useRouter } from "next/router";
// import { useState } from "react";

// interface LoginFormProps {
//   onLoginSuccess: (isSuccess: boolean) => void;
// }

// const Bookmark = ({}) => {
//   const router = useRouter();
//   const [username, setUsername] = useState("test");
//   const [password, setPassword] = useState("test");

//   const handleBookmarkData = async () => {
//     try {
//       // 유저 id로 즐겨찾기 내역 조회
//       const getBookmarks = await fetch("http://localhost:8088/bookmark/1", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       console.log("response", getBookmarks);

//       // 서버로부터의 응답을 확인
//       if (getBookmarks) {
//         const locations = [
//           {
//             itstId: "10",
//             itstNm: "난곡우체국앞",
//             mapCtptIntLat: "37.47861569168731",
//             mapCtptIntLot: "126.91473646413034",
//           },
//           {
//             itstId: "1007",
//             itstNm: "우리은행암사",
//             mapCtptIntLat: "3.75547454",
//             mapCtptIntLot: "1.271364893",
//           },
//           // ... (나머지 데이터)
//         ];

//         return (
//           <div>
//             <h2>Bookmark Locations</h2>
//             <table>
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Name</th>
//                   <th>Latitude</th>
//                   <th>Longitude</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {locations.map((location) => (
//                   <tr key={location.itstId}>
//                     <td>{location.itstId}</td>
//                     <td>{location.itstNm}</td>
//                     <td>{location.mapCtptIntLat}</td>
//                     <td>{location.mapCtptIntLot}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         );
//         // 로그인이 성공하면 부모 컴포넌트에서 전달한 콜백 함수를 호출하여 상태를 업데이트합니다.
//         // onLogin 함수는 부모 컴포넌트에서 전달될 예정입니다.
//       } else {
//         // 실패 시 적절한 에러 처리를 수행
//       }
//     } catch (error) {
//       console.error("에러 발생:", error);
//     }
//   };
// };

// export default Bookmark;

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

interface BookmarkProps {
  itstId: string;
  itstNm: string;
  mapCtptIntLat: string;
  mapCtptIntLot: string;
}

const Bookmark = () => {
  const router = useRouter();
  const [locations, setLocations] = useState<BookmarkProps[]>([]);
  const handleGoBack = () => {
    router.push("/"); // 메인 페이지로 이동
  };
  useEffect(() => {
    const testData = [
      {
        itstId: "10",
        itstNm: "난곡우체국앞",
        mapCtptIntLat: "37.47861569168731",
        mapCtptIntLot: "126.91473646413034",
      },
      {
        itstId: "1007",
        itstNm: "우리은행암사",
        mapCtptIntLat: "3.75547454",
        mapCtptIntLot: "1.271364893",
      },
      // ... (나머지 데이터)
    ];

    setLocations(testData);

    // const fetchData = async () => {
    //   try {
    //     const response = await fetch("http://localhost:8088/bookmark/1", {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     });

    //     if (response.ok) {
    //       const data = await response.json();
    //       setLocations(data);
    //     } else {
    //       // 실패 시 적절한 에러 처리를 수행
    //       console.error("에러 발생:", response.statusText);
    //     }
    //   } catch (error) {
    //     console.error("에러 발생:", error);
    //   }
    // };

    // fetchData();
  }, []);

  return (
    <div>
      <h2>즐겨찾기</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Latitude</th>
            <th style={tableHeaderStyle}>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location) => (
            <tr key={location.itstId}>
              <td style={tableCellStyle}>{location.itstNm}</td>
              <td style={tableCellStyle}>
                {parseFloat(location.mapCtptIntLat)}
              </td>
              <td style={tableCellStyle}>
                {parseFloat(location.mapCtptIntLot)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleGoBack}>나가기</button>
    </div>
  );
};

const tableHeaderStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

// 테이블 셀 스타일
const tableCellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

export default Bookmark;
