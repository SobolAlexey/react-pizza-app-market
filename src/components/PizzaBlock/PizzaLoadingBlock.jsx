import React from 'react';

import ContentLoader from "react-content-loader"

export const PizzaLoadingBlock = () => {
  return (
    <ContentLoader
      className='pizza-block'
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="107" cy="130" r="107" />
      <rect x="0" y="304" rx="6" ry="6" width="226" height="24" />
      <rect x="0" y="340" rx="6" ry="6" width="230" height="55" />
      <rect x="0" y="404" rx="28" ry="28" width="78" height="42" />
      <rect x="87" y="404" rx="43" ry="43" width="137" height="43" />
    </ContentLoader>
  )
}
