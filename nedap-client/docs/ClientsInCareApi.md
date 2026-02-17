# NedapOnsApi.ClientsInCareApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientsInCareAPIAllInPeriod**](ClientsInCareApi.md#clientsInCareAPIAllInPeriod) | **GET** /v0/administration/clients_in_care | Return the clients in and out of care in a certain period
[**clientsInCareAPIAllInPeriodOldMethod**](ClientsInCareApi.md#clientsInCareAPIAllInPeriodOldMethod) | **GET** /v0/administration/clients_in_care/old_method | The old way of invoicing.

<a name="clientsInCareAPIAllInPeriod"></a>
# **clientsInCareAPIAllInPeriod**
> ClientsInCare clientsInCareAPIAllInPeriod(opts)

Return the clients in and out of care in a certain period

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientsInCareApi();
let opts = { 
  'validFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'validTo': new Date("2013-10-20T19:20:30+01:00") // Date | 
};
apiInstance.clientsInCareAPIAllInPeriod(opts, (error, data, response) => {
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
 **validFrom** | **Date**|  | [optional] 
 **validTo** | **Date**|  | [optional] 

### Return type

[**ClientsInCare**](ClientsInCare.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientsInCareAPIAllInPeriodOldMethod"></a>
# **clientsInCareAPIAllInPeriodOldMethod**
> ClientsInCare clientsInCareAPIAllInPeriodOldMethod(opts)

The old way of invoicing.

Has a less specific way of determining active clients Return the clients in and out of care in a certain period

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientsInCareApi();
let opts = { 
  'validFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'validTo': new Date("2013-10-20T19:20:30+01:00") // Date | 
};
apiInstance.clientsInCareAPIAllInPeriodOldMethod(opts, (error, data, response) => {
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
 **validFrom** | **Date**|  | [optional] 
 **validTo** | **Date**|  | [optional] 

### Return type

[**ClientsInCare**](ClientsInCare.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

