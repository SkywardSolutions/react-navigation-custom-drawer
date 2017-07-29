import { NavigationActions } from 'react-navigation';

export function navigate(route, params) {
  return (dispatch) => {
    dispatch(NavigationActions.navigate({ routeName: route, params }));
  };
}
