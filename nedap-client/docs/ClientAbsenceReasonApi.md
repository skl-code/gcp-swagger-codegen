# NedapOnsApi.ClientAbsenceReasonApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientAbsenceReasonAPIAll**](ClientAbsenceReasonApi.md#clientAbsenceReasonAPIAll) | **GET** /v0/administration/clientAbsenceReasons/all | Returns every ClientAbsenceReason available from the ClientAbsenceReasonAPI
[**clientAbsenceReasonAPIById**](ClientAbsenceReasonApi.md#clientAbsenceReasonAPIById) | **GET** /v0/administration/clientAbsenceReasons/{id} | Get the Client Absence Reason corresponding to the given id

<a name="clientAbsenceReasonAPIAll"></a>
# **clientAbsenceReasonAPIAll**
> ListClientAbsenceReasonList clientAbsenceReasonAPIAll()

Returns every ClientAbsenceReason available from the ClientAbsenceReasonAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientAbsenceReasonApi();
apiInstance.clientAbsenceReasonAPIAll((error, data, response) => {
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

[**ListClientAbsenceReasonList**](ListClientAbsenceReasonList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientAbsenceReasonAPIById"></a>
# **clientAbsenceReasonAPIById**
> ClientAbsenceReason clientAbsenceReasonAPIById(id)

Get the Client Absence Reason corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientAbsenceReasonApi();
let id = 789; // Number | used for selecting ClientAbsenceReason

apiInstance.clientAbsenceReasonAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting ClientAbsenceReason | 

### Return type

[**ClientAbsenceReason**](ClientAbsenceReason.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

