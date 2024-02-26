import Link from "next/link";

const Breadcrumb = ({ currentPage }) => (
  <div className="breadcrumb">
    <Link href="/">
      <span className="rightSpans">홈</span>
    </Link>
    <span> &gt; </span>
    <span>{currentPage}</span>
  </div>
);

export default Breadcrumb;
