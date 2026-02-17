# NedapOnsApi.FinanceParallelCareOrderApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**financeParallelCareOrderAPIByEmployeeAndClientAtDate**](FinanceParallelCareOrderApi.md#financeParallelCareOrderAPIByEmployeeAndClientAtDate) | **GET** /v0/administration/finance/parallel_care_orders/by_employee_and_client_at_date/{employee_object_id} | 

<a name="financeParallelCareOrderAPIByEmployeeAndClientAtDate"></a>
# **financeParallelCareOrderAPIByEmployeeAndClientAtDate**
> FinanceListParallelCareOrderList financeParallelCareOrderAPIByEmployeeAndClientAtDate(employeeObjectId, clientId, sourceType, _date)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceParallelCareOrderApi();
let employeeObjectId = 56; // Number | 
let clientId = 56; // Number | 
let sourceType = 56; // Number | Is used to determine filtering. Valid values are: 1 (iO Smart), 2 (TouchPro), 3 (Manual), 4 (Timesheet), 5 (A priori), 6 (Planning), 7 (iO Me), 8 (Group care (old)), 9 (Schedule), 10 (Import without overlap), 11 (Import with overlap), 12 (Ons Agenda), 13 (Group care (new)), 14 (Ysis), 15 (Ons DBC) and 16 (Ons Vandaag). Filtering is only performed when values for Ons Agenda, Io Me or Ons Vandaag are provided.
let _date = new Date("2013-10-20"); // Date | 

apiInstance.financeParallelCareOrderAPIByEmployeeAndClientAtDate(employeeObjectId, clientId, sourceType, _date, (error, data, response) => {
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
 **employeeObjectId** | **Number**|  | 
 **clientId** | **Number**|  | 
 **sourceType** | **Number**| Is used to determine filtering. Valid values are: 1 (iO Smart), 2 (TouchPro), 3 (Manual), 4 (Timesheet), 5 (A priori), 6 (Planning), 7 (iO Me), 8 (Group care (old)), 9 (Schedule), 10 (Import without overlap), 11 (Import with overlap), 12 (Ons Agenda), 13 (Group care (new)), 14 (Ysis), 15 (Ons DBC) and 16 (Ons Vandaag). Filtering is only performed when values for Ons Agenda, Io Me or Ons Vandaag are provided. | 
 **_date** | **Date**|  | 

### Return type

[**FinanceListParallelCareOrderList**](FinanceListParallelCareOrderList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

