import { useState } from "react";


export default function useImageZoom(maxZoomLevel = 500) {
  const minZoomLevel = 100;
  const defaultZoomLevel = 200
  const [zoomLevel, setZoomLevel] = useState(minZoomLevel);
  let zoomwidth = 60 + zoomLevel

//   const zoomPercentage = 

  function zoomIn() {
    setZoomLevel(zoomLevel =>
      defaultZoomLevel < maxZoomLevel ? zoomLevel + 10 : zoomLevel
    );
  }

  function zoomOut() {
    setZoomLevel(zoomLevel =>
      zoomLevel > minZoomLevel ? zoomLevel - 10 : minZoomLevel
    );
  }

  function resetZoom() {
    setZoomLevel(defaultZoomLevel);
  }

  const zoomStyles = {
    // transform: `scale(${zoomLevel})`,
    height: '!auto',
    width: `${zoomwidth}px`
    
  };

  const handlers = {
    zoomIn,
    zoomOut,
    resetZoom
  }

  return [zoomStyles, handlers];
}