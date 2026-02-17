# NedapOnsApi.DossierReportTypeApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierReportTypeAPIAll**](DossierReportTypeApi.md#dossierReportTypeAPIAll) | **GET** /v0/administration/dossier/report_types | Returns every ReportType available from the ReportTypeAPI
[**dossierReportTypeAPIById**](DossierReportTypeApi.md#dossierReportTypeAPIById) | **GET** /v0/administration/dossier/report_types/{id} | 
[**dossierReportTypeAPIUpdate**](DossierReportTypeApi.md#dossierReportTypeAPIUpdate) | **PUT** /v0/administration/dossier/report_types/{id} | Updates the given ReportType

<a name="dossierReportTypeAPIAll"></a>
# **dossierReportTypeAPIAll**
> DossierListReportTypeList dossierReportTypeAPIAll(opts)

Returns every ReportType available from the ReportTypeAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportTypeApi();
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierReportTypeAPIAll(opts, (error, data, response) => {
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

[**DossierListReportTypeList**](DossierListReportTypeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierReportTypeAPIById"></a>
# **dossierReportTypeAPIById**
> DossierReportType dossierReportTypeAPIById(id, opts)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportTypeApi();
let id = 789; // Number | used for selecting ReportType
let opts = { 
  'include': ["include_example"], // [String] | 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierReportTypeAPIById(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting ReportType | 
 **include** | [**[String]**](String.md)|  | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierReportType**](DossierReportType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierReportTypeAPIUpdate"></a>
# **dossierReportTypeAPIUpdate**
> DossierReportType dossierReportTypeAPIUpdate(body, id, opts)

Updates the given ReportType

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportTypeApi();
let body = new NedapOnsApi.DossierReportType(); // DossierReportType | ReportType to update
let id = 789; // Number | used for selecting ReportType
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierReportTypeAPIUpdate(body, id, opts, (error, data, response) => {
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
 **body** | [**DossierReportType**](DossierReportType.md)| ReportType to update | 
 **id** | **Number**| used for selecting ReportType | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierReportType**](DossierReportType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

