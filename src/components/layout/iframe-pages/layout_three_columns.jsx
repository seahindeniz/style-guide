import React from 'react';
import Layout from '../Layout';
import LayoutBox from '../LayoutBox';
import LayoutContent from '../LayoutContent';
import LayoutAsideContent from '../LayoutAsideContent';
import LayoutSecondaryContent from '../LayoutSecondaryContent';
import Text from 'text/Text';

const header = (
  <div className="sg-header sg-header--fixed">
    <div className="sg-header__container">
      <div className="sg-header__content">
        Header
      </div>
    </div>
  </div>
);

const footer = (
  <div className="sg-footer">
    <div className="sg-footer__container">
      Footer
    </div>
  </div>
);

const LayoutWideThreeColumns = () => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="../../../style-guide.css" />
      <style>{'body {background-color: #f0f3f5;}'}</style>
    </head>
    <body>
      <Layout header={header} footer={footer} threeColumns wide>
        <LayoutSecondaryContent>
          <Text>
            Secondary content has no padding and no background
          </Text>
        </LayoutSecondaryContent>
        <LayoutContent>
          <Text>
            Main content has no padding and white background
          </Text>
        </LayoutContent>
        <LayoutAsideContent>
          <LayoutBox>
            <Text>
              Aside content has no padding and no background (both are given by layout box)
            </Text>
          </LayoutBox>
        </LayoutAsideContent>
      </Layout>
      <script src="images/icons.js" />
    </body>
  </html>
);

export default LayoutWideThreeColumns;
