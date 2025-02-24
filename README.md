# ReactPracticalDemo
Here's your **README.md** file with all the details in one structured document. You can copy and save this in your project's root folder.  

---

### **📘 README.md**  

```md
# 🛍️ React Native Product Details App

This is a **React Native CLI** app that displays product details with **cached images**, smooth animations, and a fully functional review section.

---

## 📌 Features
- 📸 **Image caching** using `react-native-fast-image`
- ⏳ **Loader** while images are loading
- 🔄 **Smooth fade-in animation** for images
- ⭐ **Customer reviews** section with `react-native-ratings`
- 🔙 **Custom back button**
- 📜 **Full-screen scroll with all data**

---

## 🚀 Setup & Installation

### **1️⃣ Prerequisites**
Before running the project, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

### **2️⃣ Clone the Repository**
```sh
git clone https://github.com/Harsh171095/ReactPracticalDemo.git
cd ReactPracticalDemo
```

### **3️⃣ Install Dependencies**
Run the following command:
```sh
npm install
```

---

## 📱 Running the App

### **🔹 Android**
1. Start the Metro Bundler:
   ```sh
   npx react-native start
   ```
2. Run the Android app:
   ```sh
   npx react-native run-android
   ```

### **🔹 iOS**
1. Install CocoaPods (only needed once):
   ```sh
   cd ios && pod install && cd ..
   ```
2. Start the Metro Bundler:
   ```sh
   npx react-native start
   ```
3. Run the iOS app:
   ```sh
   npx react-native run-ios
   ```

---

## 🔧 Dependencies
This project uses the following libraries:

| Package | Purpose |
|---------|---------|
| `react-navigation` | Handles screen navigation |
| `react-native-fast-image` | Efficient image caching |
| `react-native-ratings` | Display star ratings |
| `react-native-vector-icons` | Icons for UI |
| `react-native-gesture-handler` | Gesture handling |

### **📦 Install Dependencies**
If any dependency is missing, install them manually:
```sh
npm install react-native-fast-image react-native-ratings react-navigation react-native-vector-icons react-native-gesture-handler
```

---

## 🖼️ Image Caching & Manual Clearing
This app uses `react-native-fast-image` for efficient image caching.

### **Automatic Caching**
Images are automatically cached for faster loading.

### **Manually Clear Cache**
If needed, you can manually clear the cache using:
```js
import FastImage from 'react-native-fast-image';

FastImage.clearDiskCache();  // Clears disk storage
FastImage.clearMemoryCache();  // Clears memory cache
```

---

## 🧹 Clearing Cache & Rebuilding

### **Clear Metro Bundler Cache**
If you face any issues, try clearing the Metro cache:
```sh
npx react-native start --reset-cache
```

### **Clear Gradle Cache (Android)**
```sh
cd android && ./gradlew clean && cd ..
```

### **Reinstall Pods (iOS)**
```sh
cd ios && pod install --repo-update && cd ..
```

---

## ❗ Troubleshooting

### **🔸 Android Build Fails**
Try the following:
```sh
cd android && ./gradlew clean && cd ..
```

### **🔸 iOS Build Fails**
Try reinstalling pods:
```sh
cd ios && pod install && cd ..
```

---

## 📜 License
This project is open-source and available under the **MIT License**.

---

## 📞 Need Help?
If you have any issues, feel free to ask! 😊
```

---

### **📌 How to Use This README**
1. Copy the content above.
2. Save it as `README.md` in your project's root folder.
3. Now it's easy to set up and run your project on **Android & iOS**! 🚀

Let me know if you need any modifications! 😊
