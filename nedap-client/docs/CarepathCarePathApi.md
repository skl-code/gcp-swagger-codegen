# NedapOnsApi.CarepathCarePathApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**carepathCarePathAPIById**](CarepathCarePathApi.md#carepathCarePathAPIById) | **GET** /v0/zorgpaden/carepath/{uuid} | Fetch a care path
[**carepathCarePathAPIGetActiveByClientId**](CarepathCarePathApi.md#carepathCarePathAPIGetActiveByClientId) | **GET** /v0/zorgpaden/carepath/active/{client_id} | Return the active care path for a client.

<a name="carepathCarePathAPIById"></a>
# **carepathCarePathAPIById**
> CarepathCarePath carepathCarePathAPIById(uuid)

Fetch a care path

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CarepathCarePathApi();
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | used for selecting CarePath

apiInstance.carepathCarePathAPIById(uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)| used for selecting CarePath | 

### Return type

[**CarepathCarePath**](CarepathCarePath.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="carepathCarePathAPIGetActiveByClientId"></a>
# **carepathCarePathAPIGetActiveByClientId**
> CarepathCarePath carepathCarePathAPIGetActiveByClientId(clientId)

Return the active care path for a client.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CarepathCarePathApi();
let clientId = 789; // Number | The client ID

apiInstance.carepathCarePathAPIGetActiveByClientId(clientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| The client ID | 

### Return type

[**CarepathCarePath**](CarepathCarePath.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

