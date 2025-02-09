import React from 'react';

import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { t } from 'i18next';
import { Trans } from 'react-i18next';

import Navbar from './sections/Navbar/Navbar';
import GenericButton from '../../shared/componentes/GenericButton/GenericcButton';
import { TRANSLATIONS_GLOBAL } from '../../shared/constants/translations';
import { USER_NAME } from '../../shared/constants/user';

import './Landing.scss';

interface LandingProps {
  children?: React.ReactNode;
}

const Landing: React.FC<LandingProps> = ({ children }) => {
  return (
    <div className="landing flex flex-col">
      <Navbar />
      <div className="mask flex flex-col gap-48">
        <div className="info flex justify-between items-center">
          <div className="me">
            <p>
              {
                <Trans
                  i18nKey={TRANSLATIONS_GLOBAL.greeting}
                  components={{
                    span: <span className="name"></span>,
                    br: <br />
                  }}
                  values={{ user: USER_NAME }}
                />
              }
            </p>
            <p>{t(TRANSLATIONS_GLOBAL.profession_text)}</p>
            <div className="actions flex flex-row">
              <GenericButton
                leadingIcon={faFileLines}
                text={t(TRANSLATIONS_GLOBAL.download)}
                action={() => {}}
                style="gradient"
              ></GenericButton>
            </div>
          </div>
          <div className="landing-photo">
            <img src="https://avatars.githubusercontent.com/u/64317751?v=4" />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Landing;
