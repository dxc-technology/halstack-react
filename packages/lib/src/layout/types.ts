export type AppLayoutMainPropsType = {
  /**
   * Everything between the tags will be displayed as the content of the main part of the application.
   */
  children: React.ReactNode;
};

export type AppLayoutSidenavPropsType = {
  /**
   * The area inside the sidenav. This area can be used to render the content inside the sidenav.
   */
  children: React.ReactNode;
  /**
   * The area assigned to render the sidenav title. It is highly recommended to use the sidenav title.
   */
  title?: React.ReactNode;
};

type ApplicationLayoutPropsType = {
  /**
   * Text to be placed next to the hamburger button that toggles the
   * visibility of the sidenav.
   */
  visibilityToggleLabel?: string;
  /**
   * Header content.
   */
  header?: React.ReactNode;
  /**
   * Sidenav content
   */
  sidenav?: React.ReactNode;
  /**
   * Footer content
   */
  footer?: React.ReactNode;
  /**
   * Use the DxcApplicationLayout.Main provided to render main content.
   */
  children: React.ReactElement<AppLayoutMainPropsType>;
};

export default ApplicationLayoutPropsType;
