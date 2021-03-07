"use strict";
const ioc = require("expressweb-ioc");

class InjectRealTime {
  
  constructor({NtpTime}) {
    this.ntpServer=NtpTime;
  }

  /**
   * Handle Middleware.
   * @param {Request} req
   * @param {Response} res
   * @param {Next} next
   */
  async handle(req, res, next) {
    //UpStream
    //Añadimos la hora en la que recibimos la peticion
    let hora=NtpTime.getTimeFirst();
    req.headers.append("X-TIME-REQUEST",hora);
    await next();
    //DownStream
    //Añadimos la hora en la que emitimos la respuesta
    hora=NtpTime.getTimeFirst();
    res.headers.append("X-TIME-RESULT",hora);
  }
}

module.exports = InjectRealTime;