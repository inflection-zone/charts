import child_process from 'child_process';
import * as fs from 'fs';
import * as mime from 'mime-types';
import * as os from 'os';
import path from 'path';
import { DateStringFormat } from '../domain.types/time.types';
import { Gender, OSType } from '../domain.types/system.types';
import { InputValidationError } from './input.validation.error';
import { Logger } from './logger';
import { TimeHelper } from './time.helper';

////////////////////////////////////////////////////////////////////////


export class Helper {


    static writeTextToFile = async (text: string, filename: string) => {
        try {
            var dateFolder = TimeHelper.getDateString(new Date(), DateStringFormat.YYYY_MM_DD);
            var fileFolder = path.join(process.env.UPLOAD_TEMPORARY_FOLDER, dateFolder);
            if (!fs.existsSync(fileFolder)) {
                await fs.promises.mkdir(fileFolder, { recursive: true });
            }
            const filePath = path.join(fileFolder, filename);
            fs.writeFileSync(filePath, text);
        }
        catch (error) {
            Logger.instance().log(error.message);
        }
    };

    static hasProperty = (obj, prop) => {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    };

    static getOSType = () => {
        var type = os.type();
        switch (type) {
            case 'Darwin':
                return OSType.MacOS;
            case 'Linux':
                return OSType.Linux;
            case 'Windows_NT':
                return OSType.Windows;
            default:
                return OSType.Linux;
        }
    }

    static isUrl = (str) => {
        if (!str) {
            return false;
        }
        try {
            new URL(str);
            return true;
        } catch (err) {
            return false;
        }
    };

    static dumpJson(obj, filename) {
        const txt = JSON.stringify(obj, null, '    ');
        fs.writeFileSync(filename, txt);
    }

    static jsonToObj = (jsonPath) => {
        if (!fs.existsSync(jsonPath)) {
            return null;
        }

        const rawdata = fs.readFileSync(jsonPath, {
            encoding : 'utf8',
            flag     : 'r',
        });

        const obj = JSON.parse(rawdata);
        return obj;
    };

    static executeCommand = (command: string): Promise<string> => {
        return new Promise(function (resolve, reject) {
            child_process.exec(command, function (error: Error, standardOutput: string, standardError: string) {
                if (error) {
                    reject();
                    return;
                }
                if (standardError) {
                    reject(standardError);
                    return;
                }
                resolve(standardOutput);
            });
        });
    };

    static handleValidationError = (result) => {
        let index = 1;
        const errorMessages = [];
        for (const er of result.errors) {
            errorMessages.push(` ${index}. ${er.msg} - <${er.value}> for <${er.param}> in ${er.location}`);
            index++;
        }
        throw new InputValidationError(errorMessages);
    };

    static formatDate = (date) => {
        const d = new Date(date);
        const month = ('00' + (d.getMonth() + 1).toString()).slice(-2);
        const day = ('00' + d.getDate().toString()).slice(-2);
        const year = d.getFullYear();
        return [year, month, day].join('-');
    };

    static isAlpha = (c) => {
        const alphas = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return alphas.indexOf(c) !== -1;
    };

    static isAlphaVowel = (c) => {
        const alphas = 'aeiouAEIOU';
        return alphas.indexOf(c) !== -1;
    };

    static isDigit = (c) => {
        const digits = '0123456789';
        return digits.indexOf(c) !== -1;
    };

    static isAlphaNum = (c) => {
        return Helper.isAlpha(c) || Helper.isDigit(c);
    };

    static hasAlpha = (str: string) => {
        for (const c of str) {
            if (Helper.isAlpha(c)) {
                return true;
            }
        }
        return false;
    };

    static getDigitsOnly = (str: string): string => {
        let temp = '';
        if (!str) {
            return temp;
        }
        for (let x = 0; x < str.length; x++) {
            const c = str.charAt(x);
            if (Helper.isDigit(c)) {
                temp += c;
            }
        }
        return temp;
    };

    static checkStr(val: any) {
        if (typeof val === null || typeof val === undefined || typeof val !== 'string') {
            return null;
        }
        return val;
    }

    static isStr(val: any): boolean {
        if (typeof val === null || typeof val === undefined || typeof val !== 'string') {
            return false;
        }
        return true;
    }

    static checkNum(val: any): number {
        if (val === null || typeof val === 'undefined' || typeof val !== 'number') {
            return null;
        }
        return val;
    }

    static isNum(val: any): boolean {
        if (val === null || typeof val === 'undefined' || typeof val !== 'number') {
            return false;
        }
        return true;
    }

    public static sleep = (miliseconds) => {
        return new Promise((resolve) => {
            setTimeout(resolve, miliseconds);
        });
    };

    public static isEmptyObject = (obj) => {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    };

    public static encodeToBase64 = (str: string) => {
        const buffer = Buffer.from(str, 'utf-8');
        return buffer.toString('base64');
    };

    public static decodeFromBase64 = (str: string) => {
        const buffer = Buffer.from(str, 'base64');
        return buffer.toString('utf-8');
    };

    public static padInteger = (num: number, places: number, paddingCharacter: string) => {
        return String(num).padStart(places, paddingCharacter);
    };

    public static getFileExtension = (filename: string) => {
        var ext = /^.+\.([^.]+)$/.exec(filename);
        return ext == null ? '' : ext[1];
    };

    public static getFilenameFromFilePath = (filepath: string) => {
        return path.basename(filepath);
    };

    public static generateDisplayId = (prefix = null) => {
        var tmp = (Math.floor(Math.random() * 9000000000) + 1000000000).toString();
        var displayId = tmp.slice(0, 4) + '-' + tmp.slice(4, 8);
        var identifier = displayId;
        if (prefix != null) {
            identifier = prefix + '-' + identifier;
        }
        return identifier;
    };

    public static convertCamelCaseToPascalCase = (str: string): string => {
        if (str.length > 0) {
            return str.charAt(0).toUpperCase() + str.substring(1);
        }
        return str;
    };

    public static strToFilename = (str: string, extension: string, delimiter: string, limitTo = 32): string => {
        var tmp = str.replace(' ', delimiter);
        tmp = tmp.substring(0, limitTo);
        var ext = extension.startsWith('.') ? extension : '.' + extension;
        return tmp + ext;
    };

    public static getMimeType = (pathOrExtension: string) => {
        var mimeType = mime.lookup(pathOrExtension);
        if (!mimeType) {
            mimeType = 'text/plain';
        }
        return mimeType;
    };

    public static getValueForEitherKeys = (obj: any, keys: string[]): string => {
        const existingKeys = Object.keys(obj);
        for (var key of keys) {
            var found = existingKeys.includes(key);
            if (found) {
                return obj[key];
            }
        }
        return null;
    };

}
