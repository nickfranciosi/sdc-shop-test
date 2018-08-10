let resizeTimeout;
export function throttledVhCalculator(timeout = 66) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = window.setTimeout(() => {
      resizeTimeout = null;
      setVhProperty();

      // The actualResizeHandler will execute at a rate of 15fps
    }, timeout);
  }
}

export function setVhProperty() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  const vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  const $modalWrapper = document.querySelector('#modalCart');
  $modalWrapper.style.setProperty('--vh', `${vh}px`);
}

function setupVhHelper() {
  setVhProperty();
  window.addEventListener('resize', throttledVhCalculator, false);
}


export default setupVhHelper;
