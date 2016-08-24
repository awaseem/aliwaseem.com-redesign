import { Map, List } from 'immutable';

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

export function setWorkExperience(items = List()) {
  return {
    type: SET_WORK,
    payload: items,
  };
}

export function setPortfolioItems(items = List()) {
  return {
    type: SET_PORTFOLIO,
    payload: items,
  };
}
