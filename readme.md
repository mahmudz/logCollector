### Simple Log Collector jQuery Plugin Written By Me

The goal of this plugin to collect log when app is in production. All the log will be stored is this website
[Click Here](https://app-log-collector.herokuapp.com/logs)


```html
<script type="text/javascript" src="logCollector.min.js"></script>
```

```javascript
$(document).ready(function() {
    $.logCollector({
        debug: false, // Will output response in console
        data: {
            app_name: 'Your App Name' // String
            log_data: {
                // Your Log Data - Array
            }
        }
    });
});
```