import React, { useCallback } from 'react';

import Landing from '../Landing/Landing';
import Experience from '../Landing/sections/Experience/Experience';
import General from '../Landing/sections/General/General';
import Projects from '../Landing/sections/Projects/Projects';

function Main() {
  const [tabSelected, setTabSelected] = React.useState<number>(0);

  const renderSectionTab = useCallback(() => {
    switch (tabSelected) {
      case 0:
        return <Projects />;
      default:
        return <></>;
    }
  }, [tabSelected]);

  return (
    <div data-experience="new" className="app">
      <Landing>
        <Experience />
        <General setTabSelected={setTabSelected} tabSelected={tabSelected} />
        {renderSectionTab()}
      </Landing>
    </div>
  );
}

export default Main;
