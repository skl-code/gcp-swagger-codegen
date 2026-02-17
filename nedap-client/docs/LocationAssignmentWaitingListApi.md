# NedapOnsApi.LocationAssignmentWaitingListApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**locationAssignmentWaitingListAPIByClientId**](LocationAssignmentWaitingListApi.md#locationAssignmentWaitingListAPIByClientId) | **GET** /v0/administration/clients/{client_id}/waiting_list_locations | Return the waiting list location assignments of a Client corresponding to the given id.
[**locationAssignmentWaitingListAPIById**](LocationAssignmentWaitingListApi.md#locationAssignmentWaitingListAPIById) | **GET** /v0/administration/location_assignment_waiting_lists/{id} | 
[**locationAssignmentWaitingListAPICreate**](LocationAssignmentWaitingListApi.md#locationAssignmentWaitingListAPICreate) | **POST** /v0/administration/location_assignment_waiting_lists | Create LocationAssignmentWaitingList
[**locationAssignmentWaitingListAPIUpdate**](LocationAssignmentWaitingListApi.md#locationAssignmentWaitingListAPIUpdate) | **PUT** /v0/administration/location_assignment_waiting_lists/{id} | Updates the given LocationAssignmentWaitingList

<a name="locationAssignmentWaitingListAPIByClientId"></a>
# **locationAssignmentWaitingListAPIByClientId**
> ListLocationAssignmentWaitingListList locationAssignmentWaitingListAPIByClientId(clientId, opts)

Return the waiting list location assignments of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationAssignmentWaitingListApi();
let clientId = 789; // Number | id
let opts = { 
  'validFrom': new Date("2013-10-20"), // Date | 
  'validTo': new Date("2013-10-20") // Date | 
};
apiInstance.locationAssignmentWaitingListAPIByClientId(clientId, opts, (error, data, response) => {
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
 **validFrom** | **Date**|  | [optional] 
 **validTo** | **Date**|  | [optional] 

### Return type

[**ListLocationAssignmentWaitingListList**](ListLocationAssignmentWaitingListList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="locationAssignmentWaitingListAPIById"></a>
# **locationAssignmentWaitingListAPIById**
> LocationAssignmentWaitingList locationAssignmentWaitingListAPIById(id)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationAssignmentWaitingListApi();
let id = 789; // Number | used for selecting LocationAssignmentWaitingList

apiInstance.locationAssignmentWaitingListAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting LocationAssignmentWaitingList | 

### Return type

[**LocationAssignmentWaitingList**](LocationAssignmentWaitingList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="locationAssignmentWaitingListAPICreate"></a>
# **locationAssignmentWaitingListAPICreate**
> LocationAssignmentWaitingList locationAssignmentWaitingListAPICreate(body)

Create LocationAssignmentWaitingList

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationAssignmentWaitingListApi();
let body = new NedapOnsApi.LocationAssignmentWaitingList(); // LocationAssignmentWaitingList | LocationAssignmentWaitingList to create

apiInstance.locationAssignmentWaitingListAPICreate(body, (error, data, response) => {
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
 **body** | [**LocationAssignmentWaitingList**](LocationAssignmentWaitingList.md)| LocationAssignmentWaitingList to create | 

### Return type

[**LocationAssignmentWaitingList**](LocationAssignmentWaitingList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="locationAssignmentWaitingListAPIUpdate"></a>
# **locationAssignmentWaitingListAPIUpdate**
> LocationAssignmentWaitingList locationAssignmentWaitingListAPIUpdate(body, id)

Updates the given LocationAssignmentWaitingList

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationAssignmentWaitingListApi();
let body = new NedapOnsApi.LocationAssignmentWaitingList(); // LocationAssignmentWaitingList | LocationAssignmentWaitingList to update
let id = 789; // Number | used for selecting LocationAssignmentWaitingList

apiInstance.locationAssignmentWaitingListAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**LocationAssignmentWaitingList**](LocationAssignmentWaitingList.md)| LocationAssignmentWaitingList to update | 
 **id** | **Number**| used for selecting LocationAssignmentWaitingList | 

### Return type

[**LocationAssignmentWaitingList**](LocationAssignmentWaitingList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

