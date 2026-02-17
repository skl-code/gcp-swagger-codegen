# NedapOnsApi.GroupcareOccurrenceApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groupcareOccurrenceAPIByClientId**](GroupcareOccurrenceApi.md#groupcareOccurrenceAPIByClientId) | **GET** /v0/groupcare/clients/{client_id}/occurrences | Return the groupcare agenda occurrences of a Client corresponding to the given id.

<a name="groupcareOccurrenceAPIByClientId"></a>
# **groupcareOccurrenceAPIByClientId**
> GroupcareListOccurrenceList groupcareOccurrenceAPIByClientId(clientId, startDate, endDate)

Return the groupcare agenda occurrences of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.GroupcareOccurrenceApi();
let clientId = 789; // Number | id
let startDate = new Date("2013-10-20"); // Date | 
let endDate = new Date("2013-10-20"); // Date | 

apiInstance.groupcareOccurrenceAPIByClientId(clientId, startDate, endDate, (error, data, response) => {
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
 **startDate** | **Date**|  | 
 **endDate** | **Date**|  | 

### Return type

[**GroupcareListOccurrenceList**](GroupcareListOccurrenceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

