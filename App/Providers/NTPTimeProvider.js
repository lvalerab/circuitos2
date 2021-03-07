"use strict";
    const ioc = require("expressweb-ioc");
    
    class NTPTimeProvider{
        /**
         * Register application services.
        */
        register() {
            return {
                NtpTime: ioc.asClass("App/Service/NtpService","TRANSIENT")
            };
        }

        /**
         * Bootstrap any application services.
         *
         * @return void
        */
        boot() {
           //
        }
    }

    module.exports = NTPTimeProvider;