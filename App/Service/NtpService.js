class NtpClientService {    
    NTPClient=require('ntpclient');
    moment=require('moment');
    constructor() {
        this.ntpServers=this._getNtpServers();
    };

    _getNtpServers() {
        let servers=[];
        let pares=(process.env.SERVER_NTP!=undefined?process.env.SERVER_NTP:"").split(',');
        for(let i=0;i<pares.length;i++) {
            let datServer=pares[i].split('|');
            servers.push({dns:datServer[0],ip:datServer[1],port:datServer[2]});
        }
        return servers;
    }

    getTime(ntpServer) {      
       return new NTPClient({
           server:ntpServer.dns,
           replyTimeout:40*1000
       })
       .getNetworkTime();
    }

    getTimeAsync(ntpServer) {
        let that=this;
        return new Promise(function (accept,reject) {
            that.getTime(ntpServer).then(function (date) {
                accept({server:ntpServer,date:date});
            }).catch((err)=>{
                reject(err);
            });
        });
    }

    async getNtpServerTime() {
        let resultado=[];
        for(let i=0;i<this.ntpServers.length;i++) {
            resultado.push(await this.getTimeAsync(this.ntpServers[i]));
        }
        return resultado;
    }

    getTimeFirst() {
        let Server=this._getNtpServers()[0];
        return this.getTime(Server);
    }
}