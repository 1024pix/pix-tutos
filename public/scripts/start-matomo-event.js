window._mtm = window._mtm || []

if (document.querySelector('script[data-matomo-debug-mode="true"]')) {
  window._mtm.push(['enableDebugMode'])
}

window._mtm.push({ 'mtm.startTime': new Date().getTime(), 'event': 'mtm.Start' })
