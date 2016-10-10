import { Map, fromJS } from 'immutable';
import { getSummaryFromStore,
         getContactFromStore,
         getWorkFromStore,
         getPortolfioFromStore,
         login,
         setSummary as setSummaryStore,
         setContact as setContactStore,
         setWork as setWorkStore,
         setPortfolio as setPortfolioStore,
} from '../requests/dataStore';
import { navigate } from '../history/history';

export const SET_SUMMARY = 'setSummary';
export const SET_CONTACT = 'setContact';
export const SET_PORTFOLIO = 'setPortfolioItems';
export const SET_WORK = 'setWorkExperience';
export const SET_TOKEN = 'setToken';

export function setToken(token = '') {
  return {
    type: SET_TOKEN,
    payload: Map({ token }),
  };
}

export function setSummary(summary = '') {
  return {
    type: SET_SUMMARY,
    payload: Map({ summary }),
  };
}

export function setContactInfo(email = '', github = '', linkedin = '') {
  return {
    type: SET_CONTACT,
    payload: Map({
      email, github, linkedin,
    }),
  };
}

export function setWorkExperience(work = [{}]) {
  return {
    type: SET_WORK,
    payload: Map({
      work: fromJS(work),
    }),
  };
}

export function setPortfolioItems(portfolio = [{}]) {
  return {
    type: SET_PORTFOLIO,
    payload: Map({
      portfolio: fromJS(portfolio),
    }),
  };
}

// requests to get data

export function getSummary() {
  return (dispatch, getState) => {
    if (!getState().has('summary')) {
      getSummaryFromStore()
        .then((res) => {
          dispatch(setSummary(res.body.value));
        })
        .catch(() => {
          dispatch(setSummary('ERR'));
        });
    }
  };
}

export function getContact() {
  return (dispatch, getState) => {
    if (!getState().has('email') || !getState().has('github') || !getState().has('linkedin')) {
      getContactFromStore()
        .then((res) => {
          const { email, github, linkedin } = JSON.parse(res.body.value);
          dispatch(setContactInfo(email, github, linkedin));
        })
        .catch(() => {
          dispatch(setContactInfo('ERR', 'ERR', 'ERR'));
        });
    }
  };
}

export function getWork() {
  return (dispatch, getState) => {
    if (!getState().has('work')) {
      getWorkFromStore()
        .then((res) => {
          dispatch(setWorkExperience(JSON.parse(res.body.value)));
        })
        .catch(() => {
          dispatch(setWorkExperience(['ERR']));
        });
    }
  };
}

export function getPortfolio() {
  return (dispatch, getState) => {
    if (!getState().has('portfolio')) {
      getPortolfioFromStore()
        .then((res) => {
          dispatch(setPortfolioItems(JSON.parse(res.body.value)));
        })
        .catch(() => {
          dispatch(setPortfolioItems(['ERR']));
        });
    }
  };
}

export function setLoginToken(username = '', password = '') {
  return (dispatch) => {
    login(username, password)
      .then((res) => {
        dispatch(setToken(res.body.message));
        navigate('/admin');
      })
      .catch(() => {
        dispatch(setToken('ERR'));
      });
  };
}

export function setSummaryToStore(token = '', summary = '') {
  return (dispatch) => {
    setSummaryStore(token, summary)
      .then(() => {
        dispatch(setSummary(summary));
      })
      .catch(() => {
        // TODO: handle error
      });
  };
}

export function setContactToStore(token = '', email = '', github = '', linkedin = '') {
  return (dispatch) => {
    setContactStore(token, email, github, linkedin)
      .then(() => {
        dispatch(setContactInfo(email, github, linkedin));
      })
      .catch(() => {
        // TODO: handle error
      });
  };
}

export function setWorkToStore(token = '', workItems = [{}]) {
  return (dispatch) => {
    setWorkStore(token, workItems)
      .then(() => {
        dispatch(setWorkExperience(workItems));
      })
      .catch(() => {
        // TODO: handle error
      });
  };
}

export function setPortfolioToStore(token = '', portfolioItems = [{}]) {
  return (dispatch) => {
    setPortfolioStore(token, portfolioItems)
      .then(() => {
        dispatch(setPortfolioItems(portfolioItems));
      })
      .catch(() => {
        // TODO: handle error
      });
  };
}
