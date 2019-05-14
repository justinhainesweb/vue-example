import * as axiosLib from "axios";

export const isProduction = true;

const utils = {
  isProduction,
};

axiosLib.defaults.xsrfCookieName = 'csrftoken';
axiosLib.defaults.xsrfHeaderName = 'X-CSRFToken';
export const axios = axiosLib;

export default utils;
