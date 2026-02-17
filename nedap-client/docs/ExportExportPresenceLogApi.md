# NedapOnsApi.ExportExportPresenceLogApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportExportPresenceLogAPICollect**](ExportExportPresenceLogApi.md#exportExportPresenceLogAPICollect) | **GET** /v0/administration/export/export_presence_logs/collect | Collects the Export Presence Logs
[**exportExportPresenceLogAPIResultByUuid**](ExportExportPresenceLogApi.md#exportExportPresenceLogAPIResultByUuid) | **GET** /v0/administration/export/export_presence_logs/result/{uuid} | Return the results of the Export Presence Log corresponding to the given uuid
[**exportExportPresenceLogAPIStatusByUuid**](ExportExportPresenceLogApi.md#exportExportPresenceLogAPIStatusByUuid) | **GET** /v0/administration/export/export_presence_logs/status/{uuid} | Return the status of the Export Presence Log corresponding to the given uuid

<a name="exportExportPresenceLogAPICollect"></a>
# **exportExportPresenceLogAPICollect**
> ExportExportUuid exportExportPresenceLogAPICollect(filterName, _date, compressionType, verifiedOnly, opts)

Collects the Export Presence Logs

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExportExportPresenceLogApi();
let filterName = "filterName_example"; // String | as string
let _date = "_date_example"; // String | as string, yyyy-MM-dd
let compressionType = 56; // Number | as integer
let verifiedOnly = true; // Boolean | as boolean
let opts = { 
  'employeeId': 789, // Number | as long
  'preventOverlap': true, // Boolean | as boolean
  'useDirectCode': true // Boolean | as boolean
};
apiInstance.exportExportPresenceLogAPICollect(filterName, _date, compressionType, verifiedOnly, opts, (error, data, response) => {
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
 **filterName** | **String**| as string | 
 **_date** | **String**| as string, yyyy-MM-dd | 
 **compressionType** | **Number**| as integer | 
 **verifiedOnly** | **Boolean**| as boolean | 
 **employeeId** | **Number**| as long | [optional] 
 **preventOverlap** | **Boolean**| as boolean | [optional] 
 **useDirectCode** | **Boolean**| as boolean | [optional] 

### Return type

[**ExportExportUuid**](ExportExportUuid.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="exportExportPresenceLogAPIResultByUuid"></a>
# **exportExportPresenceLogAPIResultByUuid**
> ExportListExportPresenceLogList exportExportPresenceLogAPIResultByUuid(uuid)

Return the results of the Export Presence Log corresponding to the given uuid

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExportExportPresenceLogApi();
let uuid = "uuid_example"; // String | as string

apiInstance.exportExportPresenceLogAPIResultByUuid(uuid, (error, data, response) => {
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
 **uuid** | **String**| as string | 

### Return type

[**ExportListExportPresenceLogList**](ExportListExportPresenceLogList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="exportExportPresenceLogAPIStatusByUuid"></a>
# **exportExportPresenceLogAPIStatusByUuid**
> ExportExportStatus exportExportPresenceLogAPIStatusByUuid(uuid)

Return the status of the Export Presence Log corresponding to the given uuid

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExportExportPresenceLogApi();
let uuid = "uuid_example"; // String | as string

apiInstance.exportExportPresenceLogAPIStatusByUuid(uuid, (error, data, response) => {
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
 **uuid** | **String**| as string | 

### Return type

[**ExportExportStatus**](ExportExportStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

