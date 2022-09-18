import React from "react";

const Header = ({ tabs, currentIndex, setCurrentIndex }) => {
  const getTabIndex = (i) => {
    setCurrentIndex(i);
  };
  const tabStyle = (index) => {
    if (index === currentIndex) {
      return "selectedTab";
    } else {
      return "nonSelectedTab";
    }
  };
  return (
    <header className="header">
      {tabs.map((tab, i) => (
        <button
          className={`${tabStyle(i)}`}
          key={i}
          onClick={(e) => getTabIndex(i)}
        >
          {tab.label}
        </button>
      ))}
    </header>
  );
};

export default Header;
