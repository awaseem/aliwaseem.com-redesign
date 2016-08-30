import { Map, List, fromJS } from 'immutable';
import { getSummaryFromStore, getContactFromStore, getWorkFromStore } from '../requests/dataStore';
export const SET_SUMMARY = 'setSummary';
export const SET_CONTACT = 'setContact';
export const SET_PORTFOLIO = 'setPortfolioItems';
export const SET_WORK = 'setWorkExperience';

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

export function setWorkExperience(work = List()) {
  return {
    type: SET_WORK,
    payload: Map({
      work: fromJS(work),
    }),
  };
}

export function setPortfolioItems(portfolio = List()) {
  return {
    type: SET_PORTFOLIO,
    payload: Map({
      portfolio,
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
