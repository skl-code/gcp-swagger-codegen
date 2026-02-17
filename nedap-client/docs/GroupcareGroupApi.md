# NedapOnsApi.GroupcareGroupApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groupcareGroupAPIAll**](GroupcareGroupApi.md#groupcareGroupAPIAll) | **GET** /v0/groupcare/groups | Retrieves all groups that are not expired on the given date.
[**groupcareGroupAPIById**](GroupcareGroupApi.md#groupcareGroupAPIById) | **GET** /v0/groupcare/groups/{id} | Get GroupCare group by its identifier
[**groupcareGroupAPICreate**](GroupcareGroupApi.md#groupcareGroupAPICreate) | **POST** /v0/groupcare/groups | Create Groupcare Group
[**groupcareGroupAPIStreamAll**](GroupcareGroupApi.md#groupcareGroupAPIStreamAll) | **GET** /v0/xstream/groups/data | Returns Groups models in a streaming manner.
[**groupcareGroupAPIUpdate**](GroupcareGroupApi.md#groupcareGroupAPIUpdate) | **PUT** /v0/groupcare/groups/{id} | Updates the given Groupcare Group

<a name="groupcareGroupAPIAll"></a>
# **groupcareGroupAPIAll**
> GroupcareListGroupList groupcareGroupAPIAll(opts)

Retrieves all groups that are not expired on the given date.

When the date query parameter is missing it returns the groups that are active today.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.GroupcareGroupApi();
let opts = { 
  '_date': new Date("2013-10-20") // Date | date for which we want to query active groups
};
apiInstance.groupcareGroupAPIAll(opts, (error, data, response) => {
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
 **_date** | **Date**| date for which we want to query active groups | [optional] 

### Return type

[**GroupcareListGroupList**](GroupcareListGroupList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="groupcareGroupAPIById"></a>
# **groupcareGroupAPIById**
> GroupcareGroup groupcareGroupAPIById(id)

Get GroupCare group by its identifier

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.GroupcareGroupApi();
let id = 789; // Number | identifier of GroupCare Group to be found.

apiInstance.groupcareGroupAPIById(id, (error, data, response) => {
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
 **id** | **Number**| identifier of GroupCare Group to be found. | 

### Return type

[**GroupcareGroup**](GroupcareGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="groupcareGroupAPICreate"></a>
# **groupcareGroupAPICreate**
> GroupcareGroup groupcareGroupAPICreate(body)

Create Groupcare Group

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.GroupcareGroupApi();
let body = new NedapOnsApi.GroupcareGroup(); // GroupcareGroup | to create in Groupcare

apiInstance.groupcareGroupAPICreate(body, (error, data, response) => {
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
 **body** | [**GroupcareGroup**](GroupcareGroup.md)| to create in Groupcare | 

### Return type

[**GroupcareGroup**](GroupcareGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupcareGroupAPIStreamAll"></a>
# **groupcareGroupAPIStreamAll**
> GroupcareListGroupList groupcareGroupAPIStreamAll()

Returns Groups models in a streaming manner.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.GroupcareGroupApi();
apiInstance.groupcareGroupAPIStreamAll((error, data, response) => {
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

[**GroupcareListGroupList**](GroupcareListGroupList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="groupcareGroupAPIUpdate"></a>
# **groupcareGroupAPIUpdate**
> GroupcareGroup groupcareGroupAPIUpdate(body, id)

Updates the given Groupcare Group

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.GroupcareGroupApi();
let body = new NedapOnsApi.GroupcareGroup(); // GroupcareGroup | to update in Groupcare
let id = 789; // Number | identifier of GroupCare Group to be updated.

apiInstance.groupcareGroupAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**GroupcareGroup**](GroupcareGroup.md)| to update in Groupcare | 
 **id** | **Number**| identifier of GroupCare Group to be updated. | 

### Return type

[**GroupcareGroup**](GroupcareGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

