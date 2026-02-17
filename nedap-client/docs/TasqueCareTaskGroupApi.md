# NedapOnsApi.TasqueCareTaskGroupApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tasqueCareTaskGroupAPIById**](TasqueCareTaskGroupApi.md#tasqueCareTaskGroupAPIById) | **GET** /v0/taken/care_task_groups/{id} | Gets task group
[**tasqueCareTaskGroupAPICreate**](TasqueCareTaskGroupApi.md#tasqueCareTaskGroupAPICreate) | **POST** /v0/taken/care_task_groups | Create CareTaskGroup
[**tasqueCareTaskGroupAPIDelete**](TasqueCareTaskGroupApi.md#tasqueCareTaskGroupAPIDelete) | **DELETE** /v0/taken/care_task_groups/{id} | Deletes the CareTaskGroup with given id
[**tasqueCareTaskGroupAPIUpdate**](TasqueCareTaskGroupApi.md#tasqueCareTaskGroupAPIUpdate) | **PUT** /v0/taken/care_task_groups/{id} | Updates the given CareTaskGroup

<a name="tasqueCareTaskGroupAPIById"></a>
# **tasqueCareTaskGroupAPIById**
> TasqueCareTaskGroup tasqueCareTaskGroupAPIById(id)

Gets task group

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskGroupApi();
let id = "id_example"; // String | used for selecting CareTaskGroup

apiInstance.tasqueCareTaskGroupAPIById(id, (error, data, response) => {
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
 **id** | **String**| used for selecting CareTaskGroup | 

### Return type

[**TasqueCareTaskGroup**](TasqueCareTaskGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tasqueCareTaskGroupAPICreate"></a>
# **tasqueCareTaskGroupAPICreate**
> TasqueCareTaskGroup tasqueCareTaskGroupAPICreate(body)

Create CareTaskGroup

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskGroupApi();
let body = new NedapOnsApi.TasqueCareTaskGroup(); // TasqueCareTaskGroup | CareTaskGroup to create

apiInstance.tasqueCareTaskGroupAPICreate(body, (error, data, response) => {
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
 **body** | [**TasqueCareTaskGroup**](TasqueCareTaskGroup.md)| CareTaskGroup to create | 

### Return type

[**TasqueCareTaskGroup**](TasqueCareTaskGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tasqueCareTaskGroupAPIDelete"></a>
# **tasqueCareTaskGroupAPIDelete**
> tasqueCareTaskGroupAPIDelete(id)

Deletes the CareTaskGroup with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskGroupApi();
let id = "id_example"; // String | used for selecting CareTaskGroup

apiInstance.tasqueCareTaskGroupAPIDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| used for selecting CareTaskGroup | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="tasqueCareTaskGroupAPIUpdate"></a>
# **tasqueCareTaskGroupAPIUpdate**
> TasqueCareTaskGroup tasqueCareTaskGroupAPIUpdate(body, id)

Updates the given CareTaskGroup

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskGroupApi();
let body = new NedapOnsApi.TasqueCareTaskGroup(); // TasqueCareTaskGroup | CareTaskGroup to update
let id = "id_example"; // String | used for selecting CareTaskGroup

apiInstance.tasqueCareTaskGroupAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**TasqueCareTaskGroup**](TasqueCareTaskGroup.md)| CareTaskGroup to update | 
 **id** | **String**| used for selecting CareTaskGroup | 

### Return type

[**TasqueCareTaskGroup**](TasqueCareTaskGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

