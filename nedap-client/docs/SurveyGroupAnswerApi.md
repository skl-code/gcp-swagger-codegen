# NedapOnsApi.SurveyGroupAnswerApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**surveyGroupAnswerAPIById**](SurveyGroupAnswerApi.md#surveyGroupAnswerAPIById) | **GET** /v0/administration/survey/group_answers/{id} | Return the Survey Group Answer corresponding to the given id

<a name="surveyGroupAnswerAPIById"></a>
# **surveyGroupAnswerAPIById**
> SurveyGroupAnswer surveyGroupAnswerAPIById(id)

Return the Survey Group Answer corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.SurveyGroupAnswerApi();
let id = 789; // Number | used for selecting GroupAnswer

apiInstance.surveyGroupAnswerAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting GroupAnswer | 

### Return type

[**SurveyGroupAnswer**](SurveyGroupAnswer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

