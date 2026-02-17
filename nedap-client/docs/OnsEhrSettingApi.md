# NedapOnsApi.OnsEhrSettingApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**onsEhrSettingAPIGetAllSettings**](OnsEhrSettingApi.md#onsEhrSettingAPIGetAllSettings) | **GET** /v0/openehr_dossier/back_channel/unauthorized/settings | Return all settings from OnsEhr

<a name="onsEhrSettingAPIGetAllSettings"></a>
# **onsEhrSettingAPIGetAllSettings**
> OnsEhrListSettingList onsEhrSettingAPIGetAllSettings()

Return all settings from OnsEhr

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsEhrSettingApi();
apiInstance.onsEhrSettingAPIGetAllSettings((error, data, response) => {
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

[**OnsEhrListSettingList**](OnsEhrListSettingList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

