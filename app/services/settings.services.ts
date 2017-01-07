import {Injectable} from 'angular2/core';
import {Storage, SqlStorage} from "ionic-angular";
import {Observable} from "rxjs/Observable";

export class Settings{
    t411url: string;
    t411authtoken: string;
    transmissions_servers:Array<{
        url: string, username: string, password: string,
        destinations: Array<string>
    }>;

    constructor() {
        this.t411url = 'api.t411.ch';
        this.t411authtoken = null;
        this.transmissions_servers = [];
    }

    load(json_data){
        let data = JSON.parse(json_data);
        Object.assign(this, data);
    }
    dump(): string
    {
        return JSON.stringify(this);
    }
}

@Injectable()
export class SettingsService {
    storage: Storage;
    settings: Settings;
    constructor() {
        this.storage = new Storage(SqlStorage);
        this.settings = null;
    }

    getSettings(): Observable<Settings>{
        return Observable.create((observer) => {
            if (this.settings == null) {
                let settings = Settings();
                this.storage.get("settings").then((data) => {
                    settings.load(data);
                    this.settings = settings;
                    observer.onNext(this.settings);
                    observer.onComplete();
                })
            } else {
                observer.onNext(this.settings);
                observer.onComplete();
            }

        });
    }
    saveSettings(){
        if (this.settings !== null){
            this.settings.dump();
        }
    }
}