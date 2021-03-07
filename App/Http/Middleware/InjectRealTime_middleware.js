"use strict";

        class InjectRealTime {
          /**
           * Handle Middleware.
           * @param {Request} req
           * @param {Response} res
           * @param {Next} next
           */
          async handle(req, res, next) {
            //UpStream
            await next();
            //DownStream
          }
        }

        module.exports = InjectRealTime;