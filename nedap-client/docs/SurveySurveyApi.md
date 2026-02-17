# NedapOnsApi.SurveySurveyApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**surveySurveyAPIAll**](SurveySurveyApi.md#surveySurveyAPIAll) | **GET** /v0/administration/survey/surveys | Returns every Survey available from the SurveyAPI
[**surveySurveyAPIById**](SurveySurveyApi.md#surveySurveyAPIById) | **GET** /v0/administration/survey/surveys/{id} | 
[**surveySurveyAPICreatableSurveysByEmployee**](SurveySurveyApi.md#surveySurveyAPICreatableSurveysByEmployee) | **GET** /v0/administration/survey/surveys/creatable_surveys_by_employee/{employee_id} | Return the creatable Surveys for the Employee corresponding to the given id
[**surveySurveyAPICreate**](SurveySurveyApi.md#surveySurveyAPICreate) | **POST** /v0/administration/survey/surveys | Create Survey
[**surveySurveyAPIDelete**](SurveySurveyApi.md#surveySurveyAPIDelete) | **DELETE** /v0/administration/survey/surveys/{id} | Deletes the Survey with given id
[**surveySurveyAPIUpdate**](SurveySurveyApi.md#surveySurveyAPIUpdate) | **PUT** /v0/administration/survey/surveys/{id} | Updates the given Survey

<a name="surveySurveyAPIAll"></a>
# **surveySurveyAPIAll**
> SurveyListSurveyList surveySurveyAPIAll()

Returns every Survey available from the SurveyAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.SurveySurveyApi();
apiInstance.surveySurveyAPIAll((error, data, response) => {
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

[**SurveyListSurveyList**](SurveyListSurveyList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="surveySurveyAPIById"></a>
# **surveySurveyAPIById**
> SurveySurvey surveySurveyAPIById(id)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.SurveySurveyApi();
let id = 789; // Number | used for selecting Survey

apiInstance.surveySurveyAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting Survey | 

### Return type

[**SurveySurvey**](SurveySurvey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="surveySurveyAPICreatableSurveysByEmployee"></a>
# **surveySurveyAPICreatableSurveysByEmployee**
> SurveyListSurveyList surveySurveyAPICreatableSurveysByEmployee(employeeId)

Return the creatable Surveys for the Employee corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.SurveySurveyApi();
let employeeId = 789; // Number | 

apiInstance.surveySurveyAPICreatableSurveysByEmployee(employeeId, (error, data, response) => {
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
 **employeeId** | **Number**|  | 

### Return type

[**SurveyListSurveyList**](SurveyListSurveyList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="surveySurveyAPICreate"></a>
# **surveySurveyAPICreate**
> SurveySurvey surveySurveyAPICreate(body)

Create Survey

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.SurveySurveyApi();
let body = new NedapOnsApi.SurveySurvey(); // SurveySurvey | Survey to create

apiInstance.surveySurveyAPICreate(body, (error, data, response) => {
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
 **body** | [**SurveySurvey**](SurveySurvey.md)| Survey to create | 

### Return type

[**SurveySurvey**](SurveySurvey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="surveySurveyAPIDelete"></a>
# **surveySurveyAPIDelete**
> surveySurveyAPIDelete(id)

Deletes the Survey with given id

It&#x27;s not possible to delete a survey that has results.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.SurveySurveyApi();
let id = 789; // Number | Identifier of Survey to delete.

apiInstance.surveySurveyAPIDelete(id, (error, data, response) => {
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
 **id** | **Number**| Identifier of Survey to delete. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="surveySurveyAPIUpdate"></a>
# **surveySurveyAPIUpdate**
> SurveySurvey surveySurveyAPIUpdate(body, id)

Updates the given Survey

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.SurveySurveyApi();
let body = new NedapOnsApi.SurveySurvey(); // SurveySurvey | Survey to update
let id = 789; // Number | Identifier of Survey to update.

apiInstance.surveySurveyAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**SurveySurvey**](SurveySurvey.md)| Survey to update | 
 **id** | **Number**| Identifier of Survey to update. | 

### Return type

[**SurveySurvey**](SurveySurvey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

