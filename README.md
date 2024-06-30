# "Are you human?" Script Usage Guide

This guide explains how to use the "Are you human?" CAPTCHA script on your website and the parameters the script can take.

## Usage

To include the script on your website, follow these steps:

1. **Include the Script in Your Page**
   Add the script between the `head` or `body` tags of your web page:

   ```html
   <script src="https://yourcdn.com/areyouhuman.js?lang=en&autoOpen=true&delay=5000&openOnce=true"></script>
   ```

2. **Trigger the Script Programmatically**
   To trigger the script manually, use the following JavaScript code:
   ```html
   <script>
     window.areyouhuman(() => {
       console.log("CAPTCHA completed");
     });
   </script>
   ```

## Parameters

The script can take various parameters via the URL. These parameters are explained below:

- **lang**: Sets the language of the script. Supported languages: `en` (English), `tr` (Turkish). Default: `en`.

  - Example: `lang=tr`

- **autoOpen**: Determines whether the script should open automatically. Values: `true` or `false`. Default: `false`.

  - Example: `autoOpen=true`

- **delay**: If `autoOpen` is `true`, this sets the delay in milliseconds before the script opens. Value: positive integer. Default: `5000` (5 seconds).

  - Example: `delay=3000` (3 seconds)

- **openOnce**: Ensures the script opens only once and does not open again. This is achieved using a cookie. Values: `true` or `false`. Default: `false`.
  - Example: `openOnce=true`

## Examples

1. **In Turkish, Open Automatically After 3 Seconds**

   ```html
   <script src="https://yourcdn.com/areyouhuman.js?lang=tr&autoOpen=true&delay=3000"></script>
   ```

2. **In English, Manual Trigger, Open Only Once**
   ```html
   <script src="https://yourcdn.com/areyouhuman.js?lang=en&openOnce=true"></script>
   <script>
     window.areyouhuman(() => {
       console.log("CAPTCHA completed");
     });
   </script>
   ```

This guide provides the necessary information to easily use the "Are you human?" script on your website. If you have any additional questions or issues, please contact our support team.
