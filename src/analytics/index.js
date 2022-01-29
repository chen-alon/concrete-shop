import ReactGA from 'react-ga';

export const initGA = () => {
  console.log('GA init');
  ReactGA.initialize('UA-218071245-1');
};

export const logPageView = () => {
  if (process.env.NODE_ENV === "production" && process.browser) {
    console.log(`Logging pageview for ${window.location.pathname}`);
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
};

export const logEvent = (category = '', action = '') => {
  if (process.env.NODE_ENV === "production" && process.browser) {
    console.log("GA event:", category, ":", action);
    if (category && action) {
      ReactGA.event({ category, action });
    }
  }

};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
