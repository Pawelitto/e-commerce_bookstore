import { useState } from 'react';
import '../Styles/DropDown.css';

function DropdownButton() {
  const [showDropdown, setShowDropdown] = useState(false);

  function handleClick() {
    setShowDropdown(!showDropdown);
  }

  return (
    <div className="dropdown-div">
      <button className="dropdown-btn" onClick={handleClick}>
        Sortowanie
      </button>
      {showDropdown && (
        <ul className="dropdown-content">
          <li>cena (od najniższej)</li>
          <li>cena (od najwyższej)</li>
          <li>tytuł (a - z)</li>
          <li>tytuł (z - a)</li>
          <li>opinie (od Najlepszych)</li>
          <li>opinie (od Najgorszych)</li>
        </ul>
      )}
    </div>
  );
}

export default DropdownButton;
