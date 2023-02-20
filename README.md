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


### How to test Gnerated Application

step 1: above command run application into android studio. and application is ruuning.

go to android studio -> Build ->  Build Bundle(s)/APK(s) -> Build APK(s)

It will show:

image.png

 step 2: click on locate  it will  display app-debug.apk

image.png

step 3: download and install on your phone.

image.png


step 4: make change on code to test i.e. chnage title Hi to Hello!

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

image.png