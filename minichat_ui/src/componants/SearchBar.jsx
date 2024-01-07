import "font-awesome/css/font-awesome.min.css";

const SearchBar = ({ placeholder, searchValue, onChange }) => {
  return (
    <div className="pt-3 ">
      <div className="col col-md-4" style={{width:"100%", padding:"0px 20px" }}>
        <input
          className="form-control border-secondary rounded-pill pr-5 m-8"
          type="search"
          placeholder={placeholder}
          id="example-search-input2"
          value={searchValue}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
