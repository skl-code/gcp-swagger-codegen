# NedapOnsApi.MedicationDoubleCheckApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**medicationDoubleCheckAPIById**](MedicationDoubleCheckApi.md#medicationDoubleCheckAPIById) | **GET** /v0/medicatie_legacy/double_checks/{uuid} | 

<a name="medicationDoubleCheckAPIById"></a>
# **medicationDoubleCheckAPIById**
> MedicationDoubleCheck medicationDoubleCheckAPIById(uuid)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MedicationDoubleCheckApi();
let uuid = "uuid_example"; // String | used for selecting DoubleCheck

apiInstance.medicationDoubleCheckAPIById(uuid, (error, data, response) => {
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
 **uuid** | **String**| used for selecting DoubleCheck | 

### Return type

[**MedicationDoubleCheck**](MedicationDoubleCheck.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

