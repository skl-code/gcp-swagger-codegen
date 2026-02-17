# NedapOnsApi.NutsConsentApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nutsConsentAPIByClientId**](NutsConsentApi.md#nutsConsentAPIByClientId) | **GET** /v0/administration/clients/{client_id}/consents | Return the list of consent of a client corresponding to the given client id.
[**nutsConsentAPIById**](NutsConsentApi.md#nutsConsentAPIById) | **GET** /v0/administration/consents/{id} | Return the Consent corresponding to the given id

<a name="nutsConsentAPIByClientId"></a>
# **nutsConsentAPIByClientId**
> NutsListConsentList nutsConsentAPIByClientId(clientId)

Return the list of consent of a client corresponding to the given client id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.NutsConsentApi();
let clientId = 789; // Number | id

apiInstance.nutsConsentAPIByClientId(clientId, (error, data, response) => {
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

[**NutsListConsentList**](NutsListConsentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nutsConsentAPIById"></a>
# **nutsConsentAPIById**
> NutsConsent nutsConsentAPIById(id)

Return the Consent corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.NutsConsentApi();
let id = 789; // Number | used for selecting Consent

apiInstance.nutsConsentAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting Consent | 

### Return type

[**NutsConsent**](NutsConsent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

