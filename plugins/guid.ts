export class GUID {
    public static Empty: string = "00000000-0000-0000-0000-000000000000";
    public Empty: string = "00000000-0000-0000-0000-000000000000";
    private _guid: string;

    constructor(_guid?: string) {
        if (_guid) this.parse(_guid);
        else this.newGuid()
    }

    public ToString(): string {
        if (this._guid != null)
            return this._guid;
        else {
            throw ("No Guid Assigned");
        }
    }

    public newGuid(): string {
        function S4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }

        this._guid = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
        return this._guid;
    }

    public parse(_guid: string): string {
        if (this.isGuid(_guid)) {
            this._guid = _guid
            return this._guid;
        } else {
            throw ("Guid invalid");
        }
    }

    public isGuid(_guid: string): boolean {
        let regex = /[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}/i;
        let match = regex.exec(_guid);
        return match != null;
    }

    get guid(): string {
        return this._guid;
    }
}