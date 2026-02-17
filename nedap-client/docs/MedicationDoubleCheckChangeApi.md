# NedapOnsApi.MedicationDoubleCheckChangeApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**medicationDoubleCheckChangeAPICreate**](MedicationDoubleCheckChangeApi.md#medicationDoubleCheckChangeAPICreate) | **POST** /v0/medicatie_legacy/double_check_changes | Create DoubleCheckChange

<a name="medicationDoubleCheckChangeAPICreate"></a>
# **medicationDoubleCheckChangeAPICreate**
> MedicationDoubleCheckChange medicationDoubleCheckChangeAPICreate(body)

Create DoubleCheckChange

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MedicationDoubleCheckChangeApi();
let body = new NedapOnsApi.MedicationDoubleCheckChange(); // MedicationDoubleCheckChange | DoubleCheckChange to create

apiInstance.medicationDoubleCheckChangeAPICreate(body, (error, data, response) => {
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
 **body** | [**MedicationDoubleCheckChange**](MedicationDoubleCheckChange.md)| DoubleCheckChange to create | 

### Return type

[**MedicationDoubleCheckChange**](MedicationDoubleCheckChange.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

