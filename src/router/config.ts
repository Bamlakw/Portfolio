const HOME = '/';
const ABOUT = '/about';
const ERROR = '/error';
const CONTACT = '/contact';
const YUM = '/yum';
const WORK = '/work';
const RUSH = '/rush';
const LUNA = '/luna';
const NURA = '/nura';
const VELNOIR = '/velnoir';
const VELABEAUTY = '/velabeauty';
const PERFUME = '/perfume';

export const ROUTES = {
    home: { path: HOME, to: () => HOME },
    about: { path: ABOUT, to: () => ABOUT },
    contact: { path: CONTACT, to: () => CONTACT },
    yum: { path: YUM, to: () => YUM },
    work: { path: WORK, to: () => WORK },
    rush: { path: RUSH, to: () => RUSH },
    luna: { path: LUNA, to: () => LUNA },
    nura: { path: NURA, to: () => NURA },
    velnoir: { path: VELNOIR, to: () => VELNOIR },
    velabeauty: { path: VELABEAUTY, to: () => VELABEAUTY },
    perfume: { path: PERFUME, to: () => PERFUME },
    error: {
        path: ERROR,
        to: (title: string, message?: string) => `${ERROR}?title=${title}&message=${message}`,
    },
};

export type ROUTE_KEYS = keyof typeof ROUTES;
