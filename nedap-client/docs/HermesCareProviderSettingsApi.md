# NedapOnsApi.HermesCareProviderSettingsApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hermesCareProviderSettingsAPIGet**](HermesCareProviderSettingsApi.md#hermesCareProviderSettingsAPIGet) | **GET** /v0/notification/care_provider_settings | Retrieves the CareProviderSettings

<a name="hermesCareProviderSettingsAPIGet"></a>
# **hermesCareProviderSettingsAPIGet**
> HermesCareProviderSettings hermesCareProviderSettingsAPIGet()

Retrieves the CareProviderSettings

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.HermesCareProviderSettingsApi();
apiInstance.hermesCareProviderSettingsAPIGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**HermesCareProviderSettings**](HermesCareProviderSettings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

