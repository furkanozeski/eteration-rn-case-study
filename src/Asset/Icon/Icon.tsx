/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const SearchIcon = (props: SvgProps) => (
  <Svg
    {...props}
    // xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none">
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Zm-1.406 6.008a7 7 0 1 1 1.559-1.27l4.054 4.055a1 1 0 0 1-1.414 1.414l-4.199-4.199Z"
      clipRule="evenodd"
    />
    <Path
      fill="#2A59FE"
      fillOpacity={0.3}
      fillRule="evenodd"
      d="M12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Zm-1.406 6.008a7 7 0 1 1 1.559-1.27l4.054 4.055a1 1 0 0 1-1.414 1.414l-4.199-4.199Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillOpacity={0.5}
      fillRule="evenodd"
      d="M12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Zm-1.406 6.008a7 7 0 1 1 1.559-1.27l4.054 4.055a1 1 0 0 1-1.414 1.414l-4.199-4.199Z"
      clipRule="evenodd"
    />
  </Svg>
);
export const FavoriteIcon = (props: SvgProps) => (
    <Svg
      {...props}
      // xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
    >
      <Path
        fill={props.color ?? '#D9D9D9'}
        d="m12 0 2.694 8.292h8.719l-7.054 5.124 2.694 8.292L12 16.584l-7.053 5.124 2.694-8.292L.587 8.292h8.719L12 0Z"
      />
    </Svg>
);

export const CancelIcon = (props: SvgProps) => (
  <Svg {...props}
    // xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
  >
    <Path d="M7.719 6.281 6.28 7.72 23.563 25 6.28 42.281 7.72 43.72 25 26.437 42.281 43.72l1.438-1.438L26.437 25 43.72 7.719 42.28 6.28 25 23.563Z" />
  </Svg>
)
