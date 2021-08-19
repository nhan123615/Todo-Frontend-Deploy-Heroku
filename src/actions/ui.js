import * as uiType from '../consts/ui';

export const showLoading = () => ({
  type: uiType.SHOW_LOADING,
});

export const hideLoading = () => ({
  type: uiType.HIDE_LOADING,
});

// side bar
export const showSidebar = () => ({
  type: uiType.SHOW_SIDEBAR,
});

export const hideSidebar = () => ({
  type: uiType.HIDE_SIDEBAR,
});
