import breakpoints from './breakpoints';

const mediaQueries = {
    mobile: `@media all and (min-width: ${breakpoints.mobile})`,
    mobileM: `@media all and (min-width: ${breakpoints.mobileM})`,
    mobileXM: `@media all and (min-width: ${breakpoints.mobileXM})`,
    mobileL: `@media all and (min-width: ${breakpoints.mobileL})`,
    tablet: `@media all and (min-width: ${breakpoints.tablet})`,
    tabletL: `@media all and (min-width: ${breakpoints.tabletL})`,
    laptopS: `@media all and (min-width: ${breakpoints.laptopS})`,
    laptop: `@media all and (min-width: ${breakpoints.laptop})`,
    desktop: `@media all and (min-width: ${breakpoints.desktop})`,
    desktopL: `@media all and (min-width: ${breakpoints.desktopL})`,
};

export default mediaQueries;
