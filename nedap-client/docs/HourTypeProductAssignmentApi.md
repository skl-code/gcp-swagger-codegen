# NedapOnsApi.HourTypeProductAssignmentApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hourTypeProductAssignmentAPIAll**](HourTypeProductAssignmentApi.md#hourTypeProductAssignmentAPIAll) | **GET** /v0/administration/hour_type_product_assignments | Returns every HourTypeProductAssignment available
[**hourTypeProductAssignmentAPIByHourTypeId**](HourTypeProductAssignmentApi.md#hourTypeProductAssignmentAPIByHourTypeId) | **GET** /v0/administration/hour_types/{id}/product_assignments | Returns the HourTypeProductAssignments assigned to the HourType with the provided id
[**hourTypeProductAssignmentAPIById**](HourTypeProductAssignmentApi.md#hourTypeProductAssignmentAPIById) | **GET** /v0/administration/hour_type_product_assignments/{id} | Returns the HourTypeProductAssignment with the provided id

<a name="hourTypeProductAssignmentAPIAll"></a>
# **hourTypeProductAssignmentAPIAll**
> ListHourTypeProductAssignmentList hourTypeProductAssignmentAPIAll()

Returns every HourTypeProductAssignment available

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.HourTypeProductAssignmentApi();
apiInstance.hourTypeProductAssignmentAPIAll((error, data, response) => {
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

[**ListHourTypeProductAssignmentList**](ListHourTypeProductAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="hourTypeProductAssignmentAPIByHourTypeId"></a>
# **hourTypeProductAssignmentAPIByHourTypeId**
> ListHourTypeProductAssignmentList hourTypeProductAssignmentAPIByHourTypeId(id)

Returns the HourTypeProductAssignments assigned to the HourType with the provided id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.HourTypeProductAssignmentApi();
let id = 789; // Number | used for selecting HourType for which to get the assignments

apiInstance.hourTypeProductAssignmentAPIByHourTypeId(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting HourType for which to get the assignments | 

### Return type

[**ListHourTypeProductAssignmentList**](ListHourTypeProductAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="hourTypeProductAssignmentAPIById"></a>
# **hourTypeProductAssignmentAPIById**
> HourTypeProductAssignment hourTypeProductAssignmentAPIById(id)

Returns the HourTypeProductAssignment with the provided id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.HourTypeProductAssignmentApi();
let id = 789; // Number | used for selecting HourTypeProductAssignment

apiInstance.hourTypeProductAssignmentAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting HourTypeProductAssignment | 

### Return type

[**HourTypeProductAssignment**](HourTypeProductAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

