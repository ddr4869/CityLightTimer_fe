import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import intersection from "../public/intersection.json";
import Breadcrumb from "./\bBreadcrumb";

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
  const maxPageButtons = 10; // 최대 페이지 버튼 개수
  const totalPages = Math.ceil(locations.length / pageSize);

  useEffect(() => {
    loadLocations();
  }, []); // 페이지가 처음 로드될 때만 실행되도록 설정

  const loadLocations = () => {
    // 여기에서 즐겨찾기 목록을 다시 불러오는 로직을 추가합니다.
    setLocations(intersection); // 임시로 intersection.json 파일에서 목록을 불러온다고 가정합니다.
  };

  const deleteBookmark = () => {
    /**
     * 삭제요청 보냄
     * todo
     */
    alert("삭제되었습니다.");
    loadLocations(); // 삭제 후에 목록을 다시 불러옴
  };

  const handleGoBack = () => {
    router.push("/"); // 메인 페이지로 이동
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    const buttons = [];

    const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          style={{ margin: "0 5px" }} // 수정된 부분
          disabled={i === currentPage}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  const indexOfLastLocation = currentPage * pageSize;
  const indexOfFirstLocation = indexOfLastLocation - pageSize;
  const currentLocations = locations.slice(
    indexOfFirstLocation,
    indexOfLastLocation
  );

  return (
    <div>
      <div className="breadcrumbContainer">
        <Breadcrumb currentPage={"즐겨찾기"} />
      </div>
      <h2>즐겨찾기</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>번호</th>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Latitude</th>
            <th style={tableHeaderStyle}>Longitude</th>
            <th style={tableHeaderStyle}></th>
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
              <td style={tableCellStyle}>
                <button onClick={deleteBookmark}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 페이지네이션 버튼 */}
      <div className="container">
        {currentPage > 1 && (
          <button onClick={() => goToPage(currentPage - 1)}>이전</button>
        )}
        {renderPaginationButtons()}
        {currentPage < totalPages && (
          <button onClick={() => goToPage(currentPage + 1)}>다음</button>
        )}
        <br></br>
        <br></br>
        <button onClick={handleGoBack}>나가기</button>
      </div>
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
