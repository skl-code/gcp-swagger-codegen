# NedapOnsApi.OnsimportRunApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**onsimportRunAPICreate**](OnsimportRunApi.md#onsimportRunAPICreate) | **POST** /v0/import/run | Creates a new run.
[**onsimportRunAPIDelete**](OnsimportRunApi.md#onsimportRunAPIDelete) | **DELETE** /v0/import/run/{run_id} | Deletes a run and any corresponding records, lookups, files and validations.
[**onsimportRunAPIGetAll**](OnsimportRunApi.md#onsimportRunAPIGetAll) | **GET** /v0/import/run | Returns a list of all runs.
[**onsimportRunAPIGetGeneratedReport**](OnsimportRunApi.md#onsimportRunAPIGetGeneratedReport) | **GET** /v0/import/run/{run_id}/report/{report_id} | Returns a report for a run.
[**onsimportRunAPIGetReport**](OnsimportRunApi.md#onsimportRunAPIGetReport) | **GET** /v0/import/run/{run_id}/report | Requests generating a report for a run.
[**onsimportRunAPIGetStatus**](OnsimportRunApi.md#onsimportRunAPIGetStatus) | **GET** /v0/import/run/{run_id}/status | Returns status information about a run.
[**onsimportRunAPIGetStatusForUpload**](OnsimportRunApi.md#onsimportRunAPIGetStatusForUpload) | **GET** /v0/import/run/{run_id}/status/{upload_id} | Returns status information about a run, including any file validation messages resulting from the file upload identified by uploadId.
[**onsimportRunAPIGetValidations**](OnsimportRunApi.md#onsimportRunAPIGetValidations) | **GET** /v0/import/run/{run_id}/validations | Returns all validation messages for the specified run.
[**onsimportRunAPIUploadBinaryFile**](OnsimportRunApi.md#onsimportRunAPIUploadBinaryFile) | **POST** /v0/import/run/binary | Uploads a binary file to be processed by Ons Import.
[**onsimportRunAPIUploadXml**](OnsimportRunApi.md#onsimportRunAPIUploadXml) | **POST** /v0/import/run/xml | Uploads xml content to be processed by Ons Import.

<a name="onsimportRunAPICreate"></a>
# **onsimportRunAPICreate**
> OnsimportRun onsimportRunAPICreate(body)

Creates a new run.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsimportRunApi();
let body = new NedapOnsApi.OnsimportRun(); // OnsimportRun | contains information about the new run.

apiInstance.onsimportRunAPICreate(body, (error, data, response) => {
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
 **body** | [**OnsimportRun**](OnsimportRun.md)| contains information about the new run. | 

### Return type

[**OnsimportRun**](OnsimportRun.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="onsimportRunAPIDelete"></a>
# **onsimportRunAPIDelete**
> OnsimportRun onsimportRunAPIDelete(runId)

Deletes a run and any corresponding records, lookups, files and validations.

A run can only be deleted if no records have been successfully imported (status &#x3D; SUCCESS).

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsimportRunApi();
let runId = "runId_example"; // String | the id of the run to be deleted.

apiInstance.onsimportRunAPIDelete(runId, (error, data, response) => {
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
 **runId** | **String**| the id of the run to be deleted. | 

### Return type

[**OnsimportRun**](OnsimportRun.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="onsimportRunAPIGetAll"></a>
# **onsimportRunAPIGetAll**
> OnsimportListRunList onsimportRunAPIGetAll()

Returns a list of all runs.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsimportRunApi();
apiInstance.onsimportRunAPIGetAll((error, data, response) => {
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

[**OnsimportListRunList**](OnsimportListRunList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="onsimportRunAPIGetGeneratedReport"></a>
# **onsimportRunAPIGetGeneratedReport**
> OnsimportRunReport onsimportRunAPIGetGeneratedReport(runId, reportId)

Returns a report for a run.

If the report is ready, it will be returned in the RunReport. Otherwise, the report field will be &lt;code&gt;null&lt;/code&gt;; wait and try again. Reports will be available for a limited time (2 hours) after generating.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsimportRunApi();
let runId = "runId_example"; // String | a run id.
let reportId = "reportId_example"; // String | a reportId that was obtained earlier.

apiInstance.onsimportRunAPIGetGeneratedReport(runId, reportId, (error, data, response) => {
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
 **runId** | **String**| a run id. | 
 **reportId** | **String**| a reportId that was obtained earlier. | 

### Return type

[**OnsimportRunReport**](OnsimportRunReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="onsimportRunAPIGetReport"></a>
# **onsimportRunAPIGetReport**
> OnsimportRunReport onsimportRunAPIGetReport(runId)

Requests generating a report for a run.

As the report will be generated asynchronously, this call will return a RunReport containing a reportId. Use the reportId to download the report in a separate call.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsimportRunApi();
let runId = "runId_example"; // String | a run id.

apiInstance.onsimportRunAPIGetReport(runId, (error, data, response) => {
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
 **runId** | **String**| a run id. | 

### Return type

[**OnsimportRunReport**](OnsimportRunReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="onsimportRunAPIGetStatus"></a>
# **onsimportRunAPIGetStatus**
> OnsimportRunStatus onsimportRunAPIGetStatus(runId)

Returns status information about a run.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsimportRunApi();
let runId = "runId_example"; // String | a run id.

apiInstance.onsimportRunAPIGetStatus(runId, (error, data, response) => {
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
 **runId** | **String**| a run id. | 

### Return type

[**OnsimportRunStatus**](OnsimportRunStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="onsimportRunAPIGetStatusForUpload"></a>
# **onsimportRunAPIGetStatusForUpload**
> OnsimportRunStatus onsimportRunAPIGetStatusForUpload(runId, uploadId)

Returns status information about a run, including any file validation messages resulting from the file upload identified by uploadId.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsimportRunApi();
let runId = "runId_example"; // String | a run id.
let uploadId = "uploadId_example"; // String | an uploadId that was obtained earlier by uploading xml  or a binary file.

apiInstance.onsimportRunAPIGetStatusForUpload(runId, uploadId, (error, data, response) => {
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
 **runId** | **String**| a run id. | 
 **uploadId** | **String**| an uploadId that was obtained earlier by uploading xml  or a binary file. | 

### Return type

[**OnsimportRunStatus**](OnsimportRunStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="onsimportRunAPIGetValidations"></a>
# **onsimportRunAPIGetValidations**
> OnsimportListValidationList onsimportRunAPIGetValidations(runId, opts)

Returns all validation messages for the specified run.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsimportRunApi();
let runId = "runId_example"; // String | a run id.
let opts = { 
  'offset': 56, // Number | number of results to skip
  'limit': 56 // Number | number of results for one call
};
apiInstance.onsimportRunAPIGetValidations(runId, opts, (error, data, response) => {
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
 **runId** | **String**| a run id. | 
 **offset** | **Number**| number of results to skip | [optional] 
 **limit** | **Number**| number of results for one call | [optional] 

### Return type

[**OnsimportListValidationList**](OnsimportListValidationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="onsimportRunAPIUploadBinaryFile"></a>
# **onsimportRunAPIUploadBinaryFile**
> OnsimportUploadResponse onsimportRunAPIUploadBinaryFile(body)

Uploads a binary file to be processed by Ons Import.

Refer to the Ons Import documentation on how to incorporate these files into an import. The upload will be processed asynchronously, so an uploadId is returned that can be used to poll for the status.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsimportRunApi();
let body = new NedapOnsApi.OnsimportBinaryFileRequest(); // OnsimportBinaryFileRequest | a request object containing the run id and  the binary file to be imported.

apiInstance.onsimportRunAPIUploadBinaryFile(body, (error, data, response) => {
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
 **body** | [**OnsimportBinaryFileRequest**](OnsimportBinaryFileRequest.md)| a request object containing the run id and  the binary file to be imported. | 

### Return type

[**OnsimportUploadResponse**](OnsimportUploadResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="onsimportRunAPIUploadXml"></a>
# **onsimportRunAPIUploadXml**
> OnsimportUploadResponse onsimportRunAPIUploadXml(body)

Uploads xml content to be processed by Ons Import.

Documentation for the xml format as well as an XSD can be obtained in the Ons Import application. The upload will be processed asynchronously, so an uploadId is returned that can be used to poll for the status.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsimportRunApi();
let body = new NedapOnsApi.OnsimportRecordsXmlRequest(); // OnsimportRecordsXmlRequest | a request object containing the run id and  the xml to be imported.

apiInstance.onsimportRunAPIUploadXml(body, (error, data, response) => {
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
 **body** | [**OnsimportRecordsXmlRequest**](OnsimportRecordsXmlRequest.md)| a request object containing the run id and  the xml to be imported. | 

### Return type

[**OnsimportUploadResponse**](OnsimportUploadResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

