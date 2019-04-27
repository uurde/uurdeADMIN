import { HttpHeaders } from '@angular/common/http';

export class HeaderConfig {

    //url: string = 'http://localhost:55321';
    url: string = 'http://uurde.ugurdegirmenci.net';

    httpOptions: any = {
        headers: new HttpHeaders({
           "Content-Type": "application/json",
        })
    }
}