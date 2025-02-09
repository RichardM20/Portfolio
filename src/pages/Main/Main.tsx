import React, { useCallback } from 'react';

import Landing from '../Landing/Landing';
import About from '../Landing/sections/About/About';
import Experience from '../Landing/sections/Experience/Experience';
import General from '../Landing/sections/General/General';
import Projects from '../Landing/sections/Projects/Projects';
import Tech from '../Landing/sections/Tech/Tech';

function Main() {
  const [tabSelected, setTabSelected] = React.useState<number>(0);

  const renderSectionTab = useCallback(() => {
    switch (tabSelected) {
      case 0:
        return <Projects />;
      case 1:
        return <About />;
      case 2:
        return <Tech />;
      default:
        return <></>;
    }
  }, [tabSelected]);

  return (
    <Landing>
      <Experience />
      <General setTabSelected={setTabSelected} tabSelected={tabSelected} />
      {renderSectionTab()}
    </Landing>
  );
}

export default Main;
