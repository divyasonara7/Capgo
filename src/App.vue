<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { CapacitorUpdater } from '@capgo/capacitor-updater';
import { SplashScreen } from '@capacitor/splash-screen';
import { App } from '@capacitor/app';
CapacitorUpdater.notifyAppReady();

let version;
App.addListener('appStateChange', async (state) => {
  if (state.isActive) {
    // Ensure download occurs while the app is active, or download may fail
    version = await CapacitorUpdater.download({
      url: 'https://github.com/divyasonara/Capgo/releases/download/1.0.3/dist.zip',
    })
  }

  if (!state.isActive && version) {
    // Activate the update when the application is sent to background
    SplashScreen.show()
    try {
      await CapacitorUpdater.set(version);
      // At this point, the new version should be active, and will need to hide the splash screen
    } catch (e) {
      SplashScreen.hide() // Hide the splash screen again if something went wrong
    }
  }
})
export default defineComponent({
  name: 'App'
})
</script>
