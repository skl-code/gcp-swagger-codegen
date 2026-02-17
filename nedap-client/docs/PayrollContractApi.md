# NedapOnsApi.PayrollContractApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payrollContractAPIByEmployeeId**](PayrollContractApi.md#payrollContractAPIByEmployeeId) | **GET** /v0/administration/employees/{employee_id}/contracts | Return the contracts of an Employee corresponding to the given id.
[**payrollContractAPIById**](PayrollContractApi.md#payrollContractAPIById) | **GET** /v0/administration/contracts/{id} | Return the Contract corresponding to the given id
[**payrollContractAPICreate**](PayrollContractApi.md#payrollContractAPICreate) | **POST** /v0/administration/contracts | Create a new Contract
[**payrollContractAPIStreamAll**](PayrollContractApi.md#payrollContractAPIStreamAll) | **GET** /v0/xstream/contracts/data | Return all Contract models in a streaming manner
[**payrollContractAPIStreamUpdates**](PayrollContractApi.md#payrollContractAPIStreamUpdates) | **GET** /v0/xstream/contracts/updates | Return all Contract models which where updated since the date given in the request.
[**payrollContractAPIUpdate**](PayrollContractApi.md#payrollContractAPIUpdate) | **PUT** /v0/administration/contracts/{id} | Update an existing Contract

<a name="payrollContractAPIByEmployeeId"></a>
# **payrollContractAPIByEmployeeId**
> PayrollListContractList payrollContractAPIByEmployeeId(employeeId)

Return the contracts of an Employee corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollContractApi();
let employeeId = 789; // Number | id

apiInstance.payrollContractAPIByEmployeeId(employeeId, (error, data, response) => {
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

[**PayrollListContractList**](PayrollListContractList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payrollContractAPIById"></a>
# **payrollContractAPIById**
> PayrollContract payrollContractAPIById(id)

Return the Contract corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollContractApi();
let id = 789; // Number | used for selecting Contract

apiInstance.payrollContractAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting Contract | 

### Return type

[**PayrollContract**](PayrollContract.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payrollContractAPICreate"></a>
# **payrollContractAPICreate**
> PayrollContract payrollContractAPICreate(body)

Create a new Contract

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollContractApi();
let body = new NedapOnsApi.PayrollContract(); // PayrollContract | 

apiInstance.payrollContractAPICreate(body, (error, data, response) => {
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
 **body** | [**PayrollContract**](PayrollContract.md)|  | 

### Return type

[**PayrollContract**](PayrollContract.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="payrollContractAPIStreamAll"></a>
# **payrollContractAPIStreamAll**
> PayrollListContractList payrollContractAPIStreamAll()

Return all Contract models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollContractApi();
apiInstance.payrollContractAPIStreamAll((error, data, response) => {
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

[**PayrollListContractList**](PayrollListContractList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="payrollContractAPIStreamUpdates"></a>
# **payrollContractAPIStreamUpdates**
> PayrollListContractList payrollContractAPIStreamUpdates(since)

Return all Contract models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollContractApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.payrollContractAPIStreamUpdates(since, (error, data, response) => {
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

[**PayrollListContractList**](PayrollListContractList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="payrollContractAPIUpdate"></a>
# **payrollContractAPIUpdate**
> PayrollContract payrollContractAPIUpdate(body, id)

Update an existing Contract

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollContractApi();
let body = new NedapOnsApi.PayrollContract(); // PayrollContract | 
let id = 789; // Number | used for selecting Contract

apiInstance.payrollContractAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**PayrollContract**](PayrollContract.md)|  | 
 **id** | **Number**| used for selecting Contract | 

### Return type

[**PayrollContract**](PayrollContract.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

