
    "use strict";
    const Route = require("@routerManager");
    
    /*
    |--------------------------------------------------------------------------
    | Authentication Route File   
    |--------------------------------------------------------------------------
    |
    | This route handles both login and registration.
    | 
    */
    
    Route.post("/registrar", "Auth/RegisterController@register");
    
    Route.post("/validar", "Auth/LoginController@login");
    
    module.exports = Route.exec;
    