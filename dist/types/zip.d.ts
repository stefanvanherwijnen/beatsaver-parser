import JSZip from 'jszip';
export declare const load: (url: string) => Promise<JSZip>;
export declare const parse: (zip: JSZip, filename: string) => Promise<string>;
