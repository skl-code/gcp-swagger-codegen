# NedapOnsApi.TasqueCareTaskSeriesApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tasqueCareTaskSeriesAPICreate**](TasqueCareTaskSeriesApi.md#tasqueCareTaskSeriesAPICreate) | **POST** /v0/taken/care_task_series | Create CareTaskSeries

<a name="tasqueCareTaskSeriesAPICreate"></a>
# **tasqueCareTaskSeriesAPICreate**
> TasqueCareTaskSeries tasqueCareTaskSeriesAPICreate(body)

Create CareTaskSeries

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskSeriesApi();
let body = new NedapOnsApi.TasqueCareTaskSeries(); // TasqueCareTaskSeries | CareTaskSeries to create

apiInstance.tasqueCareTaskSeriesAPICreate(body, (error, data, response) => {
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
 **body** | [**TasqueCareTaskSeries**](TasqueCareTaskSeries.md)| CareTaskSeries to create | 

### Return type

[**TasqueCareTaskSeries**](TasqueCareTaskSeries.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

