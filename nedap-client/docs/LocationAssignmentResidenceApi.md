# NedapOnsApi.LocationAssignmentResidenceApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**locationAssignmentResidenceAPIByCareOrder**](LocationAssignmentResidenceApi.md#locationAssignmentResidenceAPIByCareOrder) | **GET** /v0/administration/location_assignment_residences/by_careorder/{care_order_object_id} | Find a list of locationAssignmentResidences based on the careorderobjectid
[**locationAssignmentResidenceAPIById**](LocationAssignmentResidenceApi.md#locationAssignmentResidenceAPIById) | **GET** /v0/administration/location_assignment_residences/{id} | Return the Location Assignment Residence corresponding to the given id
[**locationAssignmentResidenceAPICreate**](LocationAssignmentResidenceApi.md#locationAssignmentResidenceAPICreate) | **POST** /v0/administration/location_assignment_residences | Create LocationAssignmentResidence
[**locationAssignmentResidenceAPIUpdate**](LocationAssignmentResidenceApi.md#locationAssignmentResidenceAPIUpdate) | **PUT** /v0/administration/location_assignment_residences/{id} | Updates the given LocationAssignmentResidence

<a name="locationAssignmentResidenceAPIByCareOrder"></a>
# **locationAssignmentResidenceAPIByCareOrder**
> ListLocationAssignmentResidenceList locationAssignmentResidenceAPIByCareOrder(careOrderObjectId)

Find a list of locationAssignmentResidences based on the careorderobjectid

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationAssignmentResidenceApi();
let careOrderObjectId = 789; // Number | Techincal identifcation of a careorder

apiInstance.locationAssignmentResidenceAPIByCareOrder(careOrderObjectId, (error, data, response) => {
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
 **careOrderObjectId** | **Number**| Techincal identifcation of a careorder | 

### Return type

[**ListLocationAssignmentResidenceList**](ListLocationAssignmentResidenceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="locationAssignmentResidenceAPIById"></a>
# **locationAssignmentResidenceAPIById**
> LocationAssignmentResidence locationAssignmentResidenceAPIById(id)

Return the Location Assignment Residence corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationAssignmentResidenceApi();
let id = 789; // Number | used for selecting LocationAssignmentResidence

apiInstance.locationAssignmentResidenceAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting LocationAssignmentResidence | 

### Return type

[**LocationAssignmentResidence**](LocationAssignmentResidence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="locationAssignmentResidenceAPICreate"></a>
# **locationAssignmentResidenceAPICreate**
> LocationAssignmentResidence locationAssignmentResidenceAPICreate(body)

Create LocationAssignmentResidence

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationAssignmentResidenceApi();
let body = new NedapOnsApi.LocationAssignmentResidence(); // LocationAssignmentResidence | LocationAssignmentResidence to create

apiInstance.locationAssignmentResidenceAPICreate(body, (error, data, response) => {
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
 **body** | [**LocationAssignmentResidence**](LocationAssignmentResidence.md)| LocationAssignmentResidence to create | 

### Return type

[**LocationAssignmentResidence**](LocationAssignmentResidence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="locationAssignmentResidenceAPIUpdate"></a>
# **locationAssignmentResidenceAPIUpdate**
> LocationAssignmentResidence locationAssignmentResidenceAPIUpdate(body, id)

Updates the given LocationAssignmentResidence

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationAssignmentResidenceApi();
let body = new NedapOnsApi.LocationAssignmentResidence(); // LocationAssignmentResidence | LocationAssignmentResidence to update
let id = 789; // Number | used for selecting LocationAssignmentResidence

apiInstance.locationAssignmentResidenceAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**LocationAssignmentResidence**](LocationAssignmentResidence.md)| LocationAssignmentResidence to update | 
 **id** | **Number**| used for selecting LocationAssignmentResidence | 

### Return type

[**LocationAssignmentResidence**](LocationAssignmentResidence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

