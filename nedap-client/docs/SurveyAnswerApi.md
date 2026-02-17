# NedapOnsApi.SurveyAnswerApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**surveyAnswerAPIDelete**](SurveyAnswerApi.md#surveyAnswerAPIDelete) | **DELETE** /v0/administration/survey_answer/{id} | Deletes the Answer with given id

<a name="surveyAnswerAPIDelete"></a>
# **surveyAnswerAPIDelete**
> SurveyAnswer surveyAnswerAPIDelete(id, opts)

Deletes the Answer with given id

Answer IDs are found through the endpoint /t/suveys/survey_results/{survey_result_id}

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.SurveyAnswerApi();
let id = 789; // Number | Identifier of Answer to delete.
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example" // String | 
};
apiInstance.surveyAnswerAPIDelete(id, opts, (error, data, response) => {
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
 **id** | **Number**| Identifier of Answer to delete. | 
 **xCupidoUserName** | **String**|  | [optional] 

### Return type

[**SurveyAnswer**](SurveyAnswer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

