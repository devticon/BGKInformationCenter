# BGK Information Center

### Wykorzystane technologie

- [React](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [GunJS](https://gun.eco/)

### Konfiguracja środowiska deweloperskiego

Należy postępować zgodnie z instrukcjami zamieszczonymi na [stronie React Native](https://reactnative.dev/docs/environment-setup) wybierając "React Native CLI Quickstart", swój system operacyjny, a następnie docelową platformę mobilną.

### Uruchomienie aplikacji w trybie deweloperskim

1. Instalacja zależności poleceniem `npm install`.
3. Uruchomienie aplikacji poleceniem `npm run start:android` lub `npm run start:ios`.

Aby uruchomić aplikację na fizycznym urządzeniu (zamiast emulatora) należy postępować zgodnie z [tym poradnikiem](https://reactnative.dev/docs/running-on-device).

### Budowanie aplikacji do wersji produkcyjnej

#### Android

- `npm run build:android:apk` - budowanie aplikacji do pliku APK

- `npm run build:android:aab` - budowanie aplikacji do pliku [AAB](https://developer.android.com/guide/app-bundle)

Szczegółowe informacje znajdują się w [tym poradniku](https://reactnative.dev/docs/signed-apk-android).

#### iOS

Szczegółowe informacje znajdują się w [tym poradniku](https://reactnative.dev/docs/running-on-device).

### Testowanie aplikacji

- `npm run test` - uruchomienie testów jednostkowych z wykorzystaniem frameworka [Jest](https://jestjs.io/)

- `npm run lint` - uruchomienie testów statycznych z wykorzystaniem narzędzia [ESLint](https://eslint.org/)
