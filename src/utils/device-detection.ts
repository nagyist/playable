declare const window: {
  navigator: any,
  MSStream: any,
};

const getNavigator = () => window.navigator || /* ignore coverage */ {userAgent: undefined};

export const isIPhone = () => /iPhone/.test(getNavigator().userAgent) && !window.MSStream;

export const isIPod = () => /iPod/.test(getNavigator().userAgent) && !window.MSStream;

export const isIPad = () => /iPad/.test(getNavigator().userAgent) && !window.MSStream;

export const isAndroid = () => /(android)/i.test(getNavigator().userAgent);