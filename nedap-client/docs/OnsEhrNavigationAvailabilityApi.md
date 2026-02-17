# NedapOnsApi.OnsEhrNavigationAvailabilityApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**onsEhrNavigationAvailabilityAPIByClient**](OnsEhrNavigationAvailabilityApi.md#onsEhrNavigationAvailabilityAPIByClient) | **GET** /v0/openehr_dossier/back_channel/unauthorized/clients/{client_id}/navigation_availabilities | Get available navigation keys for the given client

<a name="onsEhrNavigationAvailabilityAPIByClient"></a>
# **onsEhrNavigationAvailabilityAPIByClient**
> OnsEhrListNavigationAvailabilityList onsEhrNavigationAvailabilityAPIByClient(clientId)

Get available navigation keys for the given client

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsEhrNavigationAvailabilityApi();
let clientId = 789; // Number | The ID of the client

apiInstance.onsEhrNavigationAvailabilityAPIByClient(clientId, (error, data, response) => {
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
 **clientId** | **Number**| The ID of the client | 

### Return type

[**OnsEhrListNavigationAvailabilityList**](OnsEhrListNavigationAvailabilityList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

