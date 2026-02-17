# NedapOnsApi.HermesContactMethodApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hermesContactMethodAPIByClientId**](HermesContactMethodApi.md#hermesContactMethodAPIByClientId) | **GET** /v0/notification/clients/{client_id}/contact_method | Return the hermes contact method of a Client corresponding to the given id.
[**hermesContactMethodAPISetPrimaryType**](HermesContactMethodApi.md#hermesContactMethodAPISetPrimaryType) | **POST** /v0/notification/clients/{client_id}/contact_methods/set_primary_type | Set primary contact method for client by given contact method type and enable/disable notifications for it.

<a name="hermesContactMethodAPIByClientId"></a>
# **hermesContactMethodAPIByClientId**
> HermesContactMethod hermesContactMethodAPIByClientId(clientId)

Return the hermes contact method of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.HermesContactMethodApi();
let clientId = 789; // Number | id

apiInstance.hermesContactMethodAPIByClientId(clientId, (error, data, response) => {
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
 **clientId** | **Number**| id | 

### Return type

[**HermesContactMethod**](HermesContactMethod.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="hermesContactMethodAPISetPrimaryType"></a>
# **hermesContactMethodAPISetPrimaryType**
> HermesContactMethod hermesContactMethodAPISetPrimaryType(body, clientId)

Set primary contact method for client by given contact method type and enable/disable notifications for it.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.HermesContactMethodApi();
let body = new NedapOnsApi.HermesContactMethodConfig(); // HermesContactMethodConfig | object to set the client's notification settings.
let clientId = 789; // Number | client id.

apiInstance.hermesContactMethodAPISetPrimaryType(body, clientId, (error, data, response) => {
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
 **body** | [**HermesContactMethodConfig**](HermesContactMethodConfig.md)| object to set the client&#x27;s notification settings. | 
 **clientId** | **Number**| client id. | 

### Return type

[**HermesContactMethod**](HermesContactMethod.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

