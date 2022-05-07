import * as React from 'react';

import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgMenu(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <Path d="M20.4922 17.04H3.50777C2.67555 17.04 2 17.7037 2 18.5213C2 19.3379 2.67555 20.0027 3.50777 20.0027H20.4922C21.3244 20.0027 22 19.3379 22 18.5213C22 17.7037 21.3244 17.04 20.4922 17.04Z" />
      <Path d="M20.4922 10.5195H3.50777C2.67555 10.5195 2 11.1832 2 12.0008C2 12.8173 2.67555 13.4821 3.50777 13.4821H20.4922C21.3244 13.4821 22 12.8173 22 12.0008C22 11.1832 21.3244 10.5195 20.4922 10.5195Z" />
      <Path d="M22 5.48024C22 4.6637 21.3245 4 20.4933 4L3.50777 4C2.67555 4 2 4.6637 2 5.48024C2 6.29786 2.67555 6.96156 3.50777 6.96156H20.4933C21.3245 6.96156 22 6.29786 22 5.48024Z" />
    </Svg>
  );
}

export default SvgMenu;
