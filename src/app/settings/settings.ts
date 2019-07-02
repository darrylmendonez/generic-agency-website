
export interface MenuLinks {
  isTargetScroll: boolean;
  targetId?: string;
  url?: string;
  label: string;
};
export interface Settings {
  disabledPageSections?: Array<string>;
  parallax: boolean;
  menu: MenuLinks[];
}

export const AppSettings = {

};
