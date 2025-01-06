
window.addEventListener("DOMContentLoaded", async event => {
  if ('BeforeInstallPromptEvent' in window) {
    console.log("支持BeforeInstallPromptEvent");
  } else {
    alert("不支持BeforeInstallPromptEvent");
  }

  //安装条件
  //Web 应用尚未安装
  //--------可以在谷歌浏览器中右上角设置-----（投放，保存和分享）---在pwa中打开---右上角中卸载
  //--------chrome://apps 也可卸载


  //用户至少需要点击或点按页面一次（随时，即使是在前一次页面加载期间）
  //用户需要在任何时间点查看该网页至少 30 秒
  //通过 HTTPS 提供
  //包含网络应用清单，其中包含：
  //short_name 或 name
  //icons - 必须包含 192 像素和 512 像素的图标
  //start_url
  //display - 必须是 fullscreen、standalone、minimal-ui 或 window-controls-overlay 中的一个
  //prefer_related_applications 不得存在，也不得为 false
  //由于其他原因（例如设备处于自助服务终端模式或没有权限），无法在当前设备上安装 PWA。

  document.querySelector("#install").addEventListener("click", installApp);  //注册事件

  // 弹窗方式
  //某些浏览器（包括 description、categories 和 screenshots）会使用清单中的宣传字段来提升安装提示体验。
  // 例如，使用 Android 版 Chrome 时，如果您的 PWA 为 description 和 screenshots 字段提供了值，
  // 则安装对话框体验会从较小的添加到主屏幕信息栏转换为更大且更详细的对话框，类似于应用商店中的安装提示。


 
});



let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  // Chrome for Android 会向用户显示一个迷你信息栏，
  // 但您可以通过对 beforeinstallprompt 事件调用 preventDefault() 来阻止此操作。
  // 如果您未调用 preventDefault()，系统会在用户首次访问您的网站并在 Android 设备上满足可安装性条件时显示横幅，然后大约 90 天后再次显示。
  e.preventDefault();
  deferredPrompt = e;
  // 最佳实践： 可以安装再把安装按钮显示出来
  document.querySelector("#install").style.display="block";  
  document.querySelector("#tips").style.display="none";  
  
});

//您可以使用 userChoice 属性来确定用户是否从您的界面中安装了您的应用。
// 不过，如果用户通过地址栏或其他浏览器组件安装您的 PWA，userChoice 将不起作用。
// 而是应监听 appinstalled 事件，该事件会在用户安装您的 PWA 时触发，无论使用哪种机制安装。

window.addEventListener('appinstalled', (e) => {
    console.log("appinstalled---安装成功");
});

async function installApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    // Find out whether the user confirmed the installation or not
    // const { outcome } = await deferredPrompt.userChoice;
    // The deferredPrompt can only be used once.
    deferredPrompt = null;  
    // Act on the user's choice
    // if (outcome === 'accepted') {
    //     console.log("pwa 安装成功");
    // } else if (outcome === 'dismissed') {
    //     console.log("pwa 安装失败");
    // }
    // We hide the install button
    document.querySelector("#install").style.display="none";

  }
}

