import JSZip from 'jszip';
declare const load: (url: string) => Promise<JSZip>;
declare const parse: (zip: JSZip, filename: string) => Promise<string>;
export { load, parse };
