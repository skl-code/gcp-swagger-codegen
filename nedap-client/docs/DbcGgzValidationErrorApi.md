# NedapOnsApi.DbcGgzValidationErrorApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dbcGgzValidationErrorAPIBySubtraject**](DbcGgzValidationErrorApi.md#dbcGgzValidationErrorAPIBySubtraject) | **GET** /v0/dbc/ggz/subtraject/{subtraject_id}/validation_errors | Retrieve validation errors by subtrajectId.
[**dbcGgzValidationErrorAPIBySubtrajects**](DbcGgzValidationErrorApi.md#dbcGgzValidationErrorAPIBySubtrajects) | **GET** /v0/dbc/ggz/subtraject/validation_errors | Requires subtrajectIds.join(&#x27;&amp;&#x27;).length &lt; 2000  Retrieve validation errors by multiple subtrajectIds.

<a name="dbcGgzValidationErrorAPIBySubtraject"></a>
# **dbcGgzValidationErrorAPIBySubtraject**
> DbcGgzListValidationErrorList dbcGgzValidationErrorAPIBySubtraject(subtrajectId)

Retrieve validation errors by subtrajectId.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DbcGgzValidationErrorApi();
let subtrajectId = 789; // Number | 

apiInstance.dbcGgzValidationErrorAPIBySubtraject(subtrajectId, (error, data, response) => {
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
 **subtrajectId** | **Number**|  | 

### Return type

[**DbcGgzListValidationErrorList**](DbcGgzListValidationErrorList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dbcGgzValidationErrorAPIBySubtrajects"></a>
# **dbcGgzValidationErrorAPIBySubtrajects**
> DbcGgzListValidationErrorList dbcGgzValidationErrorAPIBySubtrajects(opts)

Requires subtrajectIds.join(&#x27;&amp;&#x27;).length &lt; 2000  Retrieve validation errors by multiple subtrajectIds.

Requires {@code subtrajectIds.join(&#x27;&amp;&#x27;).length &lt; 2000}  Retrieve validation errors by multiple subtrajectIds.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DbcGgzValidationErrorApi();
let opts = { 
  'subtrajectIds': [3.4] // [Number] | 
};
apiInstance.dbcGgzValidationErrorAPIBySubtrajects(opts, (error, data, response) => {
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
 **subtrajectIds** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**DbcGgzListValidationErrorList**](DbcGgzListValidationErrorList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

