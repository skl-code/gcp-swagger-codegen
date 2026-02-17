# NedapOnsApi.MovesEmployeeExportJobApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movesEmployeeExportJobAPICreate**](MovesEmployeeExportJobApi.md#movesEmployeeExportJobAPICreate) | **POST** /v0/plannen_roosteren/employee_export_jobs/create | Request to run the export for a single employee/date combination. (1) PresenceLogs are created in OnsPlanning, and immediately exported to OnsAdministration. When the export times out, the created PresenceLogs will be exported to OnsAdministration asynchronously. (2) The export can only be ran once for an employee/date combination. Rerunning or re-requesting the export is a no-op.
[**movesEmployeeExportJobAPIPreview**](MovesEmployeeExportJobApi.md#movesEmployeeExportJobAPIPreview) | **POST** /v0/plannen_roosteren/employee_export_jobs/preview | Return a preview for the specified employee export job

<a name="movesEmployeeExportJobAPICreate"></a>
# **movesEmployeeExportJobAPICreate**
> MovesEmployeeExportJob movesEmployeeExportJobAPICreate(body)

Request to run the export for a single employee/date combination. (1) PresenceLogs are created in OnsPlanning, and immediately exported to OnsAdministration. When the export times out, the created PresenceLogs will be exported to OnsAdministration asynchronously. (2) The export can only be ran once for an employee/date combination. Rerunning or re-requesting the export is a no-op.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesEmployeeExportJobApi();
let body = new NedapOnsApi.MovesEmployeeExportJob(); // MovesEmployeeExportJob | EmployeeExportJob specifying the employee/date combination for which export is requested.

apiInstance.movesEmployeeExportJobAPICreate(body, (error, data, response) => {
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
 **body** | [**MovesEmployeeExportJob**](MovesEmployeeExportJob.md)| EmployeeExportJob specifying the employee/date combination for which export is requested. | 

### Return type

[**MovesEmployeeExportJob**](MovesEmployeeExportJob.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="movesEmployeeExportJobAPIPreview"></a>
# **movesEmployeeExportJobAPIPreview**
> MovesEmployeeExportJob movesEmployeeExportJobAPIPreview(body)

Return a preview for the specified employee export job

Preview means the response will show which presence logs will be exported but not actually do so.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesEmployeeExportJobApi();
let body = new NedapOnsApi.MovesEmployeeExportJob(); // MovesEmployeeExportJob | EmployeeExportJob object to preview

apiInstance.movesEmployeeExportJobAPIPreview(body, (error, data, response) => {
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
 **body** | [**MovesEmployeeExportJob**](MovesEmployeeExportJob.md)| EmployeeExportJob object to preview | 

### Return type

[**MovesEmployeeExportJob**](MovesEmployeeExportJob.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

