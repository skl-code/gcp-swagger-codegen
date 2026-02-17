# NedapOnsApi.TransportClientTransportApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transportClientTransportAPIByClientIdAtDate**](TransportClientTransportApi.md#transportClientTransportAPIByClientIdAtDate) | **GET** /v0/administration/transport/client_transport/by_client/{client_id} | Find the ClientTransport information for a given client on the given date

<a name="transportClientTransportAPIByClientIdAtDate"></a>
# **transportClientTransportAPIByClientIdAtDate**
> TransportClientTransport transportClientTransportAPIByClientIdAtDate(clientId, _date)

Find the ClientTransport information for a given client on the given date

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TransportClientTransportApi();
let clientId = 789; // Number | id of client for which the ClientTransport should be retrieved
let _date = new Date("2013-10-20"); // Date | date for which the ClientTransport should be retrieved

apiInstance.transportClientTransportAPIByClientIdAtDate(clientId, _date, (error, data, response) => {
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
 **clientId** | **Number**| id of client for which the ClientTransport should be retrieved | 
 **_date** | **Date**| date for which the ClientTransport should be retrieved | 

### Return type

[**TransportClientTransport**](TransportClientTransport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

