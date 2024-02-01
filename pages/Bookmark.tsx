import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import intersection from "../public/intersection.json";

interface BookmarkProps {
  itstId: string;
  itstNm: string;
  mapCtptIntLat: string;
  mapCtptIntLot: string;
}

const Bookmark = () => {
  const router = useRouter();
  const [locations, setLocations] = useState<BookmarkProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // 한 페이지에 보여질 아이템 개수
  const handleGoBack = () => {
    router.push("/"); // 메인 페이지로 이동
  };
  useEffect(() => {
    setLocations(intersection);

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

  const indexOfLastLocation = currentPage * pageSize;
  const indexOfFirstLocation = indexOfLastLocation - pageSize;
  const currentLocations = locations.slice(
    indexOfFirstLocation,
    indexOfLastLocation
  );

  return (
    <div>
      <h2>즐겨찾기</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>번호</th>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Latitude</th>
            <th style={tableHeaderStyle}>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {currentLocations.map((location, index) => (
            <tr key={location.itstId}>
              <td style={tableCellStyle}>{indexOfFirstLocation + index + 1}</td>
              <td style={tableCellStyle}>{location.itstNm}</td>
              <td style={tableCellStyle}>
                {parseFloat(location.mapCtptIntLat) * 0.0000001}
              </td>
              <td style={tableCellStyle}>
                {parseFloat(location.mapCtptIntLot) * 0.0000001}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 페이지네이션 버튼 */}
      <div style={{ marginTop: "10px" }}>
        {Array.from(
          { length: Math.ceil(locations.length / pageSize) },
          (_, index) => (
            <button key={index + 1} onClick={() => setCurrentPage(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>

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
