export enum ApiPath {
  SIGN_IN = 'auth/signin/',
  SIGN_UP = 'auth/signup/',
  REFRESH_TOKEN = 'auth/refresh-token/',
  CHANGE_PASSWORD = 'auth/change-password/',
  CURRENT_USER = 'users/me/',
  EMAIL_CONFIRMATION = 'auth/send-email-confirmation/',
  EMAIL_CONFIRMATION_WITH_AUTH = 'users/me/send-email-confirmation/',
  EMAIL_VERIFICATION = 'auth/email-verification/',
  PLAYLISTS = 'content/playlists/',
  PLAYLIST_ID = 'content/playlists/:id/',
  MOVIES = 'content/movies/',
  MOVIE = 'content/movies/:id/',
  SERIALS = 'content/serials/',
  SERIAL = 'content/serials/:id/',
  USER_LIBRARY = 'users/me/library/',
  GET_USER_LIBRARY = 'users/me/library/:type/',
  USER_LIBRARY_ITEM = 'users/me/library/:id/',
}
