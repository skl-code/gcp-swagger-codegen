# NedapOnsApi.CarenPersonApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**carenPersonAPIByExternalId**](CarenPersonApi.md#carenPersonAPIByExternalId) | **GET** /v0/caren/external_id/people/{client_id} | WARNING: DEPRECATED. There will be no exact replacement, possible use cases for this API can be satisfied with ons-client.Permits in OnsDB. 

<a name="carenPersonAPIByExternalId"></a>
# **carenPersonAPIByExternalId**
> CarenPerson carenPersonAPIByExternalId(clientId)

WARNING: DEPRECATED. There will be no exact replacement, possible use cases for this API can be satisfied with ons-client.Permits in OnsDB. 

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CarenPersonApi();
let clientId = "clientId_example"; // String | externalId

apiInstance.carenPersonAPIByExternalId(clientId, (error, data, response) => {
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
 **clientId** | **String**| externalId | 

### Return type

[**CarenPerson**](CarenPerson.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

