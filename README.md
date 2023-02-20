# Capgo (Vue+quasar+capacitor+ capgo)

A Quasar Framework app

# Clone 
```bash
git clone git@github.com:divyasonara7/Capgo.git
cd Capgo
```

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
npm run dev
```


### Build the app for production
```bash
npm run build
```

### Start mobile app in development mode 
```bash
quasar dev -m capacitor -T android

quasar dev -m capacitor -T ios
```
Note: appropriate software must be installed on your system.


### Build mobile app for production
```bash
quasar build -m capacitor -T android

quasar build -m capacitor -T ios
```


### How to test Live updates of Installed app Using Manual way of Capgo

step 1: `quasar dev -m capacitor -T android` command run application into android studio. and application is ruuning.

go to android studio -> Build ->  Build Bundle(s)/APK(s) -> Build APK(s)

It will show:

![Screenshot from 2023-02-20 14-38-50](https://user-images.githubusercontent.com/116076511/220064612-81a8162e-ffce-4a3d-ae64-b200a5fca0d2.png)


 step 2: click on locate  it will  display app-debug.apk

![Screenshot from 2023-02-20 14-39-49](https://user-images.githubusercontent.com/116076511/220064654-f0845883-3153-46a5-8001-3f9ecbc2c10b.png)


step 3: download and install on your phone.

![Screenshot from 2023-02-20 14-44-20](https://user-images.githubusercontent.com/116076511/220064700-ec7e9295-62b3-4dc8-816e-fc358382d0f2.png)



step 4: make change on code to test i.e. change title Hi to Hello!

then genrate build again 

```bash
npm run build
```

```bash
quasar build -m capacitor -T android

quasar build -m capacitor -T ios
```

it will update dist folder at root of application. the update dist.zip file in your release tag.

yes! you can See Live chnages to your application.

![Screenshot from 2023-02-20 14-45-44](https://user-images.githubusercontent.com/116076511/220064819-8667400d-f3b8-4670-8e10-43ccc952f7b5.png)
