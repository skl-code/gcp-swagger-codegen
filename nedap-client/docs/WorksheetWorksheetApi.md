# NedapOnsApi.WorksheetWorksheetApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**worksheetWorksheetAPIGenerate**](WorksheetWorksheetApi.md#worksheetWorksheetAPIGenerate) | **GET** /v0/administration/worksheets/{employee_id} | Returns worksheet in pdf format

<a name="worksheetWorksheetAPIGenerate"></a>
# **worksheetWorksheetAPIGenerate**
> WorksheetWorksheet worksheetWorksheetAPIGenerate(employeeId, opts)

Returns worksheet in pdf format

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.WorksheetWorksheetApi();
let employeeId = 789; // Number | 
let opts = { 
  'validFrom': new Date("2013-10-20"), // Date | 
  'validTo': new Date("2013-10-20") // Date | 
};
apiInstance.worksheetWorksheetAPIGenerate(employeeId, opts, (error, data, response) => {
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
 **validFrom** | **Date**|  | [optional] 
 **validTo** | **Date**|  | [optional] 

### Return type

[**WorksheetWorksheet**](WorksheetWorksheet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

