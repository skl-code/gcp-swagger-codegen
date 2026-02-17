# NedapOnsApi.EmployeeAddressApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**employeeAddressAPIById**](EmployeeAddressApi.md#employeeAddressAPIById) | **GET** /v0/administration/employee_addresses/{id} | Return the Employee Address corresponding to the given
[**employeeAddressAPICreate**](EmployeeAddressApi.md#employeeAddressAPICreate) | **POST** /v0/administration/employee_addresses | Create EmployeeAddress
[**employeeAddressAPIStreamAll**](EmployeeAddressApi.md#employeeAddressAPIStreamAll) | **GET** /v0/xstream/employee_addresses/data | Return all EmployeeAddress models in a streaming manner
[**employeeAddressAPIStreamUpdates**](EmployeeAddressApi.md#employeeAddressAPIStreamUpdates) | **GET** /v0/xstream/employee_addresses/updates | Return all EmployeeAddress models which where updated since the date given in the request.

<a name="employeeAddressAPIById"></a>
# **employeeAddressAPIById**
> EmployeeAddress employeeAddressAPIById(id)

Return the Employee Address corresponding to the given

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EmployeeAddressApi();
let id = 789; // Number | used for selecting EmployeeAddress

apiInstance.employeeAddressAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting EmployeeAddress | 

### Return type

[**EmployeeAddress**](EmployeeAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="employeeAddressAPICreate"></a>
# **employeeAddressAPICreate**
> EmployeeAddress employeeAddressAPICreate(body)

Create EmployeeAddress

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EmployeeAddressApi();
let body = new NedapOnsApi.EmployeeAddress(); // EmployeeAddress | EmployeeAddress to create

apiInstance.employeeAddressAPICreate(body, (error, data, response) => {
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
 **body** | [**EmployeeAddress**](EmployeeAddress.md)| EmployeeAddress to create | 

### Return type

[**EmployeeAddress**](EmployeeAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="employeeAddressAPIStreamAll"></a>
# **employeeAddressAPIStreamAll**
> ListEmployeeAddressList employeeAddressAPIStreamAll()

Return all EmployeeAddress models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EmployeeAddressApi();
apiInstance.employeeAddressAPIStreamAll((error, data, response) => {
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

[**ListEmployeeAddressList**](ListEmployeeAddressList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="employeeAddressAPIStreamUpdates"></a>
# **employeeAddressAPIStreamUpdates**
> ListEmployeeAddressList employeeAddressAPIStreamUpdates(since)

Return all EmployeeAddress models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EmployeeAddressApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.employeeAddressAPIStreamUpdates(since, (error, data, response) => {
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
 **since** | **Date**|  | 

### Return type

[**ListEmployeeAddressList**](ListEmployeeAddressList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

