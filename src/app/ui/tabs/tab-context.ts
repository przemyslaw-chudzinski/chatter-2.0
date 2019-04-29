export interface TabContext {
  $implicit: {[key: string]: string}[];
  showTab: (label: {[key: string]: string}) => boolean | number;
}
