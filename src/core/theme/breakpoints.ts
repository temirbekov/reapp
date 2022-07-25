/* eslint-disable prefer-destructuring */

export type Device = typeof deviceList[number];

export const deviceList = [
    'mobile',
    'mobileM',
    'mobileXM',
    'mobileL',
    'tablet',
    'tabletL',
    'laptopS',
    'laptop',
    'desktop',
    'desktopL',
] as const;

type BreakpointsProp = Array<string> & { [key in Device]: string };

const breakpoints = [
    '320px',
    '360px',
    '420px',
    '568px',
    '768px',
    '1024px',
    '1140px',
    '1366px',
    '1680px',
    '1920px',
] as BreakpointsProp;

breakpoints.mobile = breakpoints[0];
breakpoints.mobileM = breakpoints[1];
breakpoints.mobileXM = breakpoints[2];
breakpoints.mobileL = breakpoints[3];
breakpoints.tablet = breakpoints[4];
breakpoints.tabletL = breakpoints[5];
breakpoints.laptopS = breakpoints[6];
breakpoints.laptop = breakpoints[7];
breakpoints.desktop = breakpoints[8];
breakpoints.desktopL = breakpoints[9];

export default breakpoints;
