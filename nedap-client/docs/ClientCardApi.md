# NedapOnsApi.ClientCardApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientCardAPIByClientId**](ClientCardApi.md#clientCardAPIByClientId) | **GET** /v0/administration/clients/{client_id}/clipped_cards | Return the client cards of a Client corresponding to the given id.

<a name="clientCardAPIByClientId"></a>
# **clientCardAPIByClientId**
> ListClientCardList clientCardAPIByClientId(clientId, validFrom, validTo)

Return the client cards of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientCardApi();
let clientId = 789; // Number | id
let validFrom = new Date("2013-10-20"); // Date | 
let validTo = new Date("2013-10-20"); // Date | 

apiInstance.clientCardAPIByClientId(clientId, validFrom, validTo, (error, data, response) => {
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
 **validFrom** | **Date**|  | 
 **validTo** | **Date**|  | 

### Return type

[**ListClientCardList**](ListClientCardList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

