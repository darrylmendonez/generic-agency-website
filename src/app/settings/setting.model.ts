
export interface BaseLink {
  label: string;
  url: string;
  newWindow?: boolean;
}
export interface MenuLink extends BaseLink {
  isTargetScroll: boolean;
  targetId?: string;
};

export interface Settings {
  disabledPageSections?: Array<string>;
  parallax: boolean;
  menu: MenuLink[];
  socialLinks: BaseLink[];
}
