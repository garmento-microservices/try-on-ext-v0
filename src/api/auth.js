import axios, { Axios } from "axios";

export class AuthApi {
  /**
   * @param {string} [host=""] 
   * @param {AbortController} abortController
   * @param {Axios} _axios
   */
  constructor(
    host = "",
    abortController = new AbortController(),
    _axios = axios.create({
      baseURL: host,
      withCredentials: false,
      signal: abortController.signal,
    })
  ) {
    /** @readonly */
    this.abortController = abortController;
    /** @private @readonly */
    this._axios = _axios;
  }

  /**
   * @param {string} [endpoint="/api/service-tokens"]
   */
  async authenticateAsService(endpoint = "/api/service-tokens") {
    await this._axios.post(endpoint);
  }
}
