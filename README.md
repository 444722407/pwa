webmanifest: https://web.dev/learn/pwa/web-app-manifest?continue=https%3A%2F%2Fweb.dev%2Flearn%2Fpwa&hl=zh-cn#article-https://web.dev/learn/pwa/web-app-manifest&hl=zh-cn

如果您未提供图标，或者图标的尺寸不符合建议的尺寸，

则在某些平台上，您的应用将无法通过安装条件。

在其他平台上，系统会自动生成图标，例如通过 PWA 的屏幕截图或使用通用图标。


如果webmanifest.icons.purpose = maskable 您未提供可遮罩的图标

则预期使用可遮罩图标的设备可能会缩小您的图标，并将其调整为所需的形状并采用白色背景。



如果您的 PWA 可安装，并且您至少为 description 和 screenshots 字段提供了值，则安装对话框体验会从简单的“添加到主屏幕”信息栏转变为类似于应用商店中的更丰富的安装对话框。

description 对 PWA 功能的说明。

screenshots 包含 src、type 和 sizes（类似于 icons 对象）的屏幕截图对象数组，用于展示 PWA。没有大小限制。
测试后：每张大小最好一样

screenshots 规范：https://web.dev/patterns/web-apps/richer-install-ui?hl=zh-cn





文档：https://web.dev/learn/pwa/installation-prompt?continue=https%3A%2F%2Fweb.dev%2Flearn%2Fpwa&hl=zh-cn#article-https://web.dev/learn/pwa/installation-prompt&hl=zh-cn


demo:https://glitch.com/~mlearn-pwa-web-app-install-prompt