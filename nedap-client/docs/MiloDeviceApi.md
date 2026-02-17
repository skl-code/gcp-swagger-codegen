# NedapOnsApi.MiloDeviceApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**miloDeviceAPIByDeviceCode**](MiloDeviceApi.md#miloDeviceAPIByDeviceCode) | **GET** /v0/mobile_backend/devices/by_device_code/{device_code} | Return the device based on device_code.
[**miloDeviceAPIByEmployeeId**](MiloDeviceApi.md#miloDeviceAPIByEmployeeId) | **GET** /v0/mobile_backend/devices/by_employee/{employee_id} | Return the devices of an Employee corresponding to the given id.
[**miloDeviceAPIRequestOneTimePassword**](MiloDeviceApi.md#miloDeviceAPIRequestOneTimePassword) | **GET** /v0/mobile_backend/totp/request_totp | Request a one time password for the device which correspond with the device id.
[**miloDeviceAPIRequestOneTimePasswordByEmployee**](MiloDeviceApi.md#miloDeviceAPIRequestOneTimePasswordByEmployee) | **GET** /v0/mobile_backend/totp/by_employee/{employee_id}/request_totp | Request a one time password by employee.
[**miloDeviceAPIVerifyOneTimePassword**](MiloDeviceApi.md#miloDeviceAPIVerifyOneTimePassword) | **POST** /v0/mobile_backend/totp/verify_totp | Verify if one time password is valid by device.
[**miloDeviceAPIVerifyOneTimePasswordByEmployee**](MiloDeviceApi.md#miloDeviceAPIVerifyOneTimePasswordByEmployee) | **POST** /v0/mobile_backend/totp/by_employee/{employee_id}/verify_totp | Verify if one time password is valid by employee.

<a name="miloDeviceAPIByDeviceCode"></a>
# **miloDeviceAPIByDeviceCode**
> MiloDevice miloDeviceAPIByDeviceCode(deviceCode)

Return the device based on device_code.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MiloDeviceApi();
let deviceCode = "deviceCode_example"; // String | The device code of the device

apiInstance.miloDeviceAPIByDeviceCode(deviceCode, (error, data, response) => {
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
 **deviceCode** | **String**| The device code of the device | 

### Return type

[**MiloDevice**](MiloDevice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="miloDeviceAPIByEmployeeId"></a>
# **miloDeviceAPIByEmployeeId**
> MiloListDeviceList miloDeviceAPIByEmployeeId(employeeId)

Return the devices of an Employee corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MiloDeviceApi();
let employeeId = 789; // Number | id

apiInstance.miloDeviceAPIByEmployeeId(employeeId, (error, data, response) => {
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

[**MiloListDeviceList**](MiloListDeviceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="miloDeviceAPIRequestOneTimePassword"></a>
# **miloDeviceAPIRequestOneTimePassword**
> miloDeviceAPIRequestOneTimePassword(opts)

Request a one time password for the device which correspond with the device id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MiloDeviceApi();
let opts = { 
  'deviceId': 789 // Number | id of the device
};
apiInstance.miloDeviceAPIRequestOneTimePassword(opts, (error, data, response) => {
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
 **deviceId** | **Number**| id of the device | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="miloDeviceAPIRequestOneTimePasswordByEmployee"></a>
# **miloDeviceAPIRequestOneTimePasswordByEmployee**
> miloDeviceAPIRequestOneTimePasswordByEmployee(employeeId)

Request a one time password by employee.

Request will be send to totp app(s) owned by employee to inform mobile to fetch a totp code.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MiloDeviceApi();
let employeeId = 789; // Number | 

apiInstance.miloDeviceAPIRequestOneTimePasswordByEmployee(employeeId, (error, data, response) => {
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
 **employeeId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="miloDeviceAPIVerifyOneTimePassword"></a>
# **miloDeviceAPIVerifyOneTimePassword**
> MiloPasswordVerification miloDeviceAPIVerifyOneTimePassword(opts)

Verify if one time password is valid by device.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MiloDeviceApi();
let opts = { 
  'deviceId': 789, // Number | id of the device
  'code': 789 // Number | the Time-based One Time Password
};
apiInstance.miloDeviceAPIVerifyOneTimePassword(opts, (error, data, response) => {
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
 **deviceId** | **Number**| id of the device | [optional] 
 **code** | **Number**| the Time-based One Time Password | [optional] 

### Return type

[**MiloPasswordVerification**](MiloPasswordVerification.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="miloDeviceAPIVerifyOneTimePasswordByEmployee"></a>
# **miloDeviceAPIVerifyOneTimePasswordByEmployee**
> MiloPasswordVerification miloDeviceAPIVerifyOneTimePasswordByEmployee(employeeId, code)

Verify if one time password is valid by employee.

Verifies if one time password entered by employee is the last unused one created for one of employees devices.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MiloDeviceApi();
let employeeId = 789; // Number | id of the employee
let code = 789; // Number | the Time-based One Time Password

apiInstance.miloDeviceAPIVerifyOneTimePasswordByEmployee(employeeId, code, (error, data, response) => {
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
 **employeeId** | **Number**| id of the employee | 
 **code** | **Number**| the Time-based One Time Password | 

### Return type

[**MiloPasswordVerification**](MiloPasswordVerification.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

