# NedapOnsApi.TreatmentLocationApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**treatmentLocationAPIById**](TreatmentLocationApi.md#treatmentLocationAPIById) | **GET** /v0/administration/treatment_locations/{id} | Return the treatment location by id

<a name="treatmentLocationAPIById"></a>
# **treatmentLocationAPIById**
> TreatmentLocation treatmentLocationAPIById(id)

Return the treatment location by id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TreatmentLocationApi();
let id = 789; // Number | 

apiInstance.treatmentLocationAPIById(id, (error, data, response) => {
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
 **id** | **Number**|  | 

### Return type

[**TreatmentLocation**](TreatmentLocation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

