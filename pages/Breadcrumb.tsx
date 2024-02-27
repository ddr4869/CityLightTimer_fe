import Link from "next/link";

const Breadcrumb = ({ currentPage }) => (
  <div>
    <Link href="/">
      <span>CityLigthTimer</span>
    </Link>
    {currentPage !== "main" && (
      <div>
        <span>{currentPage}</span>
      </div>
    )}
  </div>
);
export default Breadcrumb;
