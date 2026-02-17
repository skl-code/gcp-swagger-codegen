# NedapOnsApi.PractitionerApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**practitionerAPIByAgb**](PractitionerApi.md#practitionerAPIByAgb) | **GET** /v0/administration/practitioners/by_agb/{agbcode} | Return the practitioner based on the given agbcode
[**practitionerAPIByEmployee**](PractitionerApi.md#practitionerAPIByEmployee) | **GET** /v0/administration/practitioners/by_employee/{employee_id} | Return the practitioner based on the given id of an employee
[**practitionerAPISearch**](PractitionerApi.md#practitionerAPISearch) | **GET** /v0/administration/practitioners/search | Return the practitioners based on the given search query

<a name="practitionerAPIByAgb"></a>
# **practitionerAPIByAgb**
> Practitioner practitionerAPIByAgb(agbcode)

Return the practitioner based on the given agbcode

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PractitionerApi();
let agbcode = "agbcode_example"; // String | the (primary) agbcode of an employee

apiInstance.practitionerAPIByAgb(agbcode, (error, data, response) => {
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
 **agbcode** | **String**| the (primary) agbcode of an employee | 

### Return type

[**Practitioner**](Practitioner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="practitionerAPIByEmployee"></a>
# **practitionerAPIByEmployee**
> Practitioner practitionerAPIByEmployee(employeeId)

Return the practitioner based on the given id of an employee

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PractitionerApi();
let employeeId = 789; // Number | The objectid of the employee

apiInstance.practitionerAPIByEmployee(employeeId, (error, data, response) => {
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
 **employeeId** | **Number**| The objectid of the employee | 

### Return type

[**Practitioner**](Practitioner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="practitionerAPISearch"></a>
# **practitionerAPISearch**
> ListPractitionerList practitionerAPISearch(query, opts)

Return the practitioners based on the given search query

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PractitionerApi();
let query = "query_example"; // String | the searchquery. for instance: the last name of a employee
let opts = { 
  'limit': 56, // Number | set the max size of the returned list
  'offset': 56, // Number | set position in the result list to start from
  '_date': new Date("2013-10-20") // Date | the date on which the practitioner should have a contract
};
apiInstance.practitionerAPISearch(query, opts, (error, data, response) => {
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
 **query** | **String**| the searchquery. for instance: the last name of a employee | 
 **limit** | **Number**| set the max size of the returned list | [optional] 
 **offset** | **Number**| set position in the result list to start from | [optional] 
 **_date** | **Date**| the date on which the practitioner should have a contract | [optional] 

### Return type

[**ListPractitionerList**](ListPractitionerList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

