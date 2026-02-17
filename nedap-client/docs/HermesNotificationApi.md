# NedapOnsApi.HermesNotificationApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hermesNotificationAPIByEmployeeId**](HermesNotificationApi.md#hermesNotificationAPIByEmployeeId) | **GET** /v0/notification/employees/{employee_id}/notifications | Return the hermes notifications of an Employee corresponding to the given id.
[**hermesNotificationAPIById**](HermesNotificationApi.md#hermesNotificationAPIById) | **GET** /v0/notification/notifications/{id} | 
[**hermesNotificationAPIByUuid**](HermesNotificationApi.md#hermesNotificationAPIByUuid) | **GET** /v0/notification/notifications/by_uuid/{uuid} | 
[**hermesNotificationAPICreate**](HermesNotificationApi.md#hermesNotificationAPICreate) | **POST** /v0/notification/notifications | Send a notification to an employee or user.

<a name="hermesNotificationAPIByEmployeeId"></a>
# **hermesNotificationAPIByEmployeeId**
> HermesListNotificationList hermesNotificationAPIByEmployeeId(employeeId)

Return the hermes notifications of an Employee corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.HermesNotificationApi();
let employeeId = 789; // Number | id

apiInstance.hermesNotificationAPIByEmployeeId(employeeId, (error, data, response) => {
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
 **employeeId** | **Number**| id | 

### Return type

[**HermesListNotificationList**](HermesListNotificationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="hermesNotificationAPIById"></a>
# **hermesNotificationAPIById**
> HermesNotification hermesNotificationAPIById(id)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.HermesNotificationApi();
let id = 789; // Number | used for selecting Notification

apiInstance.hermesNotificationAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting Notification | 

### Return type

[**HermesNotification**](HermesNotification.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="hermesNotificationAPIByUuid"></a>
# **hermesNotificationAPIByUuid**
> HermesNotification hermesNotificationAPIByUuid(uuid)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.HermesNotificationApi();
let uuid = "uuid_example"; // String | 

apiInstance.hermesNotificationAPIByUuid(uuid, (error, data, response) => {
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
 **uuid** | **String**|  | 

### Return type

[**HermesNotification**](HermesNotification.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="hermesNotificationAPICreate"></a>
# **hermesNotificationAPICreate**
> HermesNotification hermesNotificationAPICreate(body)

Send a notification to an employee or user.

There are 2 notification systems available, but /portal/notifications is deprecated since 28-10-2019, so you should not implement that one.  When hermes (ons-notificaties) is activated notifications are received by this api.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.HermesNotificationApi();
let body = new NedapOnsApi.HermesNotification(); // HermesNotification | 

apiInstance.hermesNotificationAPICreate(body, (error, data, response) => {
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
 **body** | [**HermesNotification**](HermesNotification.md)|  | 

### Return type

[**HermesNotification**](HermesNotification.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

