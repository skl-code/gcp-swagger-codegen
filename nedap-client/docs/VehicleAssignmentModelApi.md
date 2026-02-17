# NedapOnsApi.VehicleAssignmentModelApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vehicleAssignmentModelAPIByEmployeeId**](VehicleAssignmentModelApi.md#vehicleAssignmentModelAPIByEmployeeId) | **GET** /v0/administration/authorized/employees/{employee_id}/vehicle | Returns the vehicleAssignments corresponding of the given employee_id
[**vehicleAssignmentModelAPICreateOrUpdateVehicleAssignments**](VehicleAssignmentModelApi.md#vehicleAssignmentModelAPICreateOrUpdateVehicleAssignments) | **PUT** /v0/administration/authorized/employees/{employee_id}/vehicle | Updates a specific vehicleAssignment for the given employee_id
[**vehicleAssignmentModelAPIRemoveVehicleAssignment**](VehicleAssignmentModelApi.md#vehicleAssignmentModelAPIRemoveVehicleAssignment) | **DELETE** /v0/administration/authorized/employees/{employee_id}/vehicle/{vehicle_assignment_id} | deletes a specific vehicleAssignment for the given employee_id

<a name="vehicleAssignmentModelAPIByEmployeeId"></a>
# **vehicleAssignmentModelAPIByEmployeeId**
> ListVehicleAssignmentModelList vehicleAssignmentModelAPIByEmployeeId(employeeId, opts)

Returns the vehicleAssignments corresponding of the given employee_id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.VehicleAssignmentModelApi();
let employeeId = 789; // Number | The objectid of an employee
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.vehicleAssignmentModelAPIByEmployeeId(employeeId, opts, (error, data, response) => {
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
 **employeeId** | **Number**| The objectid of an employee | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**ListVehicleAssignmentModelList**](ListVehicleAssignmentModelList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vehicleAssignmentModelAPICreateOrUpdateVehicleAssignments"></a>
# **vehicleAssignmentModelAPICreateOrUpdateVehicleAssignments**
> VehicleAssignmentModel vehicleAssignmentModelAPICreateOrUpdateVehicleAssignments(body, employeeId, opts)

Updates a specific vehicleAssignment for the given employee_id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.VehicleAssignmentModelApi();
let body = new NedapOnsApi.VehicleAssignmentModel(); // VehicleAssignmentModel | 
let employeeId = 789; // Number | 
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.vehicleAssignmentModelAPICreateOrUpdateVehicleAssignments(body, employeeId, opts, (error, data, response) => {
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
 **body** | [**VehicleAssignmentModel**](VehicleAssignmentModel.md)|  | 
 **employeeId** | **Number**|  | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**VehicleAssignmentModel**](VehicleAssignmentModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vehicleAssignmentModelAPIRemoveVehicleAssignment"></a>
# **vehicleAssignmentModelAPIRemoveVehicleAssignment**
> vehicleAssignmentModelAPIRemoveVehicleAssignment(employeeId, vehicleAssignmentId, opts)

deletes a specific vehicleAssignment for the given employee_id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.VehicleAssignmentModelApi();
let employeeId = 789; // Number | 
let vehicleAssignmentId = 789; // Number | 
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.vehicleAssignmentModelAPIRemoveVehicleAssignment(employeeId, vehicleAssignmentId, opts, (error, data, response) => {
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
 **vehicleAssignmentId** | **Number**|  | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

