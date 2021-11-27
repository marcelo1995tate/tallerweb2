export class SessionHandlerService {

    static enSesion() : boolean {
        const value = `; ${document.cookie}`;
        const parts = value.split("; SSID=");
    
        if (parts.length === 2) return true
        return false
    }

    static cleanSession(){
        document.cookie = ''
    }
}