declare module "btch-downloader" {
   export function igdl(url: string): Promise<any>;
   export function ttdl(url: string): Promise<any>;
   export function fbdown(url: string): Promise<any>;
   export function twitter(url: string): Promise<any>;
   export function youtube(url: string): Promise<any>;
}
