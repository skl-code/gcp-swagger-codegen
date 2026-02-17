# NedapOnsApi.CostCenterSelectionOptionApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**costCenterSelectionOptionAPICostCenterSelectionOptions**](CostCenterSelectionOptionApi.md#costCenterSelectionOptionAPICostCenterSelectionOptions) | **GET** /v0/administration/cost_centers/costCenterSelectionOptions | Returns every CostCenterSelectionOption for the selection from the CostCenterSelectionOptionAPI

<a name="costCenterSelectionOptionAPICostCenterSelectionOptions"></a>
# **costCenterSelectionOptionAPICostCenterSelectionOptions**
> ListCostCenterSelectionOptionList costCenterSelectionOptionAPICostCenterSelectionOptions(_date, employeeId, opts)

Returns every CostCenterSelectionOption for the selection from the CostCenterSelectionOptionAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CostCenterSelectionOptionApi();
let _date = new Date("2013-10-20"); // Date | 
let employeeId = 789; // Number | 
let opts = { 
  'clientObjectIds': [3.4] // [Number] | 
};
apiInstance.costCenterSelectionOptionAPICostCenterSelectionOptions(_date, employeeId, opts, (error, data, response) => {
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
 **_date** | **Date**|  | 
 **employeeId** | **Number**|  | 
 **clientObjectIds** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**ListCostCenterSelectionOptionList**](ListCostCenterSelectionOptionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

