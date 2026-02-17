# NedapOnsApi.SurveyAnswerDefinitionGroupApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**surveyAnswerDefinitionGroupAPIAll**](SurveyAnswerDefinitionGroupApi.md#surveyAnswerDefinitionGroupAPIAll) | **GET** /v0/administration/survey/answer_definition_groups | Returns every AnswerDefinitionGroup available from the AnswerDefinitionGroupAPI
[**surveyAnswerDefinitionGroupAPIById**](SurveyAnswerDefinitionGroupApi.md#surveyAnswerDefinitionGroupAPIById) | **GET** /v0/administration/survey/answer_definition_groups/{id} | 
[**surveyAnswerDefinitionGroupAPICreate**](SurveyAnswerDefinitionGroupApi.md#surveyAnswerDefinitionGroupAPICreate) | **POST** /v0/administration/survey/answer_definition_groups | Create AnswerDefinitionGroup
[**surveyAnswerDefinitionGroupAPIUpdate**](SurveyAnswerDefinitionGroupApi.md#surveyAnswerDefinitionGroupAPIUpdate) | **PUT** /v0/administration/survey/answer_definition_groups/{id} | Updates the given AnswerDefinitionGroup

<a name="surveyAnswerDefinitionGroupAPIAll"></a>
# **surveyAnswerDefinitionGroupAPIAll**
> SurveyListAnswerDefinitionGroupList surveyAnswerDefinitionGroupAPIAll(opts)

Returns every AnswerDefinitionGroup available from the AnswerDefinitionGroupAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.SurveyAnswerDefinitionGroupApi();
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.surveyAnswerDefinitionGroupAPIAll(opts, (error, data, response) => {
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
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**SurveyListAnswerDefinitionGroupList**](SurveyListAnswerDefinitionGroupList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="surveyAnswerDefinitionGroupAPIById"></a>
# **surveyAnswerDefinitionGroupAPIById**
> SurveyAnswerDefinitionGroup surveyAnswerDefinitionGroupAPIById(id, opts)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.SurveyAnswerDefinitionGroupApi();
let id = 789; // Number | used for selecting AnswerDefinitionGroup
let opts = { 
  'include': ["include_example"], // [String] | 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.surveyAnswerDefinitionGroupAPIById(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting AnswerDefinitionGroup | 
 **include** | [**[String]**](String.md)|  | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**SurveyAnswerDefinitionGroup**](SurveyAnswerDefinitionGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="surveyAnswerDefinitionGroupAPICreate"></a>
# **surveyAnswerDefinitionGroupAPICreate**
> SurveyAnswerDefinitionGroup surveyAnswerDefinitionGroupAPICreate(body, opts)

Create AnswerDefinitionGroup

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.SurveyAnswerDefinitionGroupApi();
let body = new NedapOnsApi.SurveyAnswerDefinitionGroup(); // SurveyAnswerDefinitionGroup | AnswerDefinitionGroup to create
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.surveyAnswerDefinitionGroupAPICreate(body, opts, (error, data, response) => {
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
 **body** | [**SurveyAnswerDefinitionGroup**](SurveyAnswerDefinitionGroup.md)| AnswerDefinitionGroup to create | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**SurveyAnswerDefinitionGroup**](SurveyAnswerDefinitionGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="surveyAnswerDefinitionGroupAPIUpdate"></a>
# **surveyAnswerDefinitionGroupAPIUpdate**
> SurveyAnswerDefinitionGroup surveyAnswerDefinitionGroupAPIUpdate(body, id, opts)

Updates the given AnswerDefinitionGroup

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.SurveyAnswerDefinitionGroupApi();
let body = new NedapOnsApi.SurveyAnswerDefinitionGroup(); // SurveyAnswerDefinitionGroup | AnswerDefinitionGroup to update
let id = 789; // Number | used for selecting AnswerDefinitionGroup
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.surveyAnswerDefinitionGroupAPIUpdate(body, id, opts, (error, data, response) => {
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
 **body** | [**SurveyAnswerDefinitionGroup**](SurveyAnswerDefinitionGroup.md)| AnswerDefinitionGroup to update | 
 **id** | **Number**| used for selecting AnswerDefinitionGroup | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**SurveyAnswerDefinitionGroup**](SurveyAnswerDefinitionGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

