# NedapOnsApi.EmployeeApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**employeeAPIBankAccount**](EmployeeApi.md#employeeAPIBankAccount) | **GET** /v0/administration/employees/{employee_id}/bank_account | Return the bank account assigned to the Employee corresponding to the given id
[**employeeAPIByEmail**](EmployeeApi.md#employeeAPIByEmail) | **GET** /v0/administration/employees/by_email | Return the employees with the given emailaddress.
[**employeeAPIById**](EmployeeApi.md#employeeAPIById) | **GET** /v0/administration/employees/{employee_id} | Find employee by employee object id.
[**employeeAPIByIdentificationNo**](EmployeeApi.md#employeeAPIByIdentificationNo) | **GET** /v0/administration/employees/by_identification_no/{identification_no} | Return the Employee corresponding to the given identification number.
[**employeeAPIByUuid**](EmployeeApi.md#employeeAPIByUuid) | **GET** /v0/administration/employees/by_uuid/{uuid} | Return the Employee corresponding to the given uuid.
[**employeeAPICoordinatingPractitionerByClientFinanceTypeDate**](EmployeeApi.md#employeeAPICoordinatingPractitionerByClientFinanceTypeDate) | **GET** /v0/administration/clients/{client_id}/finance_types/{finance_type_id}/coordinating_practitioner | Find the coordinating practitioner by client, finance type and date.
[**employeeAPICreate**](EmployeeApi.md#employeeAPICreate) | **POST** /v0/administration/employees | Create Employee
[**employeeAPILastVisitedByUserId**](EmployeeApi.md#employeeAPILastVisitedByUserId) | **GET** /v0/administration/users/{user_id}/last_visited_employees | Return the last visited Employees of a User corresponding to the given id.
[**employeeAPIMultiple**](EmployeeApi.md#employeeAPIMultiple) | **GET** /v0/administration/employees/multiple | Method used for requesting multiple Employee objects using  their ids.
[**employeeAPISearch**](EmployeeApi.md#employeeAPISearch) | **GET** /v0/administration/employees/find | Search for employees
[**employeeAPISearchByTeamId**](EmployeeApi.md#employeeAPISearchByTeamId) | **GET** /v0/administration/employees/search_by_team | Return the Employees who are a member of team corresponding to the given id.
[**employeeAPIStreamAll**](EmployeeApi.md#employeeAPIStreamAll) | **GET** /v0/xstream/employees/data | Return all Employee models in a streaming manner
[**employeeAPIStreamDeletes**](EmployeeApi.md#employeeAPIStreamDeletes) | **GET** /v0/xstream/employees/deletes | Return all Employee models which where deleted since the date given in the request.
[**employeeAPIStreamUpdates**](EmployeeApi.md#employeeAPIStreamUpdates) | **GET** /v0/xstream/employees/updates | Return all Employee models which where updated since the date given in the request.
[**employeeAPIUpdate**](EmployeeApi.md#employeeAPIUpdate) | **PUT** /v0/administration/employees/{employee_id} | Updates an employee

<a name="employeeAPIBankAccount"></a>
# **employeeAPIBankAccount**
> BankAccount employeeAPIBankAccount(employeeId)

Return the bank account assigned to the Employee corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EmployeeApi();
let employeeId = 789; // Number | the id of the employee

apiInstance.employeeAPIBankAccount(employeeId, (error, data, response) => {
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
 **employeeId** | **Number**| the id of the employee | 

### Return type

[**BankAccount**](BankAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="employeeAPIByEmail"></a>
# **employeeAPIByEmail**
> ListEmployeeList employeeAPIByEmail(opts)

Return the employees with the given emailaddress.

Note that passing an empty email query parameter is technically possible, but will result in finding all employees that have no email address assigned

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EmployeeApi();
let opts = { 
  'email': "email_example", // String | emailaddress
  'includeHomeEmail': true // Boolean | if `true` also Employees with the given home emailaddress are included in the result. When omitted, the value is set to `false`
};
apiInstance.employeeAPIByEmail(opts, (error, data, response) => {
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
 **email** | **String**| emailaddress | [optional] 
 **includeHomeEmail** | **Boolean**| if &#x60;true&#x60; also Employees with the given home emailaddress are included in the result. When omitted, the value is set to &#x60;false&#x60; | [optional] 

### Return type

[**ListEmployeeList**](ListEmployeeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="employeeAPIById"></a>
# **employeeAPIById**
> Employee employeeAPIById(employeeId)

Find employee by employee object id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EmployeeApi();
let employeeId = 789; // Number | The employee object id of the employee to find.

apiInstance.employeeAPIById(employeeId, (error, data, response) => {
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
 **employeeId** | **Number**| The employee object id of the employee to find. | 

### Return type

[**Employee**](Employee.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="employeeAPIByIdentificationNo"></a>
# **employeeAPIByIdentificationNo**
> Employee employeeAPIByIdentificationNo(identificationNo)

Return the Employee corresponding to the given identification number.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EmployeeApi();
let identificationNo = "identificationNo_example"; // String | 

apiInstance.employeeAPIByIdentificationNo(identificationNo, (error, data, response) => {
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
 **identificationNo** | **String**|  | 

### Return type

[**Employee**](Employee.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="employeeAPIByUuid"></a>
# **employeeAPIByUuid**
> Employee employeeAPIByUuid(uuid)

Return the Employee corresponding to the given uuid.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EmployeeApi();
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.employeeAPIByUuid(uuid, (error, data, response) => {
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
 **uuid** | [**String**](.md)|  | 

### Return type

[**Employee**](Employee.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="employeeAPICoordinatingPractitionerByClientFinanceTypeDate"></a>
# **employeeAPICoordinatingPractitionerByClientFinanceTypeDate**
> Employee employeeAPICoordinatingPractitionerByClientFinanceTypeDate(clientId, financeTypeId, _date, opts)

Find the coordinating practitioner by client, finance type and date.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EmployeeApi();
let clientId = 789; // Number | 
let financeTypeId = 789; // Number | The finance type of the care order in which the coordinating practitioner is defined. Finance types: * 14 - GGZ ZPM * 15 - FZ ZPM
let _date = new Date("2013-10-20"); // Date | date
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.employeeAPICoordinatingPractitionerByClientFinanceTypeDate(clientId, financeTypeId, _date, opts, (error, data, response) => {
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
 **clientId** | **Number**|  | 
 **financeTypeId** | **Number**| The finance type of the care order in which the coordinating practitioner is defined. Finance types: * 14 - GGZ ZPM * 15 - FZ ZPM | 
 **_date** | **Date**| date | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**Employee**](Employee.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="employeeAPICreate"></a>
# **employeeAPICreate**
> Employee employeeAPICreate(body)

Create Employee

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EmployeeApi();
let body = new NedapOnsApi.Employee(); // Employee | Employee to create.

apiInstance.employeeAPICreate(body, (error, data, response) => {
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
 **body** | [**Employee**](Employee.md)| Employee to create. | 

### Return type

[**Employee**](Employee.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="employeeAPILastVisitedByUserId"></a>
# **employeeAPILastVisitedByUserId**
> ListEmployeeList employeeAPILastVisitedByUserId(userId)

Return the last visited Employees of a User corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EmployeeApi();
let userId = 789; // Number | id

apiInstance.employeeAPILastVisitedByUserId(userId, (error, data, response) => {
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
 **userId** | **Number**| id | 

### Return type

[**ListEmployeeList**](ListEmployeeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="employeeAPIMultiple"></a>
# **employeeAPIMultiple**
> ListEmployeeList employeeAPIMultiple(opts)

Method used for requesting multiple Employee objects using  their ids.

Method used for requesting multiple Employee objects using their ids.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EmployeeApi();
let opts = { 
  'id': [3.4] // [Number] | array style id's: id=1&id=2&etc
};
apiInstance.employeeAPIMultiple(opts, (error, data, response) => {
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
 **id** | [**[Number]**](Number.md)| array style id&#x27;s: id&#x3D;1&amp;id&#x3D;2&amp;etc | [optional] 

### Return type

[**ListEmployeeList**](ListEmployeeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="employeeAPISearch"></a>
# **employeeAPISearch**
> ListEmployeeList employeeAPISearch(opts)

Search for employees

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EmployeeApi();
let opts = { 
  'query': "query_example", // String | query
  'employee': 789, // Number | the employee for which the search action is done
  'limit': 10, // Number | limit the amount of results by
  'offset': 0, // Number | start at the given offset
  'outOfDuty': true // Boolean | including employees out of duty
};
apiInstance.employeeAPISearch(opts, (error, data, response) => {
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
 **query** | **String**| query | [optional] 
 **employee** | **Number**| the employee for which the search action is done | [optional] 
 **limit** | **Number**| limit the amount of results by | [optional] [default to 10]
 **offset** | **Number**| start at the given offset | [optional] [default to 0]
 **outOfDuty** | **Boolean**| including employees out of duty | [optional] 

### Return type

[**ListEmployeeList**](ListEmployeeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="employeeAPISearchByTeamId"></a>
# **employeeAPISearchByTeamId**
> ListEmployeeList employeeAPISearchByTeamId(teamId, opts)

Return the Employees who are a member of team corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EmployeeApi();
let teamId = 789; // Number | 
let opts = { 
  'offset': 0, // Number | number of results to skip
  'limit': 10, // Number | number of results for one call
  'validFrom': new Date("2013-10-20"), // Date | starting time
  'validTo': new Date("2013-10-20") // Date | end time
};
apiInstance.employeeAPISearchByTeamId(teamId, opts, (error, data, response) => {
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
 **teamId** | **Number**|  | 
 **offset** | **Number**| number of results to skip | [optional] [default to 0]
 **limit** | **Number**| number of results for one call | [optional] [default to 10]
 **validFrom** | **Date**| starting time | [optional] 
 **validTo** | **Date**| end time | [optional] 

### Return type

[**ListEmployeeList**](ListEmployeeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="employeeAPIStreamAll"></a>
# **employeeAPIStreamAll**
> ListEmployeeList employeeAPIStreamAll()

Return all Employee models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EmployeeApi();
apiInstance.employeeAPIStreamAll((error, data, response) => {
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

[**ListEmployeeList**](ListEmployeeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="employeeAPIStreamDeletes"></a>
# **employeeAPIStreamDeletes**
> ListEmployeeList employeeAPIStreamDeletes(since)

Return all Employee models which where deleted since the date given in the request.

If no date is given it will return all deleted Employee models

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EmployeeApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.employeeAPIStreamDeletes(since, (error, data, response) => {
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

[**ListEmployeeList**](ListEmployeeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="employeeAPIStreamUpdates"></a>
# **employeeAPIStreamUpdates**
> ListEmployeeList employeeAPIStreamUpdates(since)

Return all Employee models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EmployeeApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.employeeAPIStreamUpdates(since, (error, data, response) => {
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

[**ListEmployeeList**](ListEmployeeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="employeeAPIUpdate"></a>
# **employeeAPIUpdate**
> Employee employeeAPIUpdate(body, employeeId)

Updates an employee

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EmployeeApi();
let body = new NedapOnsApi.Employee(); // Employee | 
let employeeId = 789; // Number | id of the employee to update

apiInstance.employeeAPIUpdate(body, employeeId, (error, data, response) => {
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
 **body** | [**Employee**](Employee.md)|  | 
 **employeeId** | **Number**| id of the employee to update | 

### Return type

[**Employee**](Employee.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

