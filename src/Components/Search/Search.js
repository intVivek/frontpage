import "./Search.scss"
import {useState} from "react";
import {Filter, Search as SearchIcon} from "../../Assets/Icons";


const Search = () => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(true);
  }

  return <div className={clicked?"search searchClicked":"search"}>
    <div className='textFeild'>
      <SearchIcon />
      <input onClick={clickHandler} placeholder="Search or start new chat" />
      <Filter />
    </div>
  </div>;
};

export default Search;
