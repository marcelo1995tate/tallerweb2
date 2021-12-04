export class SessionHandlerService {

    static enSesion() : boolean {
        const value = `; ${document.cookie}`;
        const parts = value.split("; ID=");
    
        if (parts.length === 2) return true
        return false
    }

    static getSesionMail() : string {
        const value = `; ${document.cookie}`;
        const parts = value.split("; Email=");

        if(parts.length === 2) return parts[1]
        else return ''
    }

    static cleanSession(){
        document.cookie = "ID=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
        document.cookie = "Email=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
    }
}