# NedapOnsApi.SurveySurveyResultApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**surveySurveyResultAPIByClientId**](SurveySurveyResultApi.md#surveySurveyResultAPIByClientId) | **GET** /v0/administration/survey_result/survey_results_by_client/{client_id} | Return the survey results of a Client corresponding to the given id.
[**surveySurveyResultAPIById**](SurveySurveyResultApi.md#surveySurveyResultAPIById) | **GET** /v0/administration/survey_result/{id} | 
[**surveySurveyResultAPIBySurveyId**](SurveySurveyResultApi.md#surveySurveyResultAPIBySurveyId) | **GET** /v0/administration/survey_result/by_survey/{survey_id} | Return the SurveyResults of a Survey corresponding to the given id.
[**surveySurveyResultAPICreate**](SurveySurveyResultApi.md#surveySurveyResultAPICreate) | **POST** /v0/administration/survey_result | Create SurveyResult
[**surveySurveyResultAPIDelete**](SurveySurveyResultApi.md#surveySurveyResultAPIDelete) | **DELETE** /v0/administration/survey_result/{id} | Deletes the SurveyResult with given id
[**surveySurveyResultAPIDuplicate**](SurveySurveyResultApi.md#surveySurveyResultAPIDuplicate) | **POST** /v0/administration/survey_result/{survey_result_id}/duplicate | Duplicate a Survey Result
[**surveySurveyResultAPIUpdate**](SurveySurveyResultApi.md#surveySurveyResultAPIUpdate) | **PUT** /v0/administration/survey_result/{id} | Updates the given SurveyResult

<a name="surveySurveyResultAPIByClientId"></a>
# **surveySurveyResultAPIByClientId**
> SurveyListSurveyResultList surveySurveyResultAPIByClientId(clientId, opts)

Return the survey results of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.SurveySurveyResultApi();
let clientId = 789; // Number | id
let opts = { 
  'employeeId': 789 // Number | 
};
apiInstance.surveySurveyResultAPIByClientId(clientId, opts, (error, data, response) => {
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
 **clientId** | **Number**| id | 
 **employeeId** | **Number**|  | [optional] 

### Return type

[**SurveyListSurveyResultList**](SurveyListSurveyResultList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="surveySurveyResultAPIById"></a>
# **surveySurveyResultAPIById**
> SurveySurveyResult surveySurveyResultAPIById(id)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.SurveySurveyResultApi();
let id = 789; // Number | used for selecting SurveyResult

apiInstance.surveySurveyResultAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting SurveyResult | 

### Return type

[**SurveySurveyResult**](SurveySurveyResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="surveySurveyResultAPIBySurveyId"></a>
# **surveySurveyResultAPIBySurveyId**
> SurveyListSurveyResultList surveySurveyResultAPIBySurveyId(surveyId, opts)

Return the SurveyResults of a Survey corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.SurveySurveyResultApi();
let surveyId = 789; // Number | id
let opts = { 
  'employeeId': 789, // Number | 
  'updatedSince': new Date("2013-10-20") // Date | 
};
apiInstance.surveySurveyResultAPIBySurveyId(surveyId, opts, (error, data, response) => {
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
 **surveyId** | **Number**| id | 
 **employeeId** | **Number**|  | [optional] 
 **updatedSince** | **Date**|  | [optional] 

### Return type

[**SurveyListSurveyResultList**](SurveyListSurveyResultList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="surveySurveyResultAPICreate"></a>
# **surveySurveyResultAPICreate**
> SurveySurveyResult surveySurveyResultAPICreate(body, opts)

Create SurveyResult

It is not allowed to post surveys without answers. Username must be set.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.SurveySurveyResultApi();
let body = new NedapOnsApi.SurveySurveyResult(); // SurveySurveyResult | SurveyResult to create
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example" // String | 
};
apiInstance.surveySurveyResultAPICreate(body, opts, (error, data, response) => {
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
 **body** | [**SurveySurveyResult**](SurveySurveyResult.md)| SurveyResult to create | 
 **xCupidoUserName** | **String**|  | [optional] 

### Return type

[**SurveySurveyResult**](SurveySurveyResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="surveySurveyResultAPIDelete"></a>
# **surveySurveyResultAPIDelete**
> surveySurveyResultAPIDelete(id)

Deletes the SurveyResult with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.SurveySurveyResultApi();
let id = 789; // Number | Identifier of SurveyResult to delete.

apiInstance.surveySurveyResultAPIDelete(id, (error, data, response) => {
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
 **id** | **Number**| Identifier of SurveyResult to delete. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="surveySurveyResultAPIDuplicate"></a>
# **surveySurveyResultAPIDuplicate**
> SurveySurveyResult surveySurveyResultAPIDuplicate(surveyResultId, opts)

Duplicate a Survey Result

When used through Ons API, the employee_id for the copied SurveyResult is set to a default user. This employee_id can be changed by using the PUT operation on the newly created SurveyResult.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.SurveySurveyResultApi();
let surveyResultId = 789; // Number | 
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example" // String | 
};
apiInstance.surveySurveyResultAPIDuplicate(surveyResultId, opts, (error, data, response) => {
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
 **surveyResultId** | **Number**|  | 
 **xCupidoUserName** | **String**|  | [optional] 

### Return type

[**SurveySurveyResult**](SurveySurveyResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="surveySurveyResultAPIUpdate"></a>
# **surveySurveyResultAPIUpdate**
> SurveySurveyResult surveySurveyResultAPIUpdate(body, id)

Updates the given SurveyResult

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.SurveySurveyResultApi();
let body = new NedapOnsApi.SurveySurveyResult(); // SurveySurveyResult | SurveyResult to update
let id = 789; // Number | Identifier of SurveyResult to update.

apiInstance.surveySurveyResultAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**SurveySurveyResult**](SurveySurveyResult.md)| SurveyResult to update | 
 **id** | **Number**| Identifier of SurveyResult to update. | 

### Return type

[**SurveySurveyResult**](SurveySurveyResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

